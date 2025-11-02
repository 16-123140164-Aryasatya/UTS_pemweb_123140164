import React from 'react';

/**
 * LoadingSpinner Component - Reusable loading indicator
 * @param {Object} props 
 */
const LoadingSpinner = ({ message = 'Loading...', size = 'medium' }) => {
  return (
    <div className={`loading-spinner-container ${size}`}>
      <div className="spinner"></div>
      {message && <p className="loading-message">{message}</p>}
    </div>
  );
};

export default LoadingSpinner;