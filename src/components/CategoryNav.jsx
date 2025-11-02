import React from 'react';
import { getCategories } from '../services/newsApi';

/**
 * CategoryNav Component - Category filter navigation
 * @param {Object} props 
 */
const CategoryNav = ({ activeCategory, onCategoryChange, isLoading }) => {
  const categories = getCategories();

  const handleClick = (categoryId) => {
    if (!isLoading) {
      onCategoryChange(categoryId);
    }
  };

  return (
    <nav className="category-nav" aria-label="Category filter">
      <div className="category-container">
        <h3 className="category-title">Categories</h3>
        <ul className="category-list">
          {categories.map(({ id, label }) => (
            <li key={id} className="category-item">
              <button
                className={`category-btn ${activeCategory === id ? 'active' : ''} ${isLoading ? 'disabled' : ''}`}
                onClick={() => handleClick(id)}
                disabled={isLoading}
                aria-pressed={activeCategory === id}
              >
                <span className="category-label">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default CategoryNav;