import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import CategoryNav from './components/CategoryNav';
import ArticleList from './components/ArticleList';
import Pagination from './components/Pagination';
import { fetchNews, validateApiKey } from './services/newsApi';
import { getDaysAgo, getTodayDate } from './utils/dateFormatter';
import './styles/App.css';
import './styles/responsive.css';

/**
 * Main App ComponenT
 */
function App() {
  // State management
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [activeCategory, setActiveCategory] = useState('');
  const [searchParams, setSearchParams] = useState({
    query: '',
    category: '',
    from: getDaysAgo(7),
    to: getTodayDate(),
    sortBy: 'publishedAt'
  });

  const PAGE_SIZE = 12;

  /**
   * Fetch news articles
   */
  const loadArticles = async (page = 1) => {
    if (!validateApiKey()) {
      setError('API Key not configured. Please add REACT_API_KEY to your .env file');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const params = {
        ...searchParams,
        page,
        pageSize: PAGE_SIZE
      };

      const result = await fetchNews(params);

      if (result.status === 'error') {
        throw new Error(result.error);
      }

      setArticles(result.articles);
      setTotalResults(result.totalResults);
      setCurrentPage(page);

    } catch (err) {
      console.error('Error loading articles:', err);
      setError(err.message || 'Failed to load articles. Please try again later.');
      setArticles([]);
      setTotalResults(0);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handle search form submission
   */
  const handleSearch = (params) => {
    setSearchParams(params);
    setActiveCategory(params.category);
    setCurrentPage(1);
  };

  /**
   * Handle category change
   */
  const handleCategoryChange = (categoryId) => {
    const newParams = {
      ...searchParams,
      category: categoryId,
      query: '' 
    };
    setSearchParams(newParams);
    setActiveCategory(categoryId);
    setCurrentPage(1);
  };

  /**
   * Handle page change
   */
  const handlePageChange = (page) => {
    loadArticles(page);
  };

  /**
   * Handle logo click - reset to home
   */
  const handleLogoClick = () => {
    const defaultParams = {
      query: '',
      category: '',
      from: getDaysAgo(7),
      to: getTodayDate(),
      sortBy: 'publishedAt'
    };
    setSearchParams(defaultParams);
    setActiveCategory('');
    setCurrentPage(1);
  };

  /**
   * Load articles when search params change
   */
  useEffect(() => {
    loadArticles(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  /**
   * Initial load on component mount
   */
  useEffect(() => {
    if (!process.env.REACT_API_KEY) {
      setError(
        'NewsAPI key is not configured. Please create a .env file in the root directory and add: REACT_API_KEY=your_api_key_here'
      );
    }
  }, []);

  return (
    <div className="app">
      {/* Header */}
      <Header onLogoClick={handleLogoClick} />

      {/* Category Navigation */}
      <CategoryNav
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        isLoading={loading}
      />

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* Search Form */}
          <SearchForm 
            onSearch={handleSearch} 
            isLoading={loading} 
          />

          {/* Results Info */}
          {!loading && !error && articles.length > 0 && (
            <div className="results-info">
              <h2 className="results-title">
                {searchParams.query
                  ? `Search results for "${searchParams.query}"`
                  : activeCategory
                  ? `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} News`
                  : 'Latest News'}
              </h2>
              <p className="results-count">
                Found <strong>{totalResults}</strong> articles
              </p>
            </div>
          )}

          {/* Article List */}
          <ArticleList
            articles={articles}
            isLoading={loading}
            error={error}
          />

          {/* Pagination */}
          {!loading && !error && articles.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalResults={totalResults}
              pageSize={PAGE_SIZE}
              onPageChange={handlePageChange}
              isLoading={loading}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;