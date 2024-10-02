import React, { useState, useEffect } from 'react';
import { Users, Coffee, PiggyBank, ArrowRight } from 'lucide-react';

const FifthSlide = () => {
  const [showP2P, setShowP2P] = useState(false);
  const [showSarah, setShowSarah] = useState(false);
  const [showMichael, setShowMichael] = useState(false);
  const [showBenefits, setShowBenefits] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowP2P(true), 1000),
      setTimeout(() => setShowSarah(true), 2000),
      setTimeout(() => setShowMichael(true), 3000),
      setTimeout(() => setShowBenefits(true), 4000)
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-purple-100 to-blue-100 p-8">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">Enter P2P Lending: A Win-Win Solution</h2>
      
      <div className="relative w-full max-w-4xl h-[400px]">
        {showP2P && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-fade-in">
            <div className="bg-white p-6 rounded-full shadow-lg">
              <Users size={64} className="text-purple-600" />
            </div>
            <p className="text-center mt-2 font-semibold">P2P Lending</p>
          </div>
        )}
        
        {showSarah && (
          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-fade-in">
            <div className="bg-blue-100 p-4 rounded-lg shadow-md">
              <Coffee size={40} className="text-blue-600 mb-2" />
              <h3 className="font-semibold mb-1">Sarah (Borrower)</h3>
              <ul className="text-sm">
                <li>✅ Easier loan access</li>
                <li>✅ Competitive rates</li>
                <li>✅ Faster approval</li>
              </ul>
            </div>
          </div>
        )}
        
        {showMichael && (
          <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 animate-fade-in">
            <div className="bg-green-100 p-4 rounded-lg shadow-md">
              <PiggyBank size={40} className="text-green-600 mb-2" />
              <h3 className="font-semibold mb-1">Michael (Lender)</h3>
              <ul className="text-sm">
                <li>✅ Higher returns</li>
                <li>✅ Portfolio diversification</li>
                <li>✅ Direct investment control</li>
              </ul>
            </div>
          </div>
        )}
        
        {showBenefits && (
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-fade-in-up">
            <div className="bg-purple-100 p-4 rounded-lg shadow-md text-center">
              <h3 className="font-semibold mb-2">Mutual Benefits</h3>
              <p className="text-sm">
                P2P lending connects borrowers and lenders directly, <br />
                bypassing traditional financial intermediaries, <br />
                creating value for both parties.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FifthSlide;