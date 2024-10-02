import React, { useState, useEffect } from "react";
import { Users, DollarSign, Globe, TrendingUp } from "lucide-react";

const TitleSlide = () => {
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowElements(true), 500);
  }, []);

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-blue-600 to-purple-700 p-6 overflow-hidden">
      <div className="flex-grow flex flex-col justify-center items-center text-white">
        <h1
          className={`text-5xl md:text-6xl font-bold mb-4 text-center transition-all duration-1000 ${showElements ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
        >
          P2P Lending
        </h1>
        <h2
          className={`text-3xl md:text-4xl font-semibold mb-8 text-center transition-all duration-1000 delay-300 ${showElements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Reshaping the Financial Landscape
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: <Users size={40} />, delay: 500 },
            { icon: <DollarSign size={40} />, delay: 700 },
            { icon: <Globe size={40} />, delay: 900 },
            { icon: <TrendingUp size={40} />, delay: 1100 },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-white bg-opacity-10 rounded-full p-4 transition-all duration-500`}
              style={{
                transitionDelay: `${item.delay}ms`,
                opacity: showElements ? 1 : 0,
                transform: showElements
                  ? "scale(1) rotate(0deg)"
                  : "scale(0.5) rotate(-45deg)",
              }}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>

      <div
        className={`bg-white bg-opacity-10 rounded-lg p-6 transition-all duration-1000 ${showElements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <p className="text-lg text-white opacity-80 text-center">
          Presented By:
        </p>
        <h3 className="text-4xl font-semibold text-white mb-2 text-center">
          Jaodun Muntasir
        </h3>
        <p className="text-lg text-white opacity-80 text-center">
          B.Sc. (Computer Science)
        </p>
        <p className="text-lg text-white opacity-80 text-center">
          Faculty of Informatics
        </p>
        <p className="text-lg text-white opacity-80 text-center">
          Eötvös Loránd University
        </p>
      </div>
    </div>
  );
};

export default TitleSlide;
