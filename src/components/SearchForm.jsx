import React, { useState } from 'react';
import { getTodayDate, getDaysAgo } from '../utils/dateFormatter';
import '../styles/SearchForm.css';

/**
 * SearchForm Component - Advanced search with filters
 * @param {Object} props 
 */
const SearchForm = ({ onSearch, isLoading }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    keyword: '',
    category: '',
    dateFrom: getDaysAgo(7),
    dateTo: getTodayDate(),
    sortBy: 'publishedAt'
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (formData.keyword && formData.keyword.length < 2) {
      newErrors.keyword = 'Keyword must be at least 2 characters';
    }
    
    if (formData.dateFrom && formData.dateTo) {
      if (new Date(formData.dateFrom) > new Date(formData.dateTo)) {
        newErrors.dateFrom = 'Start date must be before end date';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const searchParams = {
        query: formData.keyword.trim(),
        category: formData.category,
        from: formData.dateFrom,
        to: formData.dateTo,
        sortBy: formData.sortBy
      };
      
      onSearch(searchParams);
      setIsExpanded(false); 
    }
  };

  const handleReset = () => {
    const resetData = {
      keyword: '',
      category: '',
      dateFrom: getDaysAgo(7),
      dateTo: getTodayDate(),
      sortBy: 'publishedAt'
    };
    setFormData(resetData);
    setErrors({});
    onSearch(resetData);
    setIsExpanded(false);
  };

  const handleSimpleSearch = (e) => {
    e.preventDefault();
    if (formData.keyword.trim()) {
      const searchParams = {
        query: formData.keyword.trim(),
        category: '',
        from: getDaysAgo(7),
        to: getTodayDate(),
        sortBy: 'publishedAt'
      };
      onSearch(searchParams);
    }
  };

  return (
    <div className="search-form-wrapper">
      {/* Collapsed State - Simple Search Bar */}
      {!isExpanded ? (
        <form className="search-form-simple" onSubmit={handleSimpleSearch}>
          <div className="simple-search-container">
            <input
              type="text"
              name="keyword"
              className="simple-search-input"
              placeholder=" Search news by keyword..."
              value={formData.keyword}
              onChange={handleChange}
              onFocus={() => setIsExpanded(true)}
              disabled={isLoading}
            />
            <button 
              type="button"
              className="advanced-search-btn"
              onClick={() => setIsExpanded(true)}
              disabled={isLoading}
            >
              Advanced Search
            </button>
          </div>
        </form>
      ) : (
        /* Expanded State */
        <form className="search-form search-form-expanded" onSubmit={handleSubmit} noValidate>
          <div className="form-header">
            <h2 className="form-title">Search News</h2>
            <p className="form-subtitle">Find articles by keyword, category, or date range</p>
            <button
              type="button"
              className="collapse-btn"
              onClick={() => setIsExpanded(false)}
              aria-label="Collapse search form"
            >
              ✕
            </button>
          </div>

          <div className="form-grid">
            {/* Keyword Input */}
            <div className="form-group">
              <label htmlFor="keyword" className="form-label">
                Keyword
              </label>
              <input
                type="text"
                id="keyword"
                name="keyword"
                className={`form-input ${errors.keyword ? 'error' : ''}`}
                placeholder="e.g., artificial intelligence, covid-19"
                value={formData.keyword}
                onChange={handleChange}
                minLength={2}
                maxLength={100}
                disabled={isLoading}
              />
              {errors.keyword && (
                <span className="error-message">{errors.keyword}</span>
              )}
            </div>

            {/* Category Select */}
            <div className="form-group">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <select
                id="category"
                name="category"
                className="form-select"
                value={formData.category}
                onChange={handleChange}
                disabled={isLoading}
              >
                <option value="">All Categories</option>
                <option value="technology"> Technology</option>
                <option value="business"> Business</option>
                <option value="sports"> Sports</option>
                <option value="health"> Health</option>
                <option value="science"> Science</option>
                <option value="entertainment"> Entertainment</option>
              </select>
            </div>

            {/* Date From */}
            <div className="form-group">
              <label htmlFor="dateFrom" className="form-label">
                From Date
              </label>
              <input
                type="date"
                id="dateFrom"
                name="dateFrom"
                className={`form-input ${errors.dateFrom ? 'error' : ''}`}
                value={formData.dateFrom}
                onChange={handleChange}
                max={getTodayDate()}
                disabled={isLoading}
              />
              {errors.dateFrom && (
                <span className="error-message">{errors.dateFrom}</span>
              )}
            </div>

            {/* Date To */}
            <div className="form-group">
              <label htmlFor="dateTo" className="form-label">
                To Date
              </label>
              <input
                type="date"
                id="dateTo"
                name="dateTo"
                className="form-input"
                value={formData.dateTo}
                onChange={handleChange}
                max={getTodayDate()}
                disabled={isLoading}
              />
            </div>

            {/* Sort By */}
            <div className="form-group">
              <label htmlFor="sortBy" className="form-label">
                Sort By
              </label>
              <select
                id="sortBy"
                name="sortBy"
                className="form-select"
                value={formData.sortBy}
                onChange={handleChange}
                disabled={isLoading}
              >
                <option value="publishedAt"> Latest First</option>
                <option value="relevancy"> Most Relevant</option>
                <option value="popularity"> Most Popular</option>
              </select>
            </div>
          </div>

          {/* Form Actions */}
          <div className="form-actions">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading ? '⏳ Searching...' : ' Search News'}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleReset}
              disabled={isLoading}
            >
              Reset Filters
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default SearchForm;