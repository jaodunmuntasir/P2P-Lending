import React, { useState, useEffect } from 'react';
import { User, Users, ClipboardCheck, List, Banknote, RefreshCw, PercentSquare, Shield } from 'lucide-react';

const SeventhSlide = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { icon: <User size={24} />, text: "1. Borrower applies for a loan", actor: "Borrower" },
    { icon: <ClipboardCheck size={24} />, text: "2. P2P platform assesses credit risk", actor: "Platform" },
    { icon: <Shield size={24} />, text: "3. Collateral is verified (if applicable)", actor: "Platform" },
    { icon: <List size={24} />, text: "4. Loan is listed on the platform", actor: "Platform" },
    { icon: <Users size={24} />, text: "5. Lenders choose loans to invest in", actor: "Lenders" },
    { icon: <Banknote size={24} />, text: "6. Loan is funded and disbursed to borrower", actor: "Platform" },
    { icon: <RefreshCw size={24} />, text: "7. Borrower makes regular repayments", actor: "Borrower" },
    { icon: <PercentSquare size={24} />, text: "8. Lenders receive returns", actor: "Lenders" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-4 sm:p-8">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-gray-800">How Peer-to-Peer Lending Works</h2>
      
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-4">
        <p className="text-sm sm:text-base text-gray-700 mb-4">
          <strong>Why "Peer-to-Peer"?</strong> P2P lending directly connects individual borrowers with individual lenders, 
          bypassing traditional financial institutions. This "peer-to-peer" model allows for more flexible terms and potentially 
          better rates for both parties.
        </p>
        
        <div className="relative h-[400px] sm:h-[500px] overflow-hidden">
          {/* Borrower */}
          <div className="absolute top-10 left-0 z-20">
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs sm:text-sm font-bold">Borrower</span>
            </div>
          </div>
          
          {/* P2P Platform */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm sm:text-lg font-bold text-center">P2P Platform</span>
            </div>
          </div>
          
          {/* Lenders */}
          <div className="absolute bottom-0 right-0 z-20">
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs sm:text-sm font-bold">Lenders</span>
            </div>
          </div>
          
          {/* Steps */}
          {steps.map((step, index) => {
            const angle = (index / steps.length) * 2 * Math.PI;
            const radius = 170;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <div
                key={index}
                className={`absolute transition-all duration-500 ${
                  index === activeStep ? 'opacity-100 scale-110 z-30' : 'opacity-50 scale-100 z-0'
                }`}
                style={{
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className={`bg-white p-2 rounded-full shadow-md ${
                  step.actor === 'Borrower' ? 'border-green-500 border-2' :
                  step.actor === 'Lenders' ? 'border-yellow-500 border-2' :
                  'border-blue-500 border-2'
                }`}>
                  {step.icon}
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-32 text-center">
                  <span className="text-xxs sm:text-xs font-semibold">{step.text}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="w-full max-w-4xl text-sm sm:text-base text-gray-700">
        <p className="mb-2"><strong>Collateral in P2P Lending:</strong></p>
        <p>
          Collateral may or may not be required, depending on the platform and loan type. For secured loans, 
          the P2P platform verifies and values the collateral. This reduces risk for lenders and may result in 
          lower interest rates for borrowers. Unsecured loans are also common but may have higher interest rates.
        </p>
      </div>
    </div>
  );
};

export default SeventhSlide;