// filepath: pt-fer202/src/pages/Dashboard.tsx

import React from 'react';
import Navbar from '../components/common/Navbar';
import FilterPanel from '../components/dashboard/FilterPanel';
import PaymentList from '../components/dashboard/PaymentList';

const Dashboard: React.FC = () => {
    return (
        <div>
            <Navbar />
            <h1>Dashboard</h1>
            <FilterPanel />
            <PaymentList />
        </div>
    );
};

export default Dashboard;