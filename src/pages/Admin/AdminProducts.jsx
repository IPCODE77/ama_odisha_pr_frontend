
import React, { useState } from 'react';
import {
    FaPlus, FaSearch, FaEdit, FaTrash, FaTimes,
    FaBox, FaCloudUploadAlt
} from 'react-icons/fa';
import './AdminProducts.css';

const initialProducts = [
    {
        id: 1,
        name: 'Traditional Odisha Mudhi',
        category: 'Snacks',
        price: 120,
        salePrice: 100,
        stock: 45,
        weight: '200g',
        description: 'Traditional crispy puffed rice from Odisha.',
        ingredients: 'Rice, salt, oil',
        image: ''
    },
    {
        id: 2,
        name: 'Special Odisha Mixture',
        category: 'Namkeen',
        price: 220,
        salePrice: 180,
        stock: 32,
        weight: '250g',
        description: 'A delicious traditional mixture with a spicy flavour.',
        ingredients: 'Gram flour, peanuts, spices',
        image: ''
    },
    {
        id: 3,
        name: 'Authentic Odisha Khaja',
        category: 'Sweets',
        price: 250,
        salePrice: 200,
        stock: 18,
        weight: '500g',
        description: 'Traditional layered sweet from Odisha.',
        ingredients: 'Flour, sugar, ghee',
        image: ''
    },
    {
        id: 4,
        name: 'Homemade Badi',
        category: 'Traditional Food',
        price: 180,
        salePrice: 150,
        stock: 60,
        weight: '250g',
        description: 'Homemade sun-dried lentil badi.',
        ingredients: 'Lentils, spices',
        image: ''
    }
];

const emptyForm = {
    name: '',
    category: '',
    price: '',
    salePrice: '',
    stock: '',
    weight: '',
    description: '',
    ingredients: '',
    image: '',
    imageFile: null
};

const AdminProducts = () => {
    const [products, setProducts] = useState(initialProducts);
    const [searchTerm, setSearchTerm] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState(emptyForm);
    const [editingId, setEditingId] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setFormData((prev) => ({
                ...prev,
                imageFile: file,
                image: URL.createObjectURL(file)
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const productData = {
            ...formData,
            id: editingId || Date.now(),
            price: Number(formData.price),
            salePrice: Number(formData.salePrice),
            stock: Number(formData.stock)
        };

        if (editingId) {
            setProducts((prev) =>
                prev.map((product) =>
                    product.id === editingId ? productData : product
                )
            );
        } else {
            setProducts((prev) => [productData, ...prev]);
        }

        setFormData(emptyForm);
        setEditingId(null);
        setShowForm(false);
    };

    const handleEdit = (product) => {
        setFormData({
            ...product,
            imageFile: null
        });
        setEditingId(product.id);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        const confirmDelete = window.confirm(
            'Are you sure you want to delete this product?'
        );

        if (confirmDelete) {
            setProducts((prev) =>
                prev.filter((product) => product.id !== id)
            );
        }
    };

    const closeForm = () => {
        setShowForm(false);
        setFormData(emptyForm);
        setEditingId(null);
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="admin-products">

            {/* Header */}
            <div className="admin-products-header">
                <div>
                    <span className="admin-products-overline">STORE INVENTORY</span>
                    <h1>Products</h1>
                    <p>Manage your products, pricing and stock.</p>
                </div>

                <button
                    className="admin-add-product-btn"
                    onClick={() => {
                        setFormData(emptyForm);
                        setEditingId(null);
                        setShowForm(true);
                    }}
                >
                    <FaPlus /> Add Product
                </button>
            </div>

            {/* Product Summary */}
            <div className="admin-products-summary">
                <div className="admin-product-summary-card">
                    <div className="admin-product-summary-icon">
                        <FaBox />
                    </div>
                    <div>
                        <span>Total Products</span>
                        <h2>{products.length}</h2>
                    </div>
                </div>

                <div className="admin-product-summary-card">
                    <div className="admin-product-summary-icon low-stock">
                        <FaBox />
                    </div>
                    <div>
                        <span>Low Stock Products</span>
                        <h2>{products.filter((p) => p.stock < 20).length}</h2>
                    </div>
                </div>
            </div>

            {/* Product Listing */}
            <div className="admin-products-panel">

                <div className="admin-products-toolbar">
                    <div>
                        <h2>Product Inventory</h2>
                        <p>All products available in your store</p>
                    </div>

                    <div className="admin-products-search">
                        <FaSearch />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="admin-products-table-wrapper">
                    <table className="admin-products-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Sale Price</th>
                                <th>Stock</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredProducts.map((product) => (
                                <tr key={product.id}>
                                    <td>
                                        <div className="admin-product-table-info">
                                            <div className="admin-product-table-image">
                                                {product.image ? (
                                                    <img src={product.image} alt={product.name} />
                                                ) : (
                                                    <FaBox />
                                                )}
                                            </div>
                                            <div>
                                                <strong>{product.name}</strong>
                                                <span>{product.weight}</span>
                                            </div>
                                        </div>
                                    </td>

                                    <td>{product.category}</td>
                                    <td>₹{product.price}</td>
                                    <td className="admin-sale-price">₹{product.salePrice}</td>
                                    <td>{product.stock}</td>

                                    <td>
                                        <span className={`admin-stock-badge ${product.stock < 20 ? 'low' : 'available'}`}>
                                            {product.stock < 20 ? 'Low Stock' : 'In Stock'}
                                        </span>
                                    </td>

                                    <td>
                                        <div className="admin-product-actions">
                                            <button
                                                className="admin-product-edit"
                                                onClick={() => handleEdit(product)}
                                                title="Edit product"
                                            >
                                                <FaEdit />
                                            </button>

                                            <button
                                                className="admin-product-delete"
                                                onClick={() => handleDelete(product.id)}
                                                title="Delete product"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {filteredProducts.length === 0 && (
                        <div className="admin-products-empty">
                            <FaBox />
                            <p>No products found.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Product Form Modal */}
            {showForm && (
                <div className="admin-product-modal-overlay">
                    <div className="admin-product-modal">

                        <div className="admin-product-modal-header">
                            <div>
                                <h2>{editingId ? 'Edit Product' : 'Add New Product'}</h2>
                                <p>Enter the product details below.</p>
                            </div>

                            <button
                                className="admin-product-modal-close"
                                onClick={closeForm}
                            >
                                <FaTimes />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit}>

                            {/* Image Upload */}
                            <div className="admin-product-upload-section">
                                <label>Product Image</label>

                                <label className="admin-product-upload-box">
                                    {formData.image ? (
                                        <img
                                            src={formData.image}
                                            alt="Product preview"
                                            className="admin-product-preview"
                                        />
                                    ) : (
                                        <div className="admin-product-upload-placeholder">
                                            <FaCloudUploadAlt />
                                            <strong>Upload product image</strong>
                                            <span>Click to browse image files</span>
                                        </div>
                                    )}

                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                    />
                                </label>
                            </div>

                            {/* Basic Details */}
                            <div className="admin-product-form-grid">

                                <div className="admin-product-form-field full">
                                    <label>Product Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter product name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="admin-product-form-field">
                                    <label>Category *</label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Select Category</option>
                                        <option value="Snacks">Snacks</option>
                                        <option value="Namkeen">Namkeen</option>
                                        <option value="Sweets">Sweets</option>
                                        <option value="Pickles">Pickles</option>
                                        <option value="Traditional Food">Traditional Food</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="admin-product-form-field">
                                    <label>Weight / Quantity *</label>
                                    <input
                                        type="text"
                                        name="weight"
                                        placeholder="e.g. 250g, 1kg"
                                        value={formData.weight}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="admin-product-form-field">
                                    <label>Regular Price (₹) *</label>
                                    <input
                                        type="number"
                                        name="price"
                                        placeholder="Enter price"
                                        min="0"
                                        value={formData.price}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="admin-product-form-field">
                                    <label>Sale Price (₹) *</label>
                                    <input
                                        type="number"
                                        name="salePrice"
                                        placeholder="Enter sale price"
                                        min="0"
                                        value={formData.salePrice}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="admin-product-form-field">
                                    <label>Available Stock *</label>
                                    <input
                                        type="number"
                                        name="stock"
                                        placeholder="Enter stock quantity"
                                        min="0"
                                        value={formData.stock}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="admin-product-form-field full">
                                    <label>Product Description *</label>
                                    <textarea
                                        name="description"
                                        rows="4"
                                        placeholder="Describe your product..."
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="admin-product-form-field full">
                                    <label>Ingredients</label>
                                    <textarea
                                        name="ingredients"
                                        rows="3"
                                        placeholder="Enter ingredients..."
                                        value={formData.ingredients}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="admin-product-form-footer">
                                <button
                                    type="button"
                                    className="admin-product-cancel-btn"
                                    onClick={closeForm}
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="admin-product-save-btn"
                                >
                                    {editingId ? 'Update Product' : 'Save Product'}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default AdminProducts;
