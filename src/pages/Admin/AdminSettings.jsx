
import React, { useState } from 'react';
import './AdminSettings.css';

const AdminSettings = () => {

    const [settings, setSettings] = useState({
        storeName: 'AMA ODISHA',
        email: 'support@amaodisha.com',
        phone: '',
        address: 'Bhubaneswar, Odisha, India',
        currency: 'INR (₹)',
        timezone: 'Asia/Kolkata',
        standardDelivery: 50,
        expressDelivery: 100,
    });

    const [saved, setSaved] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setSettings((prev) => ({
            ...prev,
            [name]: value,
        }));

        setSaved(false);
    };

    const handleSave = (e) => {
        e.preventDefault();

        localStorage.setItem('amaAdminSettings', JSON.stringify(settings));
        setSaved(true);
    };

    return (
        <div className="admin-settings">

            <div className="settings-heading">
                <h2>Store Settings</h2>
                <p>Manage your store information and preferences.</p>
            </div>

            <form className="settings-form" onSubmit={handleSave}>

                {/* Store Information */}

                <div className="settings-section">

                    <div className="settings-section-heading">
                        <h3>Store Information</h3>
                        <p>Basic details about your store.</p>
                    </div>

                    <div className="settings-fields-grid">

                        <div className="settings-field">
                            <label>Store Name</label>
                            <input
                                type="text"
                                name="storeName"
                                value={settings.storeName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="settings-field">
                            <label>Support Email</label>
                            <input
                                type="email"
                                name="email"
                                value={settings.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="settings-field">
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={settings.phone}
                                onChange={handleChange}
                                placeholder="Enter store phone number"
                            />
                        </div>

                        <div className="settings-field">
                            <label>Store Address</label>
                            <input
                                type="text"
                                name="address"
                                value={settings.address}
                                onChange={handleChange}
                            />
                        </div>

                    </div>

                </div>

                {/* Store Preferences */}

                <div className="settings-section">

                    <div className="settings-section-heading">
                        <h3>Store Preferences</h3>
                        <p>Configure currency and timezone.</p>
                    </div>

                    <div className="settings-fields-grid">

                        <div className="settings-field">
                            <label>Currency</label>
                            <select
                                name="currency"
                                value={settings.currency}
                                onChange={handleChange}
                            >
                                <option value="INR (₹)">INR (₹)</option>
                                <option value="USD ($)">USD ($)</option>
                            </select>
                        </div>

                        <div className="settings-field">
                            <label>Timezone</label>
                            <select
                                name="timezone"
                                value={settings.timezone}
                                onChange={handleChange}
                            >
                                <option value="Asia/Kolkata">India (Asia/Kolkata)</option>
                                <option value="UTC">UTC</option>
                            </select>
                        </div>

                    </div>

                </div>

                {/* Delivery Settings */}

                <div className="settings-section">

                    <div className="settings-section-heading">
                        <h3>Delivery Settings</h3>
                        <p>Set your delivery charges.</p>
                    </div>

                    <div className="settings-fields-grid">

                        <div className="settings-field">
                            <label>Standard Delivery Charge (₹)</label>
                            <input
                                type="number"
                                min="0"
                                name="standardDelivery"
                                value={settings.standardDelivery}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="settings-field">
                            <label>Express Delivery Charge (₹)</label>
                            <input
                                type="number"
                                min="0"
                                name="expressDelivery"
                                value={settings.expressDelivery}
                                onChange={handleChange}
                            />
                        </div>

                    </div>

                </div>

                {/* Save */}

                <div className="settings-save-area">

                    {saved && (
                        <p className="settings-success">
                            Settings saved successfully!
                        </p>
                    )}

                    <button type="submit" className="settings-save-btn">
                        Save Changes
                    </button>

                </div>

            </form>

        </div>
    );
};

export default AdminSettings;
