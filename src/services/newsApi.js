// NewsAPI Service - API Integration dengan Error Handling
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

/**
 * Fetch news articles with filters
 * @param {Object} params - Query parameters
 * @returns {Promise} - API response with articles
 */
export const fetchNews = async (params = {}) => {
  try {
    const {
      query = '',
      category = '',
      from = '',
      to = '',
      sortBy = 'publishedAt',
      page = 1,
      pageSize = 12
    } = params;

    let endpoint = `${BASE_URL}/top-headlines`;
    const queryParams = new URLSearchParams({
      apiKey: API_KEY,
      page: page.toString(),
      pageSize: pageSize.toString(),
      language: 'en'
    });

    // Jika ada query pencarian, gunakan endpoint everything
    if (query) {
      endpoint = `${BASE_URL}/everything`;
      queryParams.set('q', query);
      queryParams.set('sortBy', sortBy);
    } else if (category) {
      // Jika category, gunakan top-headlines dengan category
      queryParams.set('category', category);
      queryParams.set('country', 'us');
    } else {
      // Default: top-headlines US
      queryParams.set('country', 'us');
    }

    // Tambahkan date filter jika ada
    if (from) queryParams.set('from', from);
    if (to) queryParams.set('to', to);

    const url = `${endpoint}?${queryParams.toString()}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch news');
    }

    const data = await response.json();
    
    if (data.status !== 'ok') {
      throw new Error(data.message || 'API returned error status');
    }

    return {
      articles: data.articles || [],
      totalResults: data.totalResults || 0,
      status: 'success'
    };

  } catch (error) {
    console.error('NewsAPI Error:', error);
    return {
      articles: [],
      totalResults: 0,
      status: 'error',
      error: error.message
    };
  }
};

/**
 * Get available news categories
 * @returns {Array} - List of categories
 */
export const getCategories = () => {
  return [
    { id: '', label: 'All News', icon: '📰' },
    { id: 'technology', label: 'Technology', icon: '💻' },
    { id: 'business', label: 'Business', icon: '💼' },
    { id: 'sports', label: 'Sports', icon: '⚽' },
    { id: 'health', label: 'Health', icon: '🏥' },
    { id: 'science', label: 'Science', icon: '🔬' },
    { id: 'entertainment', label: 'Entertainment', icon: '🎬' }
  ];
};

/**
 * Validate API key exists
 * @returns {boolean}
 */
export const validateApiKey = () => {
  if (!API_KEY || API_KEY === 'undefined') {
    console.error('NewsAPI Key not found! Please add REACT_APP_NEWS_API_KEY to .env file');
    return false;
  }
  return true;
};

export default {
  fetchNews,
  getCategories,
  validateApiKey
};