import React, { useState, useEffect } from 'react';
import { TrendingUp, PieChart, Globe, BarChart2, DollarSign, Users, Building, Smartphone } from 'lucide-react';

const AnimatedNumber = ({ value, prefix = "", suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.replace(/[^0-9.-]+/g,""));
    const timer = setInterval(() => {
      start += end / 100;
      setCount(Math.floor(start));
      if (start >= end) clearInterval(timer);
    }, duration / 100);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
};

const GrowthCard = ({ title, value, icon }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-105">
    {icon}
    <h3 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">{title}</h3>
    <p className="text-3xl font-bold text-indigo-800">
      <AnimatedNumber value={value} prefix="$" suffix=" billion" />
    </p>
  </div>
);

const FactCard = ({ icon, content }) => (
  <div className="bg-indigo-50 rounded-lg p-4 flex items-start space-x-4">
    <div className="bg-indigo-100 p-2 rounded-full">
      {icon}
    </div>
    <p className="text-sm text-gray-700">{content}</p>
  </div>
);

const SixteenthSlide = () => {
  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-indigo-100 to-purple-100 p-6 overflow-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-800">
        P2P Lending Market Size and Growth
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <GrowthCard 
          title="Market Size in 2020" 
          value="67.93" 
          icon={<PieChart size={40} className="text-indigo-500" />} 
        />
        <GrowthCard 
          title="Projected Size by 2027" 
          value="558.91" 
          icon={<TrendingUp size={40} className="text-green-500" />} 
        />
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center">
          <BarChart2 size={40} className="text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">CAGR (2020-2027)</h3>
          <p className="text-3xl font-bold text-indigo-800">29.7%</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-indigo-700 mb-4">Key Growth Drivers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FactCard 
            icon={<Globe size={24} className="text-indigo-500" />}
            content="Increasing internet penetration and adoption of digital financial services globally"
          />
          <FactCard 
            icon={<Users size={24} className="text-indigo-500" />}
            content="Growing awareness and trust in alternative lending platforms among borrowers and lenders"
          />
          <FactCard 
            icon={<Building size={24} className="text-indigo-500" />}
            content="Favorable regulatory environments in many countries supporting fintech innovations"
          />
          <FactCard 
            icon={<Smartphone size={24} className="text-indigo-500" />}
            content="Technological advancements enabling more efficient and user-friendly P2P platforms"
          />
        </div>
      </div>

      <div className="bg-indigo-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-indigo-700 mb-4">Market Insights</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <DollarSign className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
            <span>The consumer lending segment is expected to maintain its dominance in the market share.</span>
          </li>
          <li className="flex items-start">
            <Globe className="text-blue-500 mr-2 flex-shrink-0 mt-1" size={20} />
            <span>Asia-Pacific region is projected to witness the highest growth rate, driven by large unbanked populations and increasing smartphone usage.</span>
          </li>
          <li className="flex items-start">
            <Building className="text-orange-500 mr-2 flex-shrink-0 mt-1" size={20} />
            <span>Business lending through P2P platforms is gaining traction, especially for small and medium-sized enterprises (SMEs).</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SixteenthSlide;