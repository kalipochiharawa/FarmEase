import React from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TransactionSuccess = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/"); // Redirecting the user back to the homepage
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
      <div className="text-center max-w-lg">
        <CheckCircle className="w-28 h-28 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-2 text-gray-800">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-6 text-base">
          Thank you for your purchase. Your transaction was completed
          successfully.
        </p>
        <button
          onClick={handleBackToHome}
          className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow hover:bg-green-700 transition"
        >
          Back to Home
        </button>
        <footer className="mt-6 text-sm text-gray-500">
          Developed by{" "}
          <span className="font-bold text-green-700">QuantiqueSystems</span>
        </footer>
      </div>
    </div>
  );
};

export default TransactionSuccess;
