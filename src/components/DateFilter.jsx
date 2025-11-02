import React, { useState } from 'react';
import { getTodayDate, getDaysAgo } from '../utils/dateFormatter';

/**
 * DateFilter Component - Standalone date range filter
 * @param {Object} props 
 */
const DateFilter = ({ onFilterChange, isLoading }) => {
  const [dateRange, setDateRange] = useState({
    from: getDaysAgo(7),
    to: getTodayDate()
  });

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    const newRange = {
      ...dateRange,
      [name]: value
    };
    setDateRange(newRange);
    onFilterChange(newRange);
  };

  const handlePresetClick = (days) => {
    const newRange = {
      from: days === 'all' ? '' : getDaysAgo(days),
      to: getTodayDate()
    };
    setDateRange(newRange);
    onFilterChange(newRange);
  };

  return (
    <div className="date-filter">
      <h3 className="filter-title">Date Range</h3>
      
      <div className="preset-buttons">
        <button
          className="preset-btn"
          onClick={() => handlePresetClick(1)}
          disabled={isLoading}
        >
          Today
        </button>
        <button
          className="preset-btn"
          onClick={() => handlePresetClick(7)}
          disabled={isLoading}
        >
          Last 7 Days
        </button>
        <button
          className="preset-btn"
          onClick={() => handlePresetClick(30)}
          disabled={isLoading}
        >
          Last Month
        </button>
        <button
          className="preset-btn"
          onClick={() => handlePresetClick('all')}
          disabled={isLoading}
        >
          All Time
        </button>
      </div>

      <div className="date-inputs">
        <div className="date-input-group">
          <label htmlFor="dateFrom">From:</label>
          <input
            type="date"
            id="dateFrom"
            name="from"
            value={dateRange.from}
            onChange={handleDateChange}
            max={getTodayDate()}
            disabled={isLoading}
          />
        </div>

        <div className="date-input-group">
          <label htmlFor="dateTo">To:</label>
          <input
            type="date"
            id="dateTo"
            name="to"
            value={dateRange.to}
            onChange={handleDateChange}
            max={getTodayDate()}
            disabled={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default DateFilter;