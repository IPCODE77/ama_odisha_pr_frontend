
import { useState } from 'react';
import {
    FaSearch,
    FaEye,
    FaTimes,
    FaShoppingBag
} from 'react-icons/fa';

import './AdminOrders.css';

function AdminOrders() {
    const [orders, setOrders] = useState([
        {
            id: 'AMA1001',
            customer: 'Rahul Das',
            phone: '9876543210',
            date: '20 Nov 2026',
            amount: 850,
            payment: 'Paid',
            status: 'Processing',
            items: [
                { name: 'Traditional Odisha Mudhi', quantity: 2, price: 200 },
                { name: 'Special Odisha Mixture', quantity: 1, price: 450 }
            ]
        },
        {
            id: 'AMA1002',
            customer: 'Priya Sharma',
            phone: '9876543211',
            date: '19 Nov 2026',
            amount: 550,
            payment: 'Paid',
            status: 'Pending',
            items: [
                { name: 'Authentic Odisha Khaja', quantity: 2, price: 275 }
            ]
        },
        {
            id: 'AMA1003',
            customer: 'Amit Mohanty',
            phone: '9876543212',
            date: '19 Nov 2026',
            amount: 1200,
            payment: 'Paid',
            status: 'Shipped',
            items: [
                { name: 'Homemade Badi', quantity: 2, price: 300 },
                { name: 'Special Odisha Mixture', quantity: 2, price: 300 }
            ]
        },
        {
            id: 'AMA1004',
            customer: 'Sneha Patnaik',
            phone: '9876543213',
            date: '18 Nov 2026',
            amount: 450,
            payment: 'Pending',
            status: 'Cancelled',
            items: [
                { name: 'Traditional Odisha Mudhi', quantity: 1, price: 450 }
            ]
        },
        {
            id: 'AMA1005',
            customer: 'Sanjay Behera',
            phone: '9876543214',
            date: '18 Nov 2026',
            amount: 750,
            payment: 'Paid',
            status: 'Delivered',
            items: [
                { name: 'Authentic Odisha Khaja', quantity: 2, price: 375 }
            ]
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [selectedOrder, setSelectedOrder] = useState(null);

    const filteredOrders = orders.filter(order => {
        const matchesSearch =
            order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.customer.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus =
            statusFilter === 'All' || order.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    const updateOrderStatus = (orderId, newStatus) => {
        setOrders(prevOrders =>
            prevOrders.map(order =>
                order.id === orderId
                    ? { ...order, status: newStatus }
                    : order
            )
        );

        if (selectedOrder?.id === orderId) {
            setSelectedOrder(prev => ({
                ...prev,
                status: newStatus
            }));
        }
    };

    const formatAmount = amount =>
        `₹${amount.toLocaleString('en-IN')}`;

    return (
        <div className="admin-orders-page">

            <div className="admin-orders-header">
                <div>
                    <h1>Orders Management</h1>
                    <p>Manage and track your customer orders.</p>
                </div>

                <div className="admin-orders-total">
                    <FaShoppingBag />
                    <span>{orders.length} Total Orders</span>
                </div>
            </div>

            <div className="admin-orders-stats">

                <div className="admin-order-stat">
                    <span>Total Orders</span>
                    <h3>{orders.length}</h3>
                </div>

                <div className="admin-order-stat">
                    <span>Pending</span>
                    <h3>
                        {orders.filter(o => o.status === 'Pending').length}
                    </h3>
                </div>

                <div className="admin-order-stat">
                    <span>Processing</span>
                    <h3>
                        {orders.filter(o => o.status === 'Processing').length}
                    </h3>
                </div>

                <div className="admin-order-stat">
                    <span>Delivered</span>
                    <h3>
                        {orders.filter(o => o.status === 'Delivered').length}
                    </h3>
                </div>

            </div>

            <div className="admin-orders-toolbar">

                <div className="admin-orders-search">
                    <FaSearch />

                    <input
                        type="text"
                        placeholder="Search order ID or customer..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>

                <select
                    value={statusFilter}
                    onChange={e => setStatusFilter(e.target.value)}
                >
                    <option value="All">All Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                </select>

            </div>

            <div className="admin-orders-table-wrapper">

                <table className="admin-orders-table">

                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredOrders.map(order => (
                            <tr key={order.id}>

                                <td className="admin-order-id">
                                    {order.id}
                                </td>

                                <td>
                                    <div className="admin-order-customer">
                                        <strong>{order.customer}</strong>
                                        <small>{order.phone}</small>
                                    </div>
                                </td>

                                <td>{order.date}</td>

                                <td>{formatAmount(order.amount)}</td>

                                <td>
                                    <span className={`admin-payment-badge ${order.payment.toLowerCase()}`}>
                                        {order.payment}
                                    </span>
                                </td>

                                <td>
                                    <select
                                        className={`admin-order-status-select ${order.status.toLowerCase()}`}
                                        value={order.status}
                                        onChange={e =>
                                            updateOrderStatus(
                                                order.id,
                                                e.target.value
                                            )
                                        }
                                        disabled={order.status === 'Cancelled'}
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="Processing">Processing</option>
                                        <option value="Shipped">Shipped</option>
                                        <option value="Delivered">Delivered</option>
                                        <option value="Cancelled">Cancelled</option>
                                    </select>
                                </td>

                                <td>
                                    <button
                                        className="admin-order-view-btn"
                                        onClick={() => setSelectedOrder(order)}
                                        title="View Order"
                                    >
                                        <FaEye />
                                    </button>
                                </td>

                            </tr>
                        ))}

                        {filteredOrders.length === 0 && (
                            <tr>
                                <td colSpan="7" className="admin-orders-empty">
                                    No orders found.
                                </td>
                            </tr>
                        )}

                    </tbody>

                </table>

            </div>

            {/* Order Details Modal */}

            {selectedOrder && (
                <div className="admin-order-modal-overlay">

                    <div className="admin-order-modal">

                        <div className="admin-order-modal-header">
                            <div>
                                <h2>Order Details</h2>
                                <p>{selectedOrder.id}</p>
                            </div>

                            <button
                                onClick={() => setSelectedOrder(null)}
                                className="admin-order-modal-close"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        <div className="admin-order-modal-info">

                            <div>
                                <label>Customer Name</label>
                                <p>{selectedOrder.customer}</p>
                            </div>

                            <div>
                                <label>Phone Number</label>
                                <p>{selectedOrder.phone}</p>
                            </div>

                            <div>
                                <label>Order Date</label>
                                <p>{selectedOrder.date}</p>
                            </div>

                            <div>
                                <label>Payment Status</label>
                                <p>{selectedOrder.payment}</p>
                            </div>

                            <div>
                                <label>Order Status</label>
                                <p>{selectedOrder.status}</p>
                            </div>

                        </div>

                        <div className="admin-order-modal-products">

                            <h3>Ordered Products</h3>

                            {selectedOrder.items.map((item, index) => (
                                <div
                                    className="admin-order-product-item"
                                    key={index}
                                >
                                    <div>
                                        <strong>{item.name}</strong>
                                        <small>Qty: {item.quantity}</small>
                                    </div>

                                    <span>
                                        {formatAmount(item.price * item.quantity)}
                                    </span>
                                </div>
                            ))}

                        </div>

                        <div className="admin-order-modal-total">
                            <span>Total Amount</span>
                            <strong>{formatAmount(selectedOrder.amount)}</strong>
                        </div>

                        <button
                            className="admin-order-modal-done"
                            onClick={() => setSelectedOrder(null)}
                        >
                            Close Details
                        </button>

                    </div>

                </div>
            )}

        </div>
    );
}

export default AdminOrders;
