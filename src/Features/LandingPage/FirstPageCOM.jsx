import React from 'react';
import { Search, User, MessageCircle, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

import MarketplaceSection from './Subcomponents/MarketPlace';
import CategorySlider from './Subcomponents/CategoriesCards';
import NavbarAndHead from './MainHead';
import LandingPage from './Subcomponents/LandingPage';
import ProductListing from './Subcomponents/ProductsCard';
import ProductsStatic from './Products';
import TestimonialSlider from './Subcomponents/Testimonial';
import RegisterSection from './Subcomponents/RegisterAdd';
import BenefitsProcess from './Subcomponents/Benefits';
import Footer from './Subcomponents/Footer';
import FirstPageNavBar from './MainHeadB';

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
    <FirstPageNavBar/>
      <LandingPage/>
      <CategorySlider/>
      <MarketplaceSection/>
      <ProductsStatic/>
      <RegisterSection/>
      <TestimonialSlider/>
      <BenefitsProcess/>
      <Footer/>
    </div>
  );
};

export default FirstPage;