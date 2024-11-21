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

<<<<<<< HEAD
          <button 
            className={`w-full ${inStock ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-300 cursor-not-allowed'} text-white py-2.5 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2`}
            disabled={!inStock}
          >
            <Sprout className="w-4 h-4" />
            {inStock ? 'Buy Now' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </Link>
  );
};

const ProductGrid = () => {
  const navigate = useNavigate();  

  const products = [
    
    {
      productName: "Premium Red Tomatoes",
      description: "Fresh, organically grown tomatoes perfect for salads and cooking. Harvested at peak ripeness for maximum flavor and nutrition.",
      farmerName: "John Smith",
      location: "Blantyre, Namiyango",
      price: "K5000",
      minOrder: "10",
      maxOrder: "100",
      image: Img1,
      inStock: true
    },
    {
      productName: "Organic Potatoes",
      description: "Locally grown organic potatoes, perfect for roasting, mashing, or frying. Rich in nutrients and great taste.",
      farmerName: "Mary Johnson",
      location: "Lilongwe, Area 25",
      price: "K3500",
      minOrder: "20",
      maxOrder: "150",
      image: Img2,
      inStock: true
    },
    {
      productName: "Fresh Green Beans",
      description: "Crisp and tender green beans, hand-picked daily. Perfect for stir-fries and side dishes.",
      farmerName: "David Williams",
      location: "Zomba, Matawale",
      price: "K4200",
      minOrder: "5",
      maxOrder: "50",
      image: Img3,
      inStock: false
    },
    {
      productName: "Sweet Corn",
      description: "Golden sweet corn, naturally grown without pesticides. Perfect for grilling or boiling.",
      farmerName: "Sarah Brown",
      location: "Mzuzu, Luwinga",
      price: "K2800",
      minOrder: "15",
      maxOrder: "120",
      image: Img4,
      inStock: true
=======
      const checkoutUrl = response.data?.checkoutUrl;
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      } else {
        alert("Failed to initiate payment. Please try again.");
      }
    } catch (error) {
      console.error("Error initiating payment:", error);
      alert("An error occurred. Please try again later.");
>>>>>>> 9141bb97cd93895588d7dce73af75febc75361db
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