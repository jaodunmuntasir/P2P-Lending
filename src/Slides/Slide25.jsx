import React, { useState, useEffect } from 'react';
import { Globe, Key, Zap, Users, TrendingUp, Shield, GitBranch } from 'lucide-react';

const FuturePoint = ({ icon, title, description }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ImpactMetric = ({ value, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.replace(/[^0-9.-]+/g,""));
    const duration = 2000;
    
    if (start === end) return;

    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + value.replace(/[^a-zA-Z%]/g, ""));
      if (start === end) clearInterval(timer);
    }, duration / end);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-blue-600 mb-2">{count}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};

const TwentyFifthSlide = () => {
  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-blue-100 to-cyan-100 p-6 overflow-auto">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-800 animate-fade-in">
        Conclusion: The Future of Finance
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <FuturePoint 
          icon={<Globe size={24} className="text-blue-500" />}
          title="Reshaping the Financial Landscape"
          description="P2P lending is fundamentally changing how we think about borrowing and lending, creating a more decentralized financial ecosystem."
        />
        <FuturePoint 
          icon={<Key size={24} className="text-blue-500" />}
          title="Democratizing Access"
          description="By removing traditional barriers, P2P platforms are opening up new credit and investment opportunities to a wider range of participants."
        />
        <FuturePoint 
          icon={<Zap size={24} className="text-blue-500" />}
          title="Increased Efficiency"
          description="Leveraging technology to streamline processes, P2P lending is making financial transactions faster, cheaper, and more transparent."
        />
        <FuturePoint 
          icon={<Users size={24} className="text-blue-500" />}
          title="Enhanced Financial Inclusion"
          description="P2P lending has the potential to bring financial services to underserved populations, contributing to greater economic equality."
        />
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h3 className="text-2xl font-semibold text-center text-blue-700 mb-6">The Road Ahead</h3>
        <div className="flex flex-wrap justify-around items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <TrendingUp size={24} className="text-green-500 mr-2" />
            <span className="text-gray-700">Continued Growth</span>
          </div>
          <div className="flex items-center mb-4 md:mb-0">
            <Shield size={24} className="text-yellow-500 mr-2" />
            <span className="text-gray-700">Regulatory Evolution</span>
          </div>
          <div className="flex items-center mb-4 md:mb-0">
            <GitBranch size={24} className="text-purple-500 mr-2" />
            <span className="text-gray-700">Technological Innovation</span>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-center text-blue-700 mb-6">Projected Impact by 2030</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ImpactMetric value="1T+" label="Global P2P Lending Market Size ($)" />
          <ImpactMetric value="500M+" label="Individuals Served" />
          <ImpactMetric value="50M+" label="SMEs Funded" />
          <ImpactMetric value="15%" label="Annual Growth Rate" />
        </div>
      </div>
    </div>
  );
};

export default TwentyFifthSlide;