import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ChevronRight, Building2, MapPin } from "lucide-react";
import axios from "axios";

const ProductCard = ({ product }) => {
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

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <img 
        src={product.imageUrl} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
          <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
            Available Now
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>
        <div className="space-y-1 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Building2 className="w-4 h-4 mr-2 text-gray-400" />
            <span>{product.farmName}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-2 text-gray-400" />
            <span>{product.location}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-sm">
            Price: <span className="font-medium">K{product.price} </span>
          </div>
          <button 
            onClick={() => handleBuyNow(product)}
            className="bg-green-600 text-white px-4 py-2 text-sm rounded hover:bg-green-700 transition-colors"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductListing = () => {
  const navigate = useNavigate();
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

  const displayedProducts = useMemo(() => 
    products.slice(0, 4),
    [products]
  );

  return (
    <div className="max-w-[1440px] mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Recent Products</h2>
        <Link 
          to="/ShoppingCatalog" 
          className="flex items-center text-green-600 hover:text-green-700"
        >
          View All
          <ChevronRight className="w-5 h-5 ml-1" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;