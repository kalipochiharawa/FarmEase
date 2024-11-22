import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Search, MapPin, Store, ChevronRight } from "lucide-react";

const ProductsStatic = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    available: true,
    category: "",
    productType: "",
  });
  const [products, setProducts] = useState([
    // Example static product data
    {
      id: 1,
      name: "Product 1",
      description: "This is a product description",
      price: 100,
      farmName: "Farm 1",
      location: "Location 1",
      imageUrl: "https://via.placeholder.com/150",
      available: true,
      category: "Category 1",
      productType: "Type 1",
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is another product description",
      price: 200,
      farmName: "Farm 2",
      location: "Location 2",
      imageUrl: "https://via.placeholder.com/150",
      available: true,
      category: "Category 2",
      productType: "Type 2",
    },
    {
      id: 3,
      name: "Product 2",
      description: "This is another product description",
      price: 200,
      farmName: "Farm 2",
      location: "Location 2",
      imageUrl: "https://via.placeholder.com/150",
      available: true,
      category: "Category 2",
      productType: "Type 2",
    },
    {
      id: 4,
      name: "Product 2",
      description: "This is another product description",
      price: 200,
      farmName: "Farm 2",
      location: "Location 2",
      imageUrl: "https://via.placeholder.com/150",
      available: true,
      category: "Category 2",
      productType: "Type 2",
    },
    {
      id: 5,
      name: "Product 2",
      description: "This is another product description",
      price: 200,
      farmName: "Farm 2",
      location: "Location 2",
      imageUrl: "https://via.placeholder.com/150",
      available: true,
      category: "Category 2",
      productType: "Type 2",
    },
    {
      id: 6,
      name: "Product 2",
      description: "This is another product description",
      price: 200,
      farmName: "Farm 2",
      location: "Location 2",
      imageUrl: "https://via.placeholder.com/150",
      available: true,
      category: "Category 2",
      productType: "Type 2",
    },
    {
      id: 7,
      name: "Product 2",
      description: "This is another product description",
      price: 200,
      farmName: "Farm 2",
      location: "Location 2",
      imageUrl: "https://via.placeholder.com/150",
      available: true,
      category: "Category 2",
      productType: "Type 2",
    },
    {
      id: 8,
      name: "Product 2",
      description: "This is another product description",
      price: 200,
      farmName: "Farm 2",
      location: "Location 2",
      imageUrl: "https://via.placeholder.com/150",
      available: true,
      category: "Category 2",
      productType: "Type 2",
    },
    // Add more static products here...
  ]);

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
      .slice(0, 8); // Limiting to the first 8 products for display
  }, [products, searchQuery, filters]);

  const handleViewAll = () => {
    navigate('/ShoppingCatalog');
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
                  {/* Removed the 'Buy Now' button related to payment */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsStatic;
