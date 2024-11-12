import React from 'react';

function EmptyCard() {
  return (
    <div className="w-full max-w-lg p-4 bg-white shadow-sm rounded-md mb-6 border border-gray-300">
      {/* Placeholder for an empty card */}
      <div className="flex items-center justify-center h-24">
        <p className="text-gray-500">No Content Available</p>
      </div>
    </div>
  );
}

export default EmptyCard;