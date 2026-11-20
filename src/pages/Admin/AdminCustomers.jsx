
import { useState } from 'react';
import {
    FaSearch,
    FaEye,
    FaTimes,
    FaUsers,
    FaUserCheck,
    FaUserTimes
} from 'react-icons/fa';

import './AdminCustomers.css';

function AdminCustomers() {

    const [customers, setCustomers] = useState([
        {
            id: 1,
            name: 'Rahul Das',
            email: 'rahul.das@gmail.com',
            phone: '9876543210',
            joined: '15 Nov 2026',
            orders: 5,
            spent: 2450,
            status: 'Active'
        },
        {
            id: 2,
            name: 'Priya Sharma',
            email: 'priya.sharma@gmail.com',
            phone: '9876543211',
            joined: '12 Nov 2026',
            orders: 3,
            spent: 1800,
            status: 'Active'
        },
        {
            id: 3,
            name: 'Amit Mohanty',
            email: 'amit.mohanty@gmail.com',
            phone: '9876543212',
            joined: '10 Nov 2026',
            orders: 8,
            spent: 5200,
            status: 'Active'
        },
        {
            id: 4,
            name: 'Sneha Patnaik',
            email: 'sneha.patnaik@gmail.com',
            phone: '9876543213',
            joined: '08 Nov 2026',
            orders: 2,
            spent: 950,
            status: 'Blocked'
        },
        {
            id: 5,
            name: 'Sanjay Behera',
            email: 'sanjay.behera@gmail.com',
            phone: '9876543214',
            joined: '05 Nov 2026',
            orders: 4,
            spent: 3100,
            status: 'Active'
        },
        {
            id: 6,
            name: 'Ananya Mishra',
            email: 'ananya.mishra@gmail.com',
            phone: '9876543215',
            joined: '02 Nov 2026',
            orders: 6,
            spent: 4200,
            status: 'Active'
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const filteredCustomers = customers.filter(customer => {

        const matchesSearch =
            customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            customer.phone.includes(searchTerm);

        const matchesStatus =
            statusFilter === 'All' || customer.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    const toggleCustomerStatus = (customerId) => {

        setCustomers(prevCustomers =>
            prevCustomers.map(customer =>
                customer.id === customerId
                    ? {
                        ...customer,
                        status: customer.status === 'Active'
                            ? 'Blocked'
                            : 'Active'
                    }
                    : customer
            )
        );

        if (selectedCustomer?.id === customerId) {
            setSelectedCustomer(prev => ({
                ...prev,
                status: prev.status === 'Active' ? 'Blocked' : 'Active'
            }));
        }
    };

    const formatAmount = amount =>
        `₹${amount.toLocaleString('en-IN')}`;

    const totalRevenue = customers.reduce(
        (total, customer) => total + customer.spent,
        0
    );

    return (
        <div className="admin-customers-page">

            {/* Header */}

            <div className="admin-customers-header">

                <div>
                    <h1>Customers Management</h1>
                    <p>Manage and monitor your registered customers.</p>
                </div>

                <div className="admin-customers-total">
                    <FaUsers />
                    <span>{customers.length} Customers</span>
                </div>

            </div>

            {/* Stats */}

            <div className="admin-customers-stats">

                <div className="admin-customer-stat">
                    <div className="admin-customer-stat-icon total">
                        <FaUsers />
                    </div>

                    <div>
                        <span>Total Customers</span>
                        <h3>{customers.length}</h3>
                    </div>
                </div>

                <div className="admin-customer-stat">
                    <div className="admin-customer-stat-icon active">
                        <FaUserCheck />
                    </div>

                    <div>
                        <span>Active Customers</span>
                        <h3>
                            {customers.filter(c => c.status === 'Active').length}
                        </h3>
                    </div>
                </div>

                <div className="admin-customer-stat">
                    <div className="admin-customer-stat-icon blocked">
                        <FaUserTimes />
                    </div>

                    <div>
                        <span>Blocked Customers</span>
                        <h3>
                            {customers.filter(c => c.status === 'Blocked').length}
                        </h3>
                    </div>
                </div>

                <div className="admin-customer-stat">
                    <div className="admin-customer-stat-icon revenue">
                        ₹
                    </div>

                    <div>
                        <span>Total Customer Spending</span>
                        <h3>{formatAmount(totalRevenue)}</h3>
                    </div>
                </div>

            </div>

            {/* Search and Filter */}

            <div className="admin-customers-toolbar">

                <div className="admin-customers-search">
                    <FaSearch />

                    <input
                        type="text"
                        placeholder="Search name, email or phone..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>

                <select
                    value={statusFilter}
                    onChange={e => setStatusFilter(e.target.value)}
                >
                    <option value="All">All Customers</option>
                    <option value="Active">Active</option>
                    <option value="Blocked">Blocked</option>
                </select>

            </div>

            {/* Customer Table */}

            <div className="admin-customers-table-wrapper">

                <table className="admin-customers-table">

                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Phone</th>
                            <th>Joined Date</th>
                            <th>Orders</th>
                            <th>Total Spent</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {filteredCustomers.map(customer => (
                            <tr key={customer.id}>

                                <td>
                                    <div className="admin-customer-info">
                                        <div className="admin-customer-avatar">
                                            {customer.name.charAt(0).toUpperCase()}
                                        </div>

                                        <div>
                                            <strong>{customer.name}</strong>
                                            <small>{customer.email}</small>
                                        </div>
                                    </div>
                                </td>

                                <td>{customer.phone}</td>

                                <td>{customer.joined}</td>

                                <td>
                                    <span className="admin-customer-orders-count">
                                        {customer.orders}
                                    </span>
                                </td>

                                <td className="admin-customer-spent">
                                    {formatAmount(customer.spent)}
                                </td>

                                <td>
                                    <span className={`admin-customer-status ${customer.status.toLowerCase()}`}>
                                        {customer.status}
                                    </span>
                                </td>

                                <td>
                                    <button
                                        className="admin-customer-view-btn"
                                        onClick={() => setSelectedCustomer(customer)}
                                        title="View Customer"
                                    >
                                        <FaEye />
                                    </button>
                                </td>

                            </tr>
                        ))}

                        {filteredCustomers.length === 0 && (
                            <tr>
                                <td colSpan="7" className="admin-customers-empty">
                                    No customers found.
                                </td>
                            </tr>
                        )}

                    </tbody>

                </table>

            </div>

            {/* Customer Details Modal */}

            {selectedCustomer && (

                <div className="admin-customer-modal-overlay">

                    <div className="admin-customer-modal">

                        <div className="admin-customer-modal-header">

                            <div>
                                <h2>Customer Details</h2>
                                <p>Customer profile information</p>
                            </div>

                            <button
                                className="admin-customer-modal-close"
                                onClick={() => setSelectedCustomer(null)}
                            >
                                <FaTimes />
                            </button>

                        </div>

                        <div className="admin-customer-profile">

                            <div className="admin-customer-profile-avatar">
                                {selectedCustomer.name.charAt(0).toUpperCase()}
                            </div>

                            <h3>{selectedCustomer.name}</h3>

                            <span className={`admin-customer-status ${selectedCustomer.status.toLowerCase()}`}>
                                {selectedCustomer.status}
                            </span>

                        </div>

                        <div className="admin-customer-modal-info">

                            <div>
                                <label>Email Address</label>
                                <p>{selectedCustomer.email}</p>
                            </div>

                            <div>
                                <label>Phone Number</label>
                                <p>{selectedCustomer.phone}</p>
                            </div>

                            <div>
                                <label>Registration Date</label>
                                <p>{selectedCustomer.joined}</p>
                            </div>

                            <div>
                                <label>Total Orders</label>
                                <p>{selectedCustomer.orders}</p>
                            </div>

                            <div>
                                <label>Total Spending</label>
                                <p>{formatAmount(selectedCustomer.spent)}</p>
                            </div>

                        </div>

                        <button
                            className={`admin-customer-block-btn ${selectedCustomer.status.toLowerCase()}`}
                            onClick={() => toggleCustomerStatus(selectedCustomer.id)}
                        >
                            {selectedCustomer.status === 'Active'
                                ? 'Block Customer'
                                : 'Unblock Customer'}
                        </button>

                        <button
                            className="admin-customer-modal-done"
                            onClick={() => setSelectedCustomer(null)}
                        >
                            Close
                        </button>

                    </div>

                </div>

            )}

        </div>
    );
}

export default AdminCustomers;
