import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Store } from "lucide-react";
import axios from "axios";

const ProductListing = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    available: true,
    category: "",
    productType: "",
  });

  const products = [
    {
      id: 1,
      name: "Tomatoes",
      description: "Fresh and free from any additives",
      price: 400,
      category: "Fruits",
      productType: "Farm plants",
      farmName: "Garden Farms",
      location: "Blantyre, Namiyango",
      imageUrl: require("../../Assets/Images/tomatoes.png"),
      available: true,
    },{
      id: 2,
      name: "apples",
      description: "fresh apples from the farm ",
      price: 6000,
      category: "Fruits",
      productType: "farm plants",
      farmName: "Khadidja famrs",
      location: "Bvumbwe, Thyolo",
      imageUrl: require("../../Assets/Images/Apples-industry-N.C._Homegrown-NC-State-Extension_web-16x9-1.jpg"),
      available: true,
    },
    {
      id: 3,
      name: "Maize",
      description: "Maize from our stores",
      price: 5000,
      category: "Grains",
      productType: "Processed products",
      farmName: "Khadidja Enteprise",
      location: "Bvumbwe, Thyolo",
      imageUrl: require("../../Assets/Images/maize (1).png"),
      available: true,
    },
    {
      id: 4,
      name: "Maize",
      description: "large tones of Maize from our stores",
      price: 5000,
      category: "Grains",
      productType: "Processed products",
      farmName: "Keesha agri-Enteprise",
      location: "Bvumbwe, Thyolo",
      imageUrl: require("../../Assets/Images/maize (2).png"),
      available: true,
    },
    {
      id: 5,
      name: "Fertlizer",
      description: "Urea fertlizer for plants",
      price: 100,
      category: "Fertlizers",
      productType: "Processed products",
      farmName: "Keesha agri-Enteprise",
      location: "Bangwe, Blantyre",
      imageUrl: require("../../Assets/Images/u3.jpg"),
      available: true,
    },
    {
      id: 6,
      name: "InsectCides",
      description: "Liquid insectcides chemicals tha eliminates pests and insects",
      price: 6000,
      category: "Chemicals",
      productType: "Processed products",
      farmName: "Keesha agri-Enteprise",
      location: "Bangwe, Blantyre",
      imageUrl: require("../../Assets/Images/insecticide1.jpg"),
      available: true,
    },
    // Additional products...
  ];

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

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8 font-poppins">
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
  );
};

export default ProductListing;
