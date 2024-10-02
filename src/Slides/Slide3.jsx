import React, { useState, useEffect } from 'react';
import { Coffee, X, DollarSign, ClipboardList, Clock, HelpCircle } from 'lucide-react';

const ThirdSlide = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);

  const problems = [
    { icon: <X className="text-red-500" size={24} />, text: "Lower chances of loan approval due to small business size" },
    { icon: <DollarSign className="text-yellow-500" size={24} />, text: "High interest rates for small business loans" },
    { icon: <ClipboardList className="text-blue-500" size={24} />, text: "Extensive paperwork and complex application process" },
    { icon: <Clock className="text-green-500" size={24} />, text: "Long waiting periods for loan decisions" },
    { icon: <HelpCircle className="text-purple-500" size={24} />, text: "Lack of personalized support for small business owners" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => {
        if (prev < problems.length - 1) {
          return prev + 1;
        } else if (prev === problems.length - 1) {
          setShowAll(true);
          return prev;
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (showAll) {
      const timer = setTimeout(() => {
        setShowQuestion(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showAll]);

  const getPosition = (index, total) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    const radius = 230; // Increased radius to spread out the cards
    return {
      left: `calc(50% + ${Math.cos(angle) * radius}px)`,
      top: `calc(50% + ${Math.sin(angle) * radius}px)`,
    };
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-pink-100 to-blue-100 p-8">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Sarah's Struggle with Traditional Lending</h2><br></br>
      
      <div className="relative w-full h-[500px]"> {/* Increased height */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Coffee size={64} className="text-brown-600 animate-pulse" />
        </div>
        {problems.map((problem, index) => {
          const { left, top } = getPosition(index, problems.length);
          return (
            <div
              key={index}
              className={`absolute transition-all duration-500 ${
                showAll || index <= activeStep ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{
                left,
                top,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className="bg-white p-4 rounded-lg shadow-md flex items-start space-x-2 w-64">
                {problem.icon}
                <p className="text-sm">{problem.text}</p>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className={`mt-8 text-center transition-opacity duration-500 ${
        showQuestion ? 'opacity-100' : 'opacity-0'
      }`}>
        <p className="text-xl font-semibold text-red-600">Will Sarah's cafe dream die?</p>
      </div>
    </div>
  );
};

export default ThirdSlide;