import React from 'react';
import Navbar from "./MainHead.jsx";
import CategorySlider from "./Subcomponents/CategoriesCards.jsx";
import LandingPage from "./Subcomponents/LandingPage.jsx";
import ProductGrid from "./Subcomponents/ProductsCard.jsx";
import RegisterSection from "./Subcomponents/RegisterAdd.jsx";
import ProductMarket from "./Subcomponents/Marketshow.jsx";
import TestimonialSlider from "./Subcomponents/Testimonial.jsx";
import MarketplaceSection from "./Subcomponents/MarketPlace.jsx";
import BenefitsProcess from "./Subcomponents/Benefits.jsx";
import Footer from "./Subcomponents/Footer.jsx";

function LandingPageLayout() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <CategorySlider />
      <ProductGrid />
      <RegisterSection />
      <ProductMarket />
      <MarketplaceSection />
      <TestimonialSlider />
      <BenefitsProcess />
      <Footer />
    </div>
  );
}

export default LandingPageLayout;
