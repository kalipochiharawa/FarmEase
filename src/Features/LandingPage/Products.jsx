import React, { useState, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Search, MapPin, Store, ChevronRight } from "lucide-react";
import chicken from './Subcomponents/chicken.jpg';
import cornImage from './Subcomponents/corn.jpg';
import goat from './Subcomponents/goat.jpg';
import beans from './Subcomponents/beans.jpg';
import tomato from './Subcomponents/tomato.jpg';
import Potato from './Subcomponents/Potato.jpg';
import silo from './Subcomponents/silos.jpg'
import groundnuts from './Subcomponents/groundnuts.jpg';

const ProductsStatic = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    available: true,
    category: "",
    productType: "",
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const products = [
    {
      id: 1,
      name: "Beans",
      description: "The green beans are a type of vegetable that are long, slender, and green in color.",
      price: 6000,
      farmName: "Thanthwe Farm",
      location: "Bvumbwe, Thyolo",
      image: beans,
      available: true,
      category: "Vegetable",
      productType: "Type",
    },
    {
      id: 2,
      name: "Maize",
      description: "Fresh, high-quality maize from Kayange Framstead.",
      price: 20000,
      farmName: "Kayange Framstead",
      location: "Mpemba, Blantyre",
      image: cornImage,
      available: true,
      category: "Category 2",
      productType: "Type 2",
    },
    {
      id: 3,
      name: "Local Chickens",
      description: "Healthy, free-range local chickens from Mbvunguti Poultry Farm, Chiradzulu Turn-off.",
      price: 7000,
      farmName: "Mbvunguti Poultry Farm",
      location: "chiradzulu Turn-off",
      imageUrl: chicken,
      available: true,
      category: "Category 2",
      productType: "Type 2",
    },

    {
      id: 3,
      name: "Goats",
      description: "This is another product description",
      price: 25000,
      farmName: "Mikolongwe Farm",
      location: "Masangano, Ntcheu",
      imageUrl: goat,
      available: true,
      category: "Category 2",
      productType: "Type 2",
    },

    {
      id: 1,
      name: "tomato",
      description: "Fresh, juicy tomatoes from Apasa Farms in Thabwa, Chikwawa",
      price: 10000,
      farmName: "Apasa Farms",
      location: "Thabwa, Chikwawa",
      image: tomato,
      available: true,
      category: "Category 1",
      productType: "Type 1",
    },
    {
      id: 2,
      name: "Farm silo",
      description: "This is another product description",
      price: 20000,
      farmName: "Farm Tech",
      location: "Area 45, Lilongwe",
      image: silo,
      available: true,
      category: "Category 2",
      productType: "Type 2",
    },
    {
      id: 3,
      name: "Groundnuts",
      description: "This is another product description",
      price: 7000,
      farmName: "Chombe",
      location: "Mzati, Mulanje",
      imageUrl: groundnuts,
      available: true,
      category: "Category 2",
      productType: "Type 2",
    },

    {
      id: 3,
      name: "Potatoes",
      description: "This is another product description",
      price: 25000,
      farmName: "Malabada Farms",
      location: "Chikanda, Zomba",
      imageUrl: Potato,
      available: true,
      category: "Category 2",
      productType: "Type 2",
    },
    // ... other product data
  ];

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

  const handleViewAll = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8 font-poppins">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Recent Products</h1>
          <Link to="/Register">
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
                src={product.imageUrl || product.image}
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
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Store className="w-4 h-4 mr-1" />
                  <span>{product.farmName}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{product.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Price: K{product.price} </span>
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