import React from 'react';
import { Lock, Unlock, Users, Coins, User, Briefcase, Home } from 'lucide-react';

const LendingTypeCategory = ({ title, icon, types }) => (
  <div className="bg-white rounded-lg shadow-lg mb-6 p-4">
    <div className="flex items-center mb-4">
      <div className="bg-blue-200 p-2 rounded-full mr-3">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {types.map((type, index) => (
        <div key={index} className="bg-blue-50 p-3 rounded-lg transition-all duration-300 hover:shadow-md">
          <div className="flex items-center mb-2">
            <div className="bg-blue-100 p-2 rounded-full mr-2">
              {type.icon}
            </div>
            <h4 className="font-semibold text-blue-600">{type.title}</h4>
          </div>
          <p className="text-sm text-gray-600 mb-2">{type.description}</p>
          <p className="text-sm text-blue-700">{type.rationale}</p>
        </div>
      ))}
    </div>
  </div>
);

const TwelfthSlide = () => {
  const lendingCategories = [
    {
      title: "Based on Capital Security",
      icon: <Lock size={24} className="text-blue-500" />,
      types: [
        {
          icon: <Lock size={20} className="text-blue-500" />,
          title: "Secured Lending",
          description: "Loans backed by collateral, reducing risk for lenders.",
          rationale: "Lower interest rates, suitable for risk-averse lenders and asset-owning borrowers."
        },
        {
          icon: <Unlock size={20} className="text-blue-500" />,
          title: "Unsecured Lending",
          description: "Loans provided without collateral, based on creditworthiness.",
          rationale: "Higher flexibility for borrowers, potentially higher returns for lenders."
        }
      ]
    },
    {
      title: "Based on Investment Structure",
      icon: <Coins size={24} className="text-blue-500" />,
      types: [
        {
          icon: <Users size={20} className="text-blue-500" />,
          title: "Microfinance Peer Loans",
          description: "Small loans for individuals or businesses in underserved communities.",
          rationale: "Promotes financial inclusion and socially responsible investing."
        },
        {
          icon: <Coins size={20} className="text-blue-500" />,
          title: "Pooled P2P Lending",
          description: "Investments spread across multiple loans to reduce risk.",
          rationale: "Automatic diversification, ideal for a balanced approach."
        }
      ]
    },
    {
      title: "Based on Borrower Type",
      icon: <User size={24} className="text-blue-500" />,
      types: [
        {
          icon: <User size={20} className="text-blue-500" />,
          title: "Consumer Lending",
          description: "Loans for personal use, e.g., debt consolidation, home improvement.",
          rationale: "Lower rates for borrowers, portfolio diversification for lenders."
        },
        {
          icon: <Briefcase size={20} className="text-blue-500" />,
          title: "Business Lending",
          description: "Loans for businesses, often for growth or working capital needs.",
          rationale: "Faster capital access for businesses, higher potential returns for lenders."
        },
        {
          icon: <Home size={20} className="text-blue-500" />,
          title: "Real Estate Lending",
          description: "Loans for property purchases, development, or refinancing.",
          rationale: "Accessible real estate investment, faster funding for projects."
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-blue-100 to-indigo-100 p-6 overflow-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-800 animate-fade-in">
        Types of P2P Lending
      </h2>

      {lendingCategories.map((category, index) => (
        <LendingTypeCategory key={index} {...category} />
      ))}
    </div>
  );
};

export default TwelfthSlide;