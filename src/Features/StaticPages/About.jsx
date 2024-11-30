import React from "react";
import { Wallet } from "lucide-react";
import mpambaLogo from "../../Assets/Images/TNM-Mpamba-Logo.png";
import airtelMoneyLogo from "../../Assets/Images/airtel-money.png";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-green-700 mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-600">
            Welcome to FarmEase – your trusted agriculture e-commerce platform.
          </p>
        </header>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Section - Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Empowering Farmers, Buyers, and Enterprises
            </h2>
            <p className="text-gray-600 mb-6">
              FarmEase connects farmers, buyers, and large agri-enterprises to create a reliable marketplace for agricultural produce. We aim to simplify transactions, foster trust, and drive economic growth through technology.
            </p>
            <p className="text-gray-600">
              Whether you're a farmer looking to sell fresh produce or a buyer sourcing bulk goods, FarmEase is here to make it seamless and efficient.
            </p>
          </div>

          {/* Right Section - Image */}
          <div>
            <img
              src="https://source.unsplash.com/800x600/?farm,market"
              alt="Agriculture Market"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Payment Options Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Payment Options
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {/* Payment Option: TNM Mpamba */}
            <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4">
              <img
                src={mpambaLogo}
                alt="TNM Mpamba"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800">TNM Mpamba</h3>
                <p className="text-gray-600">
                  Convenient and secure mobile payments using TNM Mpamba.
                </p>
              </div>
            </div>

            {/* Payment Option: Airtel Money */}
            <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4">
              <img
                src={airtelMoneyLogo}
                alt="Airtel Money"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800">Airtel Money</h3>
                <p className="text-gray-600">
                  Fast and easy payments with Airtel Money.
                </p>
              </div>
            </div>

            {/* Payment Option: Banks */}
            <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4">
              <Wallet className="text-blue-600 w-12 h-12" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">Bank Transfers</h3>
                <p className="text-gray-600">
                  Secure and straightforward transactions from your bank account.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Join FarmEase Today!
          </h3>
          <p className="text-gray-600 mb-6">
            Discover the future of agriculture commerce with FarmEase.
          </p>
          <Link to="/Register">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Get Started
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;