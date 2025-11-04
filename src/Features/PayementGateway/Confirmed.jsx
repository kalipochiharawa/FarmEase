import React from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TransactionSuccess = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/"); // Redirects the user back to the homepage
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-200 via-green-400 to-green-600">
      <div className="bg-white rounded-lg shadow-xl p-8 text-center max-w-md">
        <CheckCircle className="w-28 h-28 text-green-600 mx-auto mb-4" />
        <h1 className="text-4xl font-extrabold mb-2 text-gray-800">
          Payment Successful!
        </h1>
        <p className="text-gray-700 mb-6 text-lg">
          Thank you for your purchase. Your transaction was completed
          successfully.
        </p>
        <button
          onClick={handleBackToHome}
          className="bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-green-800 transition"
        >
          Back to Home
        </button>
        <footer className="mt-6 text-gray-500 text-sm">
          Developed by{" "}
          <span className="font-bold text-green-700">QuantiqueSystems</span>.
        </footer>
      </div>
    </div>
  );
};

export default TransactionSuccess;
