import React from 'react';

/**
 * Pagination Component - Navigate between pages
 * @param {Object} props 
 */
const Pagination = ({ 
  currentPage, 
  totalResults, 
  pageSize, 
  onPageChange, 
  isLoading 
}) => {
  const totalPages = Math.ceil(totalResults / pageSize);
  
  if (totalPages <= 1) {
    return null;
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePageClick = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);
      
      if (start > 2) pages.push('...');
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      if (end < totalPages - 1) pages.push('...');
      
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <div className="pagination">
      <div className="pagination-info">
        <p>
          Showing <strong>{(currentPage - 1) * pageSize + 1}</strong> to{' '}
          <strong>{Math.min(currentPage * pageSize, totalResults)}</strong> of{' '}
          <strong>{totalResults}</strong> results
        </p>
      </div>

      <div className="pagination-controls">
        <button
          className="pagination-btn"
          onClick={handlePrevious}
          disabled={currentPage === 1 || isLoading}
          aria-label="Previous page"
        >
          ← Previous
        </button>

        <div className="pagination-numbers">
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              className={`pagination-number ${page === currentPage ? 'active' : ''} ${page === '...' ? 'dots' : ''}`}
              onClick={() => typeof page === 'number' && handlePageClick(page)}
              disabled={page === '...' || page === currentPage || isLoading}
              aria-label={`Go to page ${page}`}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          className="pagination-btn"
          onClick={handleNext}
          disabled={currentPage === totalPages || isLoading}
          aria-label="Next page"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default Pagination;