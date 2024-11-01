
import React from 'react';

export const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className = '' }) => {
  return (
    <h2 className={`text-xl font-semibold ${className}`}>
      {children}
    </h2>
  );
};