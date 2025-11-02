import React from 'react';
import ArticleCard from './ArticleCard';

/**
 * ArticleList Component - Display grid of articles
 * @param {Object} props 
 */
const ArticleList = ({ articles, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="article-list-status">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text">Loading articles...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="article-list-status">
        <div className="error-container">
          <span className="error-icon">⚠️</span>
          <h3 className="error-title">Oops! Something went wrong</h3>
          <p className="error-message">{error}</p>
          <button 
            className="retry-btn"
            onClick={() => window.location.reload()}
          >
            🔄 Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!articles || articles.length === 0) {
    return (
      <div className="article-list-status">
        <div className="empty-container">
          <span className="empty-icon">📭</span>
          <h3 className="empty-title">No Articles Found</h3>
          <p className="empty-message">
            Try adjusting your search criteria or filters
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="article-list">
      <div className="article-grid">
        {articles.map((article, index) => (
          <ArticleCard 
            key={`${article.url}-${index}`} 
            article={article} 
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;