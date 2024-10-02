import React, { useState } from 'react';
import { AlertTriangle, Shield, TrendingDown, Building, FileText, Droplet, PieChart, Umbrella, BarChart2, Search } from 'lucide-react';

const RiskCard = ({ icon, title, description, mitigations }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 ${isExpanded ? 'row-span-2' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center mb-4">
        <div className="bg-red-100 p-3 rounded-full mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-red-700">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {isExpanded && (
        <div>
          <h4 className="font-semibold text-red-600 mb-2">Mitigation Strategies:</h4>
          <ul className="space-y-2">
            {mitigations.map((strategy, index) => (
              <li key={index} className="flex items-start">
                <Shield className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                <span className="text-sm text-gray-700">{strategy}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const MitigationCard = ({ icon, title, description }) => (
  <div className="bg-green-50 rounded-lg p-4 flex items-start space-x-4">
    <div className="bg-green-100 p-2 rounded-full">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-green-700 mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const TwentiethSlide = () => {
  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-red-100 to-yellow-100 p-6 overflow-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-red-800">
        Risk Factors and Mitigation Strategies in P2P Lending
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <RiskCard 
          icon={<TrendingDown size={24} className="text-red-500" />}
          title="Default Risk"
          description="The possibility that borrowers fail to repay their loans, leading to losses for lenders."
          mitigations={[
            "Diversification across multiple loans",
            "Thorough credit assessment of borrowers",
            "Implementation of collection procedures",
            "Use of collateral for secured loans"
          ]}
        />
        <RiskCard 
          icon={<Building size={24} className="text-red-500" />}
          title="Platform Risk"
          description="The risk of the P2P platform failing or mismanaging funds, potentially leading to loss of investments."
          mitigations={[
            "Due diligence on platform's financial health and practices",
            "Regulatory compliance checks",
            "Segregation of investor funds from platform's operational accounts",
            "Backup servicing arrangements"
          ]}
        />
        <RiskCard 
          icon={<FileText size={24} className="text-red-500" />}
          title="Regulatory Risk"
          description="The potential for regulatory changes that could impact the P2P lending model or individual investments."
          mitigations={[
            "Staying informed about regulatory developments",
            "Diversifying across different regulatory jurisdictions",
            "Investing in platforms with strong compliance teams",
            "Advocating for balanced regulations through industry associations"
          ]}
        />
        <RiskCard 
          icon={<Droplet size={24} className="text-red-500" />}
          title="Liquidity Risk"
          description="The difficulty in selling or exiting P2P investments before the loan term ends."
          mitigations={[
            "Investing in platforms with secondary markets",
            "Staggering investments over time",
            "Maintaining a balanced portfolio with varied loan terms",
            "Setting aside emergency funds outside of P2P investments"
          ]}
        />
        <RiskCard 
          icon={<AlertTriangle size={24} className="text-red-500" />}
          title="Interest Rate Risk"
          description="The risk that interest rates in the broader market change, affecting the relative value of P2P loans."
          mitigations={[
            "Diversifying across different loan terms",
            "Investing in both fixed and variable rate loans",
            "Regular portfolio rebalancing",
            "Staying informed about macroeconomic trends"
          ]}
        />
        <RiskCard 
          icon={<Search size={24} className="text-red-500" />}
          title="Information Asymmetry Risk"
          description="The risk arising from incomplete or inaccurate information about borrowers or the platform."
          mitigations={[
            "Thorough due diligence on platforms and their underwriting processes",
            "Utilizing additional third-party data sources",
            "Focusing on platforms with transparent reporting",
            "Participating in investor communities for shared insights"
          ]}
        />
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h3 className="text-xl font-semibold text-red-700 mb-4">Key Mitigation Strategies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MitigationCard 
            icon={<PieChart size={20} className="text-green-500" />}
            title="Diversification"
            description="Spread investments across multiple loans, borrowers, loan types, and even platforms to reduce the impact of any single default."
          />
          <MitigationCard 
            icon={<Umbrella size={20} className="text-green-500" />}
            title="Provision Funds"
            description="Some platforms offer provision funds to compensate lenders in case of defaults, providing an additional layer of protection."
          />
          <MitigationCard 
            icon={<BarChart2 size={20} className="text-green-500" />}
            title="Secondary Markets"
            description="Platforms with secondary markets allow lenders to sell their loan parts, potentially mitigating liquidity risk."
          />
          <MitigationCard 
            icon={<Search size={20} className="text-green-500" />}
            title="Due Diligence"
            description="Thoroughly research platforms, their track records, and risk assessment methodologies before investing."
          />
        </div>
      </div>

      <div className="bg-yellow-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-red-700 mb-4">Emerging Risk Management Trends</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <Shield className="text-yellow-500 mr-2 flex-shrink-0 mt-1" size={20} />
            <span className="text-gray-700">Implementation of AI and machine learning for more accurate risk assessment</span>
          </li>
          <li className="flex items-start">
            <Shield className="text-yellow-500 mr-2 flex-shrink-0 mt-1" size={20} />
            <span className="text-gray-700">Integration of blockchain technology for enhanced transparency and security</span>
          </li>
          <li className="flex items-start">
            <Shield className="text-yellow-500 mr-2 flex-shrink-0 mt-1" size={20} />
            <span className="text-gray-700">Development of more sophisticated investor education programs by platforms</span>
          </li>
          <li className="flex items-start">
            <Shield className="text-yellow-500 mr-2 flex-shrink-0 mt-1" size={20} />
            <span className="text-gray-700">Increased collaboration between platforms and traditional financial institutions for risk management</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TwentiethSlide;