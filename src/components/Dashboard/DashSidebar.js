import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MdDynamicFeed, MdFeedback } from 'react-icons/md';
import { HiUsers, HiHome, HiUserCircle } from 'react-icons/hi2';
import { FiLogOut } from 'react-icons/fi';
import './DashSidebar.css'; 

const DashSidebar = () => {
    const location = useLocation();
    const [tab, setTab] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        if (tabFromUrl) {
            setTab(tabFromUrl);
        }
    }, [location.search]);

    const handleSignOut = async () => {
        // Add sign-out logic here
    };

    const navItems = [
        { to: 'dashboard', label: 'Dashboard', icon: HiHome },
        { to: 'profile', label: 'Profile', icon: HiUserCircle },
        { to: 'feedbacks', label: 'Feedbacks', icon: MdDynamicFeed },
        { to: 'problems', label: 'Problems', icon: MdFeedback },
        { to: 'users', label: 'Users', icon: HiUsers },
    ];

    return (
        <div className='sidebar'>
            {navItems.map((item, index) => (
                <NavLink
                    key={index}
                    to={`/dashadmin?tab=${item.to}`}
                    className={`nav-item ${tab === item.to ? 'active' : ''}`}
                >
                    <item.icon className='icon' size={20} style={{color: 'white'}}/>
                    <span className='label'>{item.label}</span>
                </NavLink>
            ))}
            <button
                onClick={handleSignOut}
                className='sign-out'
            >
                <FiLogOut className='icon' size={20} />
                <span className='label'>Sign Out</span>
            </button>
        </div>
    );
};

export default DashSidebar;