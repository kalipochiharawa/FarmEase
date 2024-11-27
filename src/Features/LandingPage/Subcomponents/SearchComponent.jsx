import React, { useState, useCallback, useEffect } from 'react';
import { 
  ChevronDown, 
  Search, 
  MapPin, 
  ShoppingCart, 
  Loader2 
} from 'lucide-react';
import axios from 'axios';

// API Configuration
const API_CONFIG = {
  BASE_URL: 'https://mlimiaguleonline.onrender.com', 
  ENDPOINTS: {
    SEARCH_PRODUCTS: '/products/search',
    GET_CATEGORIES: '/categories',
    GET_LOCATIONS: '/locations'
  }
};

const SearchComponent = () => {
  // Category State
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Category');
  
  // Categories State
  const [categories, setCategories] = useState([
    "Fruits & Vegetables",
    "Legumes & Edible Seeds",
    "Grains",
    "Eggs & Milk",
    "Coffee & Tea",
    "Herbs & Spices",
    "Fibre"
  ]);

  // Search States
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch Categories from API
  const fetchCategories = useCallback(async () => {
    try {
      const response = await axios.get(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.GET_CATEGORIES}`);
      
      // Assuming the API returns an array of category names
      if (response.data && response.data.categories) {
        setCategories(response.data.categories);
      }
    } catch (err) {
      console.error('Failed to fetch categories', err);
      // Fallback to default categories if API call fails
    }
  }, []);

  // Fetch Locations for Autocomplete
  const fetchLocations = useCallback(async (searchQuery) => {
    try {
      const response = await axios.get(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.GET_LOCATIONS}`, {
        params: { query: searchQuery }
      });
      
      // Assuming the API returns an array of location suggestions
      return response.data.locations || [];
    } catch (err) {
      console.error('Failed to fetch locations', err);
      return [];
    }
  }, []);

  // Handle Category Selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCategoryOpen(false);
  };

  // Search Function
  const performSearch = useCallback(async () => {
    // Reset previous search state
    setIsLoading(true);
    setError(null);

    try {
      // Make API call to search products
      const response = await axios.get(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.SEARCH_PRODUCTS}`, {
        params: {
          query: searchTerm,
          category: selectedCategory !== 'Category' ? selectedCategory : undefined,
          location: location,
          // Add any additional parameters like pagination, sorting, etc.
          page: 1,
          limit: 10
        },
        headers: {
          // Add any required authentication headers
          // 'Authorization': `Bearer ${yourAuthToken}`
        }
      });

      // Assuming API returns search results in a specific format
      setSearchResults(response.data.results || response.data.products || []);
    } catch (err) {
      // More detailed error handling
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(err.response.data.message || 'Search failed');
      } else if (err.request) {
        // The request was made but no response was received
        setError('No response from server. Please check your connection.');
      } else {
        // Something happened in setting up the request that triggered an Error
        setError('Error in search request');
      }
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm, selectedCategory, location]);

  // Load categories on component mount
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  // Search Submission Handler
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    performSearch();
  };

  return (
    <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto font-medium shadow-sm">
      <form 
        onSubmit={handleSearchSubmit}
        className="bg-white shadow-xl rounded-2xl p-4 md:p-6 lg:p-8"
      >
        <div className="flex flex-col md:flex-row items-stretch space-y-4 md:space-y-0 md:space-x-4">
          {/* Category Dropdown */}
          <div className="flex-1 relative">
            <button
              type="button"
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
            >
              <div className="flex items-center">
                <ShoppingCart className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-700">{selectedCategory}</span>
              </div>
              <ChevronDown 
                className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                  categoryOpen ? 'rotate-180' : ''
                }`} 
              />
            </button>
            <div
              className={`
                absolute mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10
                transition-all duration-300 origin-top
                ${categoryOpen
                  ? 'opacity-100 scale-y-100 translate-y-0'
                  : 'opacity-0 scale-y-0 -translate-y-2 pointer-events-none'}
              `}
              style={{
                width: '300px',
                maxHeight: '400px',
                overflowY: 'auto',
                left: 0,
              }}
            >
              <div className="p-2">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="p-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200 rounded-lg"
                    onClick={() => handleCategorySelect(category)}
                  >
                    <span className="text-gray-700">{category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Search Input */}
          <div className="flex-[2]">
            <div className="flex items-center border border-gray-200 rounded-lg px-4 py-3 hover:border-gray-300 transition-colors">
              <Search className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search Product"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full focus:outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Location Search Input */}
          <div className="flex-1">
            <div className="flex items-center border border-gray-200 rounded-lg px-4 py-3 hover:border-gray-300 transition-colors">
              <MapPin className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="focus:outline-none text-gray-700 w-full"
              />
            </div>
          </div>

          {/* Search Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <Search className="w-5 h-5" />
                <span>Search</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Search Results */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4">
          {error}
        </div>
      )}

      {searchResults.length > 0 && (
        <div className="mt-4 space-y-2">
          {searchResults.map((result, index) => (
            <div 
              key={index} 
              className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold">{result.name}</h3>
                <p className="text-gray-500">{result.description}</p>
              </div>
              <span className="font-bold text-green-600">${result.price}</span>
            </div>
          ))}
        </div>
      )}

      {searchResults.length === 0 && !isLoading && searchTerm && (
        <div className="text-center text-gray-500 mt-4">
          No results found
        </div>
      )}
    </div>
  );
};

export default SearchComponent;