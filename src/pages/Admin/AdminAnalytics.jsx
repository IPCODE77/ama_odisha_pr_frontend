
import React from 'react';
import './AdminAnalytics.css';

const AdminAnalytics = () => {

    const monthlySales = [
        { month: 'Jan', sales: 40 },
        { month: 'Feb', sales: 65 },
        { month: 'Mar', sales: 45 },
        { month: 'Apr', sales: 80 },
        { month: 'May', sales: 55 },
        { month: 'Jun', sales: 95 },
        { month: 'Jul', sales: 70 },
        { month: 'Aug', sales: 85 },
        { month: 'Sep', sales: 60 },
        { month: 'Oct', sales: 100 },
        { month: 'Nov', sales: 75 },
        { month: 'Dec', sales: 90 },
    ];

    const topProducts = [
        { name: 'Odisha Mixture', sold: 145, revenue: 14500 },
        { name: 'Khaja', sold: 120, revenue: 12000 },
        { name: 'Badi', sold: 98, revenue: 9800 },
        { name: 'Mudhi', sold: 85, revenue: 8500 },
        { name: 'Pickle', sold: 70, revenue: 7000 },
    ];

    const orderStats = [
        { label: 'Delivered', count: 65, color: '#60875c' },
        { label: 'Processing', count: 20, color: '#d8a35d' },
        { label: 'Pending', count: 10, color: '#bc765b' },
        { label: 'Cancelled', count: 5, color: '#9b4d4d' },
    ];

    return (
        <div className="admin-analytics">

            <div className="analytics-heading">
                <h2>Analytics Overview</h2>
                <p>Track your store performance and sales.</p>
            </div>

            {/* Analytics Cards */}

            <div className="analytics-cards">

                <div className="analytics-card">
                    <span className="analytics-icon">₹</span>
                    <div>
                        <p>Total Revenue</p>
                        <h3>₹51,800</h3>
                        <span className="analytics-growth">+12.5% this month</span>
                    </div>
                </div>

                <div className="analytics-card">
                    <span className="analytics-icon">📦</span>
                    <div>
                        <p>Total Orders</p>
                        <h3>358</h3>
                        <span className="analytics-growth">+8.2% this month</span>
                    </div>
                </div>

                <div className="analytics-card">
                    <span className="analytics-icon">🛒</span>
                    <div>
                        <p>Average Order</p>
                        <h3>₹1,245</h3>
                        <span className="analytics-growth">+5.4% this month</span>
                    </div>
                </div>

                <div className="analytics-card">
                    <span className="analytics-icon">🍪</span>
                    <div>
                        <p>Products Sold</p>
                        <h3>1,284</h3>
                        <span className="analytics-growth">+18.6% this month</span>
                    </div>
                </div>

            </div>

            {/* Sales Chart */}

            <div className="analytics-chart-section">

                <div className="analytics-section-header">
                    <div>
                        <h3>Monthly Sales</h3>
                        <p>Sales performance throughout the year</p>
                    </div>
                    <span className="analytics-chart-label">2026</span>
                </div>

                <div className="sales-chart">

                    {monthlySales.map((item) => (
                        <div className="sales-chart-column" key={item.month}>

                            <div className="sales-bar-wrapper">
                                <div
                                    className="sales-bar"
                                    style={{ height: `${item.sales}%` }}
                                    title={`${item.month}: ${item.sales}%`}
                                ></div>
                            </div>

                            <span className="sales-month">
                                {item.month}
                            </span>

                        </div>
                    ))}

                </div>

            </div>

            {/* Bottom Sections */}

            <div className="analytics-bottom-grid">

                {/* Top Products */}

                <div className="analytics-panel">

                    <h3>Top Selling Products</h3>

                    <div className="top-products-list">

                        {topProducts.map((product, index) => (
                            <div className="top-product-row" key={product.name}>

                                <span className="top-product-rank">
                                    {index + 1}
                                </span>

                                <div className="top-product-info">
                                    <h4>{product.name}</h4>
                                    <p>{product.sold} units sold</p>
                                </div>

                                <span className="top-product-revenue">
                                    ₹{product.revenue.toLocaleString('en-IN')}
                                </span>

                            </div>
                        ))}

                    </div>

                </div>

                {/* Order Statistics */}

                <div className="analytics-panel">

                    <h3>Order Statistics</h3>

                    <div className="order-stats-list">

                        {orderStats.map((stat) => (
                            <div className="order-stat-item" key={stat.label}>

                                <div className="order-stat-header">
                                    <span>{stat.label}</span>
                                    <strong>{stat.count}%</strong>
                                </div>

                                <div className="order-stat-track">
                                    <div
                                        className="order-stat-fill"
                                        style={{
                                            width: `${stat.count}%`,
                                            backgroundColor: stat.color
                                        }}
                                    ></div>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </div>
    );
};

export default AdminAnalytics;
