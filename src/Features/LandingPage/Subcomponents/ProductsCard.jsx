import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Search, MapPin, Store, ChevronRight } from "lucide-react";
import axios from "axios";

const ProductListing = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    available: true,
    category: "",
    productType: "",
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        const sortedProducts = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setProducts(sortedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
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
      })
      .slice(0, 8);
  }, [products, searchQuery, filters]);

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

      const checkoutUrl = response.data?.checkoutUrl;
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      } else {
        alert("Failed to initiate payment. Please try again.");
      }
    } catch (error) {
      console.error("Error initiating payment:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  
  const handleViewAll = () => {
    navigate('/');  
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with View All button aligned to the right */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Recent Products</h1>
          <Link to="/ShoppingCatalog">
            <button 
              onClick={handleViewAll}
              className="flex items-center gap-1 text-green-600 hover:text-green-700 font-medium"
            >
              View All
              <ChevronRight className="w-5 h-5" />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
  );
};

export default ProductListing;