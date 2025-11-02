import React from 'react';
import { getRelativeTime } from '../utils/dateFormatter';
import '../styles/ArticleCard.css';

/**
 * ArticleCard Component - Display single article card
 * @param {Object} props 
 */
const ArticleCard = ({ article }) => {
  const {
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    source,
    author
  } = article;

  const imageSrc = urlToImage || 'https://via.placeholder.com/400x250/1a73e8/ffffff?text=No+Image';
  
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/400x250/1a73e8/ffffff?text=Image+Not+Available';
  };

  const handleCardClick = () => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <article className="article-card" onClick={handleCardClick}>
      <div className="article-image-wrapper">
        <img
          src={imageSrc}
          alt={title}
          className="article-image"
          onError={handleImageError}
          loading="lazy"
        />
        <div className="article-badge">
          <span className="badge-icon">📰</span>
          {source?.name || 'Unknown Source'}
        </div>
      </div>

      <div className="article-content">
        <h3 className="article-title">{title || 'Untitled Article'}</h3>
        
        <p className="article-description">
          {description || 'No description available for this article.'}
        </p>

        <div className="article-meta">
          <div className="meta-item">
            <span className="meta-icon">👤</span>
            <span className="meta-text">
              {author || 'Unknown Author'}
            </span>
          </div>
          
          <div className="meta-item">
            <span className="meta-icon">🕐</span>
            <span className="meta-text">
              {getRelativeTime(publishedAt)}
            </span>
          </div>
        </div>

        <div className="article-footer">
          <button className="read-more-btn" aria-label="Read full article">
            Read More →
          </button>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;