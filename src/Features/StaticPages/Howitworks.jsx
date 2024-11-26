import React from 'react';
import { UserPlus, ShoppingCart, CreditCard, ShieldCheck } from 'lucide-react';
import {Link} from 'react-router-dom';

const WebsiteGuide = () => {
  const guideSteps = [
    {
      Icon: UserPlus,
      title: "Create Your Account",
      description: "Sign up easily with your email. Complete your profile and verify to start trading."
    },
    {
      Icon: ShoppingCart,
      title: "Explore Marketplace",
      description: "Browse products or list items. Upload images and write descriptions to attract buyers."
    },
    {
      Icon: CreditCard,
      title: "Secure Transactions",
      description: "Use our payment system. We offer multiple methods and transaction protection."
    },
    {
      Icon: ShieldCheck,
      title: "Account Security",
      description: "We prioritize your safety with advanced measures, including two-factor authentication."
    }
  ];

  return (
    <div className="container font-poppins  mx-auto px-4 py-8 bg-white">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-700">
        How Our Marketplace Works
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {guideSteps.map((step, index) => (
          <div 
            key={index} 
            className="bg-white border rounded-lg p-6 shadow-md hover:shadow-lg transition-colors"
          >
            <div className="flex justify-center mb-4">
              <step.Icon size={48} className="text-green-500" />
            </div>
            <h2 className="text-xl font-medium text-center mb-3 text-green-700">
              {step.title}
            </h2>
            <p className="text-center text-gray-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link to='/Register'>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
          Get Started
        </button>
        </Link>
      </div>
    </div>
  );
};

export default WebsiteGuide;