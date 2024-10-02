import React, { useState } from 'react';
import { ShieldAlert, TrendingDown, Building, FileText, TrendingUp, Lock, Users, Zap, Globe, GitBranch } from 'lucide-react';

const ChallengeCard = ({ icon, title, description, strategies }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 ${isExpanded ? 'row-span-2' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center mb-4">
        <div className="bg-orange-100 p-3 rounded-full mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-orange-700">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {isExpanded && (
        <div>
          <h4 className="font-semibold text-orange-600 mb-2">Potential Strategies:</h4>
          <ul className="space-y-2">
            {strategies.map((strategy, index) => (
              <li key={index} className="flex items-start">
                <GitBranch className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                <span className="text-sm text-gray-700">{strategy}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const OpportunityCard = ({ icon, title, description }) => (
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

const TwentySecondSlide = () => {
  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-orange-100 to-yellow-100 p-6 overflow-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-orange-800">
        Challenges Facing the P2P Lending Industry
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <ChallengeCard 
          icon={<ShieldAlert size={24} className="text-orange-500" />}
          title="Building Trust and Credibility"
          description="Establishing and maintaining trust with both borrowers and lenders in a relatively new financial model."
          strategies={[
            "Implement robust security measures and clearly communicate them",
            "Provide transparent reporting on loan performance and platform financials",
            "Obtain relevant certifications and regulatory approvals",
            "Collaborate with established financial institutions for credibility"
          ]}
        />
        <ChallengeCard 
          icon={<TrendingDown size={24} className="text-orange-500" />}
          title="Managing Default Rates"
          description="Mitigating the impact of increased default rates during economic downturns or crises."
          strategies={[
            "Develop sophisticated risk assessment models using AI and machine learning",
            "Implement dynamic interest rates that adjust to economic conditions",
            "Create reserve funds to cover potential defaults",
            "Offer flexible repayment options for borrowers facing temporary difficulties"
          ]}
        />
        <ChallengeCard 
          icon={<Building size={24} className="text-orange-500" />}
          title="Competing with Traditional Institutions"
          description="Differentiating P2P lending services from those offered by established banks and financial companies."
          strategies={[
            "Focus on niche markets underserved by traditional institutions",
            "Emphasize speed and convenience of the lending process",
            "Offer more competitive rates and terms",
            "Provide a superior user experience through technology"
          ]}
        />
        <ChallengeCard 
          icon={<FileText size={24} className="text-orange-500" />}
          title="Navigating Regulatory Environments"
          description="Adapting to and complying with evolving regulations across different jurisdictions."
          strategies={[
            "Invest in strong compliance teams and systems",
            "Engage proactively with regulators to shape favorable policies",
            "Participate in industry associations to stay informed of regulatory changes",
            "Develop flexible platform architectures that can adapt to regulatory requirements"
          ]}
        />
        <ChallengeCard 
          icon={<TrendingUp size={24} className="text-orange-500" />}
          title="Balancing Growth and Loan Quality"
          description="Maintaining loan quality and risk management standards while pursuing rapid growth."
          strategies={[
            "Implement strict underwriting criteria and regularly review their effectiveness",
            "Use technology to automate and enhance credit assessment processes",
            "Diversify loan portfolios to spread risk",
            "Focus on sustainable growth metrics rather than just loan volume"
          ]}
        />
        <ChallengeCard 
          icon={<Lock size={24} className="text-orange-500" />}
          title="Ensuring Data Security and Privacy"
          description="Protecting sensitive financial data and complying with data protection regulations."
          strategies={[
            "Implement state-of-the-art encryption and security protocols",
            "Regularly conduct security audits and penetration testing",
            "Provide clear data usage policies and obtain explicit user consent",
            "Invest in employee training on data security best practices"
          ]}
        />
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h3 className="text-xl font-semibold text-orange-700 mb-4">Turning Challenges into Opportunities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <OpportunityCard 
            icon={<Users size={20} className="text-green-500" />}
            title="Collaborative Ecosystem"
            description="Partner with fintech startups, traditional banks, and regulators to create a more robust and innovative lending ecosystem."
          />
          <OpportunityCard 
            icon={<Zap size={20} className="text-green-500" />}
            title="Technological Innovation"
            description="Leverage emerging technologies like AI, blockchain, and open banking to enhance operations and user experience."
          />
          <OpportunityCard 
            icon={<Globe size={20} className="text-green-500" />}
            title="Financial Inclusion"
            description="Focus on underserved markets and demographics to expand the reach of financial services."
          />
          <OpportunityCard 
            icon={<GitBranch size={20} className="text-green-500" />}
            title="Product Diversification"
            description="Expand beyond traditional loans to offer a wider range of financial products and services."
          />
        </div>
      </div>

      <div className="bg-orange-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-orange-700 mb-4">The Road Ahead</h3>
        <p className="text-gray-700">
          While the P2P lending industry faces significant challenges, these obstacles also present opportunities for innovation and growth. By addressing these challenges head-on, P2P lending platforms can strengthen their position in the financial ecosystem, enhance their value proposition to users, and contribute to a more inclusive and efficient financial system. The industry's ability to adapt, innovate, and collaborate will be key to overcoming these hurdles and realizing its full potential.
        </p>
      </div>
    </div>
  );
};

export default TwentySecondSlide;