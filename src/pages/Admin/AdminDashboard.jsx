
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaHome,
    FaBox,
    FaShoppingBag,
    FaUsers,
    FaChartLine,
    FaCog,
    FaSignOutAlt,
    FaBars,
    FaBell,
    FaSearch,
    FaRupeeSign,
    FaArrowUp,
    FaArrowDown,
    FaEllipsisH
} from 'react-icons/fa';

import './AdminDashboard.css';
import AdminProducts from './AdminProducts';
import AdminOrders from './AdminOrders';
import AdminCustomers from './AdminCustomers';
import AdminAnalytics from './AdminAnalytics';
import AdminSettings from './AdminSettings';

const orders = [
    { id: '#AMA1024', customer: 'Rahul Das', date: '20 Nov 2026', amount: 850, status: 'Delivered' },
    { id: '#AMA1023', customer: 'Priya Sharma', date: '19 Nov 2026', amount: 1250, status: 'Processing' },
    { id: '#AMA1022', customer: 'Amit Patra', date: '19 Nov 2026', amount: 540, status: 'Pending' },
    { id: '#AMA1021', customer: 'Sneha Mohanty', date: '18 Nov 2026', amount: 2100, status: 'Delivered' },
    { id: '#AMA1020', customer: 'Rakesh Sahu', date: '18 Nov 2026', amount: 780, status: 'Cancelled' }
];

const salesData = [
    { day: 'Mon', value: 45 },
    { day: 'Tue', value: 70 },
    { day: 'Wed', value: 55 },
    { day: 'Thu', value: 90 },
    { day: 'Fri', value: 65 },
    { day: 'Sat', value: 100 },
    { day: 'Sun', value: 75 }
];

const AdminDashboard = () => {
    const [activeMenu, setActiveMenu] = useState('Dashboard');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const menuItems = [
        { name: 'Dashboard', icon: <FaHome /> },
        { name: 'Products', icon: <FaBox /> },
        { name: 'Orders', icon: <FaShoppingBag /> },
        { name: 'Customers', icon: <FaUsers /> },
        { name: 'Analytics', icon: <FaChartLine /> },
        { name: 'Settings', icon: <FaCog /> }
    ];

    const stats = [
        {
            title: 'Total Revenue',
            value: '₹1,84,250',
            change: '+12.8%',
            positive: true,
            icon: <FaRupeeSign />,
            color: 'revenue'
        },
        {
            title: 'Total Orders',
            value: '1,248',
            change: '+8.2%',
            positive: true,
            icon: <FaShoppingBag />,
            color: 'orders'
        },
        {
            title: 'Total Products',
            value: '156',
            change: '+4.5%',
            positive: true,
            icon: <FaBox />,
            color: 'products'
        },
        {
            title: 'Total Customers',
            value: '892',
            change: '-2.4%',
            positive: false,
            icon: <FaUsers />,
            color: 'customers'
        }
    ];

    return (
        <div className="admin-layout">

            {/* Sidebar */}
            <aside className={`admin-sidebar ${sidebarOpen ? 'admin-sidebar-open' : ''}`}>

                <div className="admin-logo">
                    <div className="admin-logo-mark">A</div>
                    <div>
                        <h2>AMA ODISHA</h2>
                        <span>ADMIN PANEL</span>
                    </div>
                </div>

                <div className="admin-menu-label">MENU</div>

                <nav className="admin-nav">
                    {menuItems.map((item) => (
                        <button
                            key={item.name}
                            className={`admin-nav-item ${activeMenu === item.name ? 'active' : ''}`}
                            onClick={() => {
                                setActiveMenu(item.name);
                                setSidebarOpen(false);
                            }}
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </button>
                    ))}
                </nav>



                <div className="admin-sidebar-bottom">
                    <button className="admin-nav-item">
                        <FaSignOutAlt />
                        <span>Logout</span>
                    </button>
                    <button
                        className="admin-store-btn"
                        onClick={() => navigate('/')}
                    >
                        <span>←</span> Go to Customer Site
                    </button>

                    <div className="admin-sidebar-profile">
                        <div className="admin-avatar">A</div>
                        <div>
                            <strong>Admin</strong>
                            <span>Store Manager</span>
                        </div>
                        <FaEllipsisH className="admin-profile-more" />
                    </div>
                </div>

            </aside>

            {/* Main Area */}
            <main className="admin-main">

                {/* Top Navbar */}
                <header className="admin-topbar">
                    <button
                        className="admin-menu-toggle"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <FaBars />
                    </button>

                    <div className="admin-search">
                        <FaSearch />
                        <input type="text" placeholder="Search anything..." />
                    </div>

                    <div className="admin-topbar-right">
                        <button className="admin-notification">
                            <FaBell />
                            <span></span>
                        </button>

                        <div className="admin-top-profile">
                            <div className="admin-avatar">A</div>
                            <div>
                                <strong>Administrator</strong>
                                <span>Admin</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                {activeMenu === 'Dashboard' ? (
                    <div className="admin-dashboard-content">

                        <div className="admin-welcome">
                            <div>
                                <span className="admin-overline">OVERVIEW</span>
                                <h1>Dashboard</h1>
                                <p>Welcome back! Here's what's happening with your store.</p>
                            </div>

                            <button className="admin-date-btn">
                                <span>November 2026</span>
                            </button>
                        </div>

                        {/* Stats Cards */}
                        <div className="admin-stats-grid">
                            {stats.map((stat) => (
                                <div className="admin-stat-card" key={stat.title}>
                                    <div className="admin-stat-top">
                                        <div className={`admin-stat-icon ${stat.color}`}>
                                            {stat.icon}
                                        </div>
                                        <button className="admin-stat-more">
                                            <FaEllipsisH />
                                        </button>
                                    </div>

                                    <span className="admin-stat-title">{stat.title}</span>
                                    <h2>{stat.value}</h2>

                                    <div className={`admin-stat-change ${stat.positive ? 'positive' : 'negative'}`}>
                                        {stat.positive ? <FaArrowUp /> : <FaArrowDown />}
                                        <span>{stat.change}</span>
                                        <span className="admin-stat-period">vs last month</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Sales + Side Panel */}
                        <div className="admin-middle-grid">

                            <div className="admin-panel admin-sales-panel">
                                <div className="admin-panel-header">
                                    <div>
                                        <h2>Sales Overview</h2>
                                        <p>Your weekly sales performance</p>
                                    </div>

                                    <select defaultValue="week">
                                        <option value="week">This Week</option>
                                        <option value="month">This Month</option>
                                        <option value="year">This Year</option>
                                    </select>
                                </div>

                                <div className="admin-chart">
                                    <div className="admin-chart-y">
                                        <span>₹10k</span>
                                        <span>₹7.5k</span>
                                        <span>₹5k</span>
                                        <span>₹2.5k</span>
                                        <span>₹0</span>
                                    </div>

                                    <div className="admin-chart-area">
                                        <div className="admin-chart-grid-lines">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>

                                        <div className="admin-bars">
                                            {salesData.map((item) => (
                                                <div className="admin-bar-column" key={item.day}>
                                                    <div
                                                        className="admin-bar"
                                                        style={{ height: `${item.value}%` }}
                                                        title={`${item.value}%`}
                                                    ></div>
                                                    <span>{item.day}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="admin-panel admin-performance-panel">
                                <div className="admin-panel-header">
                                    <div>
                                        <h2>Store Performance</h2>
                                        <p>This month's summary</p>
                                    </div>
                                </div>

                                <div className="admin-performance-item">
                                    <div className="admin-performance-icon">
                                        <FaShoppingBag />
                                    </div>
                                    <div>
                                        <span>Orders completed</span>
                                        <strong>94.2%</strong>
                                    </div>
                                </div>

                                <div className="admin-performance-item">
                                    <div className="admin-performance-icon">
                                        <FaUsers />
                                    </div>
                                    <div>
                                        <span>Returning customers</span>
                                        <strong>38.5%</strong>
                                    </div>
                                </div>

                                <div className="admin-performance-item">
                                    <div className="admin-performance-icon">
                                        <FaChartLine />
                                    </div>
                                    <div>
                                        <span>Conversion rate</span>
                                        <strong>4.8%</strong>
                                    </div>
                                </div>

                                <div className="admin-performance-note">
                                    <FaArrowUp />
                                    <span>Your store performance is improving this month.</span>
                                </div>
                            </div>
                        </div>

                        {/* Recent Orders */}
                        <div className="admin-panel admin-orders-panel">
                            <div className="admin-panel-header">
                                <div>
                                    <h2>Recent Orders</h2>
                                    <p>Latest customer orders from your store</p>
                                </div>

                                <button className="admin-view-all">
                                    View All Orders
                                </button>
                            </div>

                            <div className="admin-table-wrapper">
                                <table className="admin-orders-table">
                                    <thead>
                                        <tr>
                                            <th>Order ID</th>
                                            <th>Customer</th>
                                            <th>Date</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                            <th></th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {orders.map((order) => (
                                            <tr key={order.id}>
                                                <td className="admin-order-id">{order.id}</td>
                                                <td>{order.customer}</td>
                                                <td>{order.date}</td>
                                                <td className="admin-order-amount">₹{order.amount.toLocaleString('en-IN')}</td>
                                                <td>
                                                    <span className={`admin-order-status ${order.status.toLowerCase()}`}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td>
                                                    <button className="admin-row-more">
                                                        <FaEllipsisH />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                )
                    : activeMenu === 'Products' ? (
                        <AdminProducts />
                    )
                        : activeMenu === 'Orders' ? (
                            <AdminOrders />
                        )
                            : activeMenu === 'Customers' ? (
                                <AdminCustomers />
                            )
                                : activeMenu === 'Analytics' ? (
                                    <AdminAnalytics />
                                ) :
                                    activeMenu === 'Settings' ? (
                                        <AdminSettings />
                                    ) : (
                                        <div className="admin-placeholder">
                                            <div className="admin-placeholder-icon">
                                                {menuItems.find(item => item.name === activeMenu)?.icon}
                                            </div>
                                            <h2>{activeMenu}</h2>
                                            <p>This section will be built next.</p>
                                        </div>
                                    )}

            </main>
        </div>
    );
};

export default AdminDashboard;
