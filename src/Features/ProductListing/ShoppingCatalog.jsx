import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Store } from "lucide-react";
import axios from "axios";
import Footer from "../LandingPage/Subcomponents/Footer";


const ProductListing = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    available: true,
    category: "",
    productType: "",
  });
  const [products, setProducts] = useState([]); // Store products fetched from the backend

  // Fetch products from the backend when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products"); // Replace with your backend endpoint
        setProducts(response.data); // Assuming the API returns an array of products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this runs once when the component mounts

  // Filter products based on search query and filters
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesAvailable = !filters.available || product.available;
      const matchesCategory =
        !filters.category || product.category === filters.category;
      const matchesType =
        !filters.productType || product.productType === filters.productType;

      return (
        matchesSearch && matchesAvailable && matchesCategory && matchesType
      );
    });
  }, [products, searchQuery, filters]);

  // Handle product purchase (existing functionality)
  const handleBuyNow = async (product) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/payments/initialize",
        {
          amount: product.price,
          currency: "MWK",
          productId: product.id,
          productName: product.name,
        }
      );

      // Extract the checkout URL from the response and redirect
      const checkoutUrl = response.data?.checkoutUrl;
      if (checkoutUrl) {
        window.location.href = checkoutUrl; // Redirect to the PayChangu checkout page
      } else {
        alert("Failed to initiate payment. Please try again.");
      }
    } catch (error) {
      console.error("Error initiating payment:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  // Refetch products after a product is added or when filters change (Optional)
  const fetchUpdatedProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <>
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header and Search */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4">Available in Stock</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-6">
            <h3 className="font-semibold mb-2">Filter</h3>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                checked={filters.available}
                onChange={() =>
                  setFilters((prev) => ({
                    ...prev,
                    available: true,
                  }))
                }
                className="form-radio"
              />
              <span>Available in Stock</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                checked={!filters.available}
                onChange={() =>
                  setFilters((prev) => ({
                    ...prev,
                    available: false,
                  }))
                }
                className="form-radio"
              />
              <span>Top category</span>
            </label>

            <h3 className="font-semibold mb-2">Categories</h3>
            {/* Categories map... */}
          </div>

          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Available Now
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    {product.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <Store className="w-4 h-4 mr-1" />
                    <span>{product.farmName}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{product.location}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">
                      Price: K{product.price} per Kg
                    </span>
                    <button
                      onClick={() => handleBuyNow(product)}
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ProductListing;
