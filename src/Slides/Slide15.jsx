import React, { useState } from 'react';
import { Calendar, Bitcoin, DollarSign, Shield, Zap, Globe, Unlock, BarChart2, RefreshCw } from 'lucide-react';

const InfoCard = ({ icon, title, content }) => (
  <div className="bg-white rounded-lg shadow-lg p-4 flex items-start space-x-4 hover:shadow-xl transition-shadow duration-300">
    <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-blue-700 mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{content}</p>
    </div>
  </div>
);

const FifteenthSlide = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    { icon: <Bitcoin size={24} className="text-blue-500" />, title: "Crypto Collateral", description: "Use various cryptocurrencies as collateral for USD loans" },
    { icon: <Unlock size={24} className="text-blue-500" />, title: "No Credit Checks", description: "Loan approval based on collateral, not credit history" },
    { icon: <Globe size={24} className="text-blue-500" />, title: "Global Accessibility", description: "Available in numerous countries, expanding financial access" },
    { icon: <Zap size={24} className="text-blue-500" />, title: "Quick Approval", description: "Fast loan processing and approval times" }
  ];

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-blue-100 to-cyan-100 p-6 overflow-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
        Case Study: SALT Lending
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <InfoCard 
          icon={<Calendar className="text-blue-500" size={24} />}
          title="Founded"
          content="Established in 2016, SALT (Secured Automated Lending Technology) pioneered the concept of crypto-backed lending."
        />
        <InfoCard 
          icon={<Bitcoin className="text-blue-500" size={24} />}
          title="Focus"
          content="Specializes in providing USD loans collateralized by cryptocurrency assets, bridging traditional finance with the crypto world."
        />
        <InfoCard 
          icon={<DollarSign className="text-blue-500" size={24} />}
          title="Loan Details"
          content="Offers loans ranging from $5,000 to $25 million, with loan-to-value ratios typically between 30% to 70%."
        />
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Key Features</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer transition-all duration-300 transform hover:scale-105"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="mb-2">{feature.icon}</div>
              <h4 className="font-semibold text-blue-600">{feature.title}</h4>
              {hoveredFeature === index && (
                <p className="text-xs text-gray-600 mt-2">{feature.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <InfoCard 
          icon={<Shield className="text-blue-500" size={24} />}
          title="Security Measures"
          content="Implements multi-signature wallets, cold storage, and smart contracts to ensure the safety of collateralized crypto assets."
        />
        <InfoCard 
          icon={<BarChart2 className="text-blue-500" size={24} />}
          title="Market Impact"
          content="Helps stabilize the crypto market by providing liquidity without requiring users to sell their crypto assets."
        />
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-4 text-center">Impact on P2P Lending and Finance</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <RefreshCw className="text-blue-500 mr-2 flex-shrink-0 mt-1" size={20} />
            <span>Bridges the gap between traditional lending and cryptocurrency assets, opening new possibilities for P2P lending.</span>
          </li>
          <li className="flex items-start">
            <Globe className="text-blue-500 mr-2 flex-shrink-0 mt-1" size={20} />
            <span>Expands financial access globally, allowing crypto holders to obtain fiat loans without selling their assets.</span>
          </li>
          <li className="flex items-start">
            <Zap className="text-blue-500 mr-2 flex-shrink-0 mt-1" size={20} />
            <span>Demonstrates the potential for blockchain technology to create more efficient, secure, and accessible lending systems.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FifteenthSlide;