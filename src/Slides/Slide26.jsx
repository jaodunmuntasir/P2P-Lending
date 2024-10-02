import React, { useState, useEffect } from 'react';
import { Globe, Users, DollarSign, TrendingUp, MessageCircle } from 'lucide-react';

const FinalSlide = () => {
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowElements(true), 500);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-purple-600 to-indigo-800 p-6 overflow-hidden">
      <div className={`text-6xl font-bold text-white mb-8 transition-all duration-1000 ${showElements ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
        Thank You!
      </div>
      
      <div className="relative w-64 h-64 mb-8">
        <div className={`absolute inset-0 bg-white bg-opacity-20 rounded-full animate-ping ${showElements ? 'opacity-100' : 'opacity-0'}`}></div>
        <div className={`absolute inset-4 bg-white bg-opacity-20 rounded-full animate-ping animation-delay-300 ${showElements ? 'opacity-100' : 'opacity-0'}`}></div>
        <div className={`absolute inset-8 bg-white bg-opacity-20 rounded-full animate-ping animation-delay-600 ${showElements ? 'opacity-100' : 'opacity-0'}`}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Globe size={100} className={`text-white transition-all duration-1000 ${showElements ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { icon: <Users size={24} />, text: "Connecting People" },
          { icon: <DollarSign size={24} />, text: "Empowering Finance" },
          { icon: <TrendingUp size={24} />, text: "Driving Growth" },
          { icon: <Globe size={24} />, text: "Global Impact" }
        ].map((item, index) => (
          <div 
            key={index} 
            className={`flex flex-col items-center bg-white bg-opacity-10 rounded-lg p-4 transition-all duration-500 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {item.icon}
            <span className="text-white text-sm mt-2">{item.text}</span>
          </div>
        ))}
      </div>
      
      <div className={`flex items-center bg-white bg-opacity-10 rounded-full px-6 py-3 transition-all duration-1000 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <MessageCircle size={24} className="text-white mr-2" />
        <span className="text-white text-xl">Questions?</span>
      </div>
    </div>
  );
};

export default FinalSlide;