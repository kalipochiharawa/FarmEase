import React from 'react';

const Step = ({ number, title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
    <div className="flex items-center mb-4">
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-bold mr-3">
        {number}
      </span>
      <h2 className="text-xl font-semibold text-green-800">{title}</h2>
    </div>
    <div className="text-gray-600 ml-11">
      {children}
    </div>
  </div>
);

const ProductPostingGuide = () => {
  return (
    <div className="bg-white  font-poppins min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 pb-6 border-b border-green-200">
          <h1 className="text-4xl font-bold text-green-800 mb-3">
            How to Post Your Products
          </h1>
          <p className="text-lg text-green-700">
            Follow these simple steps to list your products on our platform
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          <Step number="1" title="Locate the Post Product Button">
            <p>
              Find the <span className="text-orange-500 font-semibold">orange "Post Product" button</span> in 
              the navigation menu. This button is your gateway to creating a new 
              product listing.
            </p>
          </Step>

          <Step number="2" title="Account Verification">
            <p className="mb-3">
              When you click the button, the system will check your login status:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>If you're already logged in, you'll proceed directly to the product form</li>
              <li>If you're not logged in, you'll be directed to the login page</li>
              <li>New users can create an account through the registration option</li>
            </ul>
          </Step>

          <Step number="3" title="Access the Product Form">
            <p>
              Once logged in, click the "Post Product" button again to access 
              the product submission form where you can enter all your product details.
            </p>
          </Step>

          {/* Pro Tip */}
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mt-8">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-3">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-orange-700">
                  <span className="font-bold">Pro Tip:</span> Make sure you have 
                  all your product information and images ready before starting 
                  the submission process to ensure a smooth experience.
                </p>
              </div>
            </div>
          </div>

          {/* Help Box */}
          <div className="bg-green-100 p-6 rounded-lg mt-8">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-green-800">
                  Need help? Our support team is available 24/7 to assist you with 
                  the product posting process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPostingGuide;