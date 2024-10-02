import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';

const SecondSlide = () => {
  const [showSarah, setShowSarah] = useState(false);
  const [showMichael, setShowMichael] = useState(false);

  useEffect(() => {
    const sarahTimer = setTimeout(() => setShowSarah(true), 500);
    const michaelTimer = setTimeout(() => setShowMichael(true), 1500);
    return () => {
      clearTimeout(sarahTimer);
      clearTimeout(michaelTimer);
    };
  }, []);

  return (
    <div className="flex h-screen bg-gray-100 p-8">
      <div className="flex-1 flex flex-col items-center justify-center bg-blue-100 rounded-l-lg p-6 transition-all duration-500 ease-in-out transform hover:scale-105">
        {showSarah && (
          <>
            <User size={80} className="text-blue-600 mb-4 animate-bounce" />
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Sarah</h2>
            <p className="text-lg text-center text-blue-600">
              A small business owner struggling to get a loan from traditional banks
            </p>
          </>
        )}
      </div>
      <div className="flex-1 flex flex-col items-center justify-center bg-green-100 rounded-r-lg p-6 transition-all duration-500 ease-in-out transform hover:scale-105">
        {showMichael && (
          <>
            <User size={80} className="text-green-600 mb-4 animate-bounce" />
            <h2 className="text-3xl font-bold mb-4 text-green-800">Michael</h2>
            <p className="text-lg text-center text-green-600">
              An investor looking for better returns than traditional savings accounts
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SecondSlide;