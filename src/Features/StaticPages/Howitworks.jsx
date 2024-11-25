import React from 'react';
import { UserPlus, ShoppingCart, CreditCard, ShieldCheck } from 'lucide-react';

const WebsiteGuide = () => {
  const guideSteps = [
    {
      Icon: UserPlus,
      title: "Create Your Account",
      description: "Sign up easily with your email. Complete your profile and verify your email address to start trading."
    },
    {
      Icon: ShoppingCart,
      title: "Explore Marketplace",
      description: "Browse products or list items for sale. Upload clear images and write detailed descriptions to attract buyers."
    },
    {
      Icon: CreditCard,
      title: "Secure Transactions",
      description: "Use our integrated payment system. We offer multiple payment methods and transaction protection for both buyers and sellers."
    },
    {
      Icon: ShieldCheck,
      title: "Account Security",
      description: "We prioritize your safety with advanced security measures, including two-factor authentication and fraud prevention."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        How Our Marketplace Works
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {guideSteps.map((step, index) => (
          <div 
            key={index} 
            className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-center mb-4">
              <step.Icon size={48} className="text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-center mb-3">
              {step.title}
            </h2>
            <p className="text-center text-gray-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsiteGuide;