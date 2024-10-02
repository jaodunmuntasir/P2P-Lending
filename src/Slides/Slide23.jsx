import React, { useState } from 'react';
import { User, Users, Search, FileText, PiggyBank, AlertTriangle, PieChart, TrendingUp, Building, Shield } from 'lucide-react';

const TipCard = ({ icon, title, description, detailedTips }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 ${isExpanded ? 'row-span-2' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center mb-4">
        <div className="bg-teal-100 p-3 rounded-full mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-teal-700">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {isExpanded && (
        <ul className="space-y-2">
          {detailedTips.map((tip, index) => (
            <li key={index} className="flex items-start">
              <Shield className="text-teal-500 mr-2 flex-shrink-0 mt-1" size={16} />
              <span className="text-sm text-gray-700">{tip}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const QuickTipCard = ({ icon, text }) => (
  <div className="bg-teal-50 rounded-lg p-4 flex items-center space-x-4">
    <div className="bg-teal-100 p-2 rounded-full">
      {icon}
    </div>
    <p className="text-sm text-gray-700">{text}</p>
  </div>
);

const TwentyThirdSlide = () => {
  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-teal-100 to-cyan-100 p-6 overflow-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-teal-800">
        Tips for Potential Participants in P2P Lending
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-2xl font-semibold text-teal-700 mb-4 flex items-center">
            <User className="mr-2" size={24} /> For Borrowers
          </h3>
          <div className="space-y-4">
            <TipCard 
              icon={<Search size={24} className="text-teal-500" />}
              title="Compare Rates"
              description="Shop around and compare interest rates across multiple P2P platforms."
              detailedTips={[
                "Use comparison websites to get an overview of rates",
                "Consider the APR, not just the interest rate",
                "Check for any additional fees or charges",
                "Be aware that the lowest rate may not always be the best deal overall"
              ]}
            />
            <TipCard 
              icon={<FileText size={24} className="text-teal-500" />}
              title="Read Terms Carefully"
              description="Thoroughly review and understand all loan terms and conditions."
              detailedTips={[
                "Pay attention to repayment schedules and any penalties",
                "Understand the consequences of late or missed payments",
                "Check if there are any restrictions on early repayment",
                "Be clear on the loan's purpose and any usage limitations"
              ]}
            />
            <TipCard 
              icon={<PiggyBank size={24} className="text-teal-500" />}
              title="Solid Repayment Plan"
              description="Develop a realistic plan for repaying the loan on time."
              detailedTips={[
                "Create a budget that accounts for loan repayments",
                "Consider setting up automatic payments to avoid missing due dates",
                "Have a contingency plan for unexpected financial difficulties",
                "Regularly review and adjust your repayment strategy if needed"
              ]}
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold text-teal-700 mb-4 flex items-center">
            <Users className="mr-2" size={24} /> For Lenders
          </h3>
          <div className="space-y-4">
            <TipCard 
              icon={<AlertTriangle size={24} className="text-teal-500" />}
              title="Understand Risks"
              description="Be fully aware of the potential risks involved in P2P lending."
              detailedTips={[
                "Recognize that returns are not guaranteed",
                "Understand the risk of borrower defaults",
                "Be aware of platform risks and regulatory changes",
                "Consider the lack of government-backed deposit insurance"
              ]}
            />
            <TipCard 
              icon={<PieChart size={24} className="text-teal-500" />}
              title="Diversify Investments"
              description="Spread your investments across multiple loans to minimize risk."
              detailedTips={[
                "Invest in a mix of loan grades or risk levels",
                "Consider diversifying across different P2P platforms",
                "Spread investments across various loan purposes or industries",
                "Use auto-invest features for easier diversification"
              ]}
            />
            <TipCard 
              icon={<TrendingUp size={24} className="text-teal-500" />}
              title="Start Small, Scale Gradually"
              description="Begin with a small investment and increase gradually as you gain experience."
              detailedTips={[
                "Set an initial investment limit you're comfortable with",
                "Reinvest returns to grow your portfolio organically",
                "Increase investments as you become more familiar with the platform",
                "Regularly reassess your investment strategy and risk tolerance"
              ]}
            />
            <TipCard 
              icon={<Building size={24} className="text-teal-500" />}
              title="Research Platforms"
              description="Thoroughly investigate P2P platforms before investing."
              detailedTips={[
                "Check the platform's track record and financial stability",
                "Understand the platform's loan underwriting process",
                "Read user reviews and experiences",
                "Verify regulatory compliance and any relevant certifications"
              ]}
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h3 className="text-xl font-semibold text-teal-700 mb-4">Quick Tips for All Participants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <QuickTipCard 
            icon={<Shield size={20} className="text-teal-500" />}
            text="Protect your personal and financial information online"
          />
          <QuickTipCard 
            icon={<TrendingUp size={20} className="text-teal-500" />}
            text="Stay informed about market trends and economic factors"
          />
          <QuickTipCard 
            icon={<FileText size={20} className="text-teal-500" />}
            text="Keep detailed records of all your P2P lending activities"
          />
        </div>
      </div>

      <div className="bg-teal-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-teal-700 mb-4">Remember</h3>
        <p className="text-gray-700">
          P2P lending can offer attractive opportunities for both borrowers and lenders, but it's crucial to approach it with caution and thorough preparation. Always do your due diligence, understand the risks involved, and consider seeking advice from a financial professional if you're unsure about any aspect of P2P lending.
        </p>
      </div>
    </div>
  );
};

export default TwentyThirdSlide;