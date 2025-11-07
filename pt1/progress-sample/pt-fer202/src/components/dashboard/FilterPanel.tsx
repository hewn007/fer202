import React from 'react';

const FilterPanel: React.FC = () => {
    return (
        <div className="filter-panel">
            <h2>Filter Payments</h2>
            <form>
                <div>
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" name="date" />
                </div>
                <div>
                    <label htmlFor="amount">Amount:</label>
                    <input type="number" id="amount" name="amount" />
                </div>
                <div>
                    <label htmlFor="status">Status:</label>
                    <select id="status" name="status">
                        <option value="">All</option>
                        <option value="paid">Paid</option>
                        <option value="pending">Pending</option>
                        <option value="failed">Failed</option>
                    </select>
                </div>
                <button type="submit">Apply Filters</button>
            </form>
        </div>
    );
};

export default FilterPanel;