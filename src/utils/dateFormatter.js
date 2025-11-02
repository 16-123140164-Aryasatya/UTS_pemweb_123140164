/**
 * Format date to readable string
 * @param {string} dateString 
 * @returns {string} 
 */
export const formatDate = (dateString) => {
  if (!dateString) return 'Unknown date';
  
  const date = new Date(dateString);
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  
  return date.toLocaleDateString('en-US', options);
};

/**
 * Get relative time string (e.g., "2 hours ago")
 * @param {string} dateString - 
 * @returns {string} 
 */
export const getRelativeTime = (dateString) => {
  if (!dateString) return '';
  
  const now = new Date();
  const date = new Date(dateString);
  const diffInSeconds = Math.floor((now - date) / 1000);
  
  if (diffInSeconds < 60) {
    return 'Just now';
  }
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} ${diffInMinutes === 1 ? 'minute' : 'minutes'} ago`;
  }
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} ${diffInHours === 1 ? 'hour' : 'hours'} ago`;
  }
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays} ${diffInDays === 1 ? 'day' : 'days'} ago`;
  }
  
  return formatDate(dateString);
};

/**
 * Format date for input[type="date"]
 * @param {Date} date 
 * @returns {string} 
 */
export const formatDateForInput = (date) => {
  if (!date) return '';
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 @returns {string}
 */
export const getTodayDate = () => {
  return formatDateForInput(new Date());
};

/**
 * Get date N days ago
 * @param {number} days 
 * @returns {string} 
 */
export const getDaysAgo = (days) => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return formatDateForInput(date);
};

export default {
  formatDate,
  getRelativeTime,
  formatDateForInput,
  getTodayDate,
  getDaysAgo
};