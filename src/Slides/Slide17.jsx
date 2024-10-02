import React, { useState } from 'react';
import { Globe, TrendingUp, AlertTriangle, Star, Sun, DollarSign, Users, Smartphone, Building } from 'lucide-react';

const MarketCard = ({ country, icon, description, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`bg-white rounded-lg shadow-lg p-4 cursor-pointer transition-all duration-300 transform ${isHovered ? 'scale-105' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-2">
        <div className={`p-2 rounded-full mr-2 ${color}`}>
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{country}</h3>
      </div>
      {isHovered && (
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      )}
    </div>
  );
};

const EmergingMarketCard = ({ region, countries, trends }) => (
  <div className="bg-white rounded-lg shadow-lg p-4">
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{region}</h3>
    <p className="text-sm text-gray-600 mb-2">Key Countries: {countries}</p>
    <ul className="text-sm text-gray-600">
      {trends.map((trend, index) => (
        <li key={index} className="flex items-start mb-1">
          <TrendingUp size={16} className="text-green-500 mr-1 flex-shrink-0 mt-1" />
          <span>{trend}</span>
        </li>
      ))}
    </ul>
  </div>
);

const SeventeenthSlide = () => {
  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-blue-100 to-green-100 p-6 overflow-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
        Geographic Distribution of P2P Lending
      </h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Largest Markets</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MarketCard 
            country="China" 
            icon={<AlertTriangle size={24} className="text-yellow-500" />}
            description="Largest P2P market globally, despite recent regulatory challenges. Shifting towards more regulated forms of online lending."
            color="bg-yellow-100"
          />
          <MarketCard 
            country="United States" 
            icon={<Star size={24} className="text-blue-500" />}
            description="Second-largest market with a mature regulatory environment. Focus on consumer and small business lending."
            color="bg-blue-100"
          />
          <MarketCard 
            country="United Kingdom" 
            icon={<Building size={24} className="text-red-500" />}
            description="Well-established market with strong regulatory framework. Known for business and property-backed P2P lending."
            color="bg-red-100"
          />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Emerging Markets</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <EmergingMarketCard 
            region="India"
            countries="Mumbai, Bangalore, Delhi"
            trends={[
              "Rapid growth in digital lending",
              "Government initiatives supporting fintech",
              "Focus on micro-lending and SME financing"
            ]}
          />
          <EmergingMarketCard 
            region="Southeast Asia"
            countries="Indonesia, Singapore, Vietnam"
            trends={[
              "High smartphone penetration driving adoption",
              "Regulatory sandboxes encouraging innovation",
              "Addressing underbanked populations"
            ]}
          />
          <EmergingMarketCard 
            region="Latin America"
            countries="Brazil, Mexico, Colombia"
            trends={[
              "Growing middle class seeking alternative financing",
              "Cross-border lending opportunities",
              "Increasing focus on financial inclusion"
            ]}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Global P2P Lending Trends</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <Globe className="text-blue-500 mr-2 flex-shrink-0 mt-1" size={20} />
            <p className="text-sm text-gray-600">Expansion of cross-border P2P lending, allowing lenders to invest in multiple countries</p>
          </div>
          <div className="flex items-start">
            <DollarSign className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
            <p className="text-sm text-gray-600">Increasing institutional investor participation, particularly in developed markets</p>
          </div>
          <div className="flex items-start">
            <Users className="text-purple-500 mr-2 flex-shrink-0 mt-1" size={20} />
            <p className="text-sm text-gray-600">Growing focus on financial inclusion, especially in emerging markets</p>
          </div>
          <div className="flex items-start">
            <Smartphone className="text-indigo-500 mr-2 flex-shrink-0 mt-1" size={20} />
            <p className="text-sm text-gray-600">Mobile-first approach in developing countries, leveraging high smartphone penetration</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeventeenthSlide;