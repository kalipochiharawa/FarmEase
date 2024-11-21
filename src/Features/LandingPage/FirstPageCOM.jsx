import React from 'react';
import { Search, User, MessageCircle, Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import heroImage from 'E:/PROGRAMMING/GROUP-PROJECTS/Frontend/FarmEase/src/Features/LandingPage/Subcomponents/image01.jpg';
import MarketplaceSection from './Subcomponents/MarketPlace';
import CategorySlider from './Subcomponents/CategoriesCards';
import NavbarAndHead from './MainHead';
import LandingPage from './Subcomponents/LandingPage';
import ProductListing from './Subcomponents/ProductsCard';
import ProductsStatic from './Products';

const FirstPage = () => {
  const categories = [
    { name: "Livestock" },
    {  name: "Fruits" },
    {  name: "Machinery" },
    {  name: "Vegetables" },
    { name: "Grains" },
    { name: "Dairy" },
    { name: "Seeds" }
  ];

  const products = [
    {
      name: "Apples",
      price: "K1500 per Kg",
      location: "Misheck, zomba",
      status: "Available Now",
      description: "Best quality and fresh apples from our gardens"
    },
    {
      name: "Maize",
      price: "K50000 per Kg",
      location: "Misheck, zomba",
      status: "Available Now",
      description: "Find tons of maize, cheap and of high quality from our stores"
    }
  ];

  const handlePostProduct = () => {
    alert("Please login or register to post products");
  };

  return (
    <div className="min-h-screen bg-white">
      <NavbarAndHead/>
      <LandingPage/>
      <CategorySlider/>
      <MarketplaceSection/>


      {/* Recent Products */}
      <ProductsStatic/>
      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-2">Benefit from your agriculture</h3>
          <p className="text-center text-gray-600 mb-12">Join our platform and connect with farmers directly</p>
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="text-white" size={24} />
              </div>
              <h4 className="font-semibold mb-2">Register</h4>
              <p className="text-gray-600">Join Farmease community</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-white" size={24} />
              </div>
              <h4 className="font-semibold mb-2">Browse</h4>
              <p className="text-gray-600">Look for your favorite produce</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-white" size={24} />
              </div>
              <h4 className="font-semibold mb-2">Enquire</h4>
              <p className="text-gray-600">Connect with farmers, express interest</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-500 text-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="font-bold mb-4">Farmease.</h5>
              <p className="text-sm">Allowing farmers and buyers to get their needs at pocket-friendly fees.</p>
              <div className="flex space-x-4 mt-4">
                <Instagram size={20} />
                <Facebook size={20} />
                <Twitter size={20} />
                <Mail size={20} />
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-4">Explore</h5>
              <ul className="space-y-2 text-sm">
                <li>About Us</li>
                <li>How to post</li>
                <li>How it works</li>
                <li>Contact Us</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                <li>Home</li>
                <li>Categories</li>
                <li>Login</li>
                <li>Create Account</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Contact Info</h5>
              <ul className="space-y-2 text-sm">
                <li>Zomba, UNIMA - Malawi</li>
                <li>+265 (0) 990 155 300</li>
                <li>+265 (0) 888 777 332</li>
                <li>info@farmease.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-400 pt-6 text-center text-sm">
            © 2024 Farmease. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FirstPage;