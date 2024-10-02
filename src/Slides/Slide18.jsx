import React, { useState } from 'react';
import { Database, Brain, Link, Shield, Zap, ChartBar, UserCheck, Clock, GitBranch } from 'lucide-react';

const TechCard = ({ icon, title, description, features }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 ${isExpanded ? 'row-span-2' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center mb-4">
        <div className="bg-indigo-100 p-3 rounded-full mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-indigo-700">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {isExpanded && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Zap className="text-yellow-500 mr-2 flex-shrink-0 mt-1" size={16} />
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const ImpactCard = ({ icon, title, description }) => (
  <div className="bg-indigo-50 rounded-lg p-4 flex items-start space-x-4">
    <div className="bg-indigo-100 p-2 rounded-full">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-indigo-700 mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const EighteenthSlide = () => {
  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-indigo-100 to-purple-100 p-6 overflow-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-800">
        The Role of Technology in P2P Lending
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <TechCard 
          icon={<Database size={24} className="text-indigo-500" />}
          title="Big Data"
          description="Leveraging vast amounts of data for enhanced credit assessment and risk management."
          features={[
            "Integration of alternative data sources for more accurate borrower profiles",
            "Real-time risk assessment and dynamic pricing models",
            "Predictive analytics for default probability and loan performance"
          ]}
        />
        <TechCard 
          icon={<Brain size={24} className="text-indigo-500" />}
          title="AI and Machine Learning"
          description="Employing advanced algorithms for automated decision-making and fraud detection."
          features={[
            "Natural Language Processing for sentiment analysis on loan applications",
            "Automated underwriting processes reducing manual intervention",
            "Behavioral analysis for early fraud detection and prevention"
          ]}
        />
        <TechCard 
          icon={<Link size={24} className="text-indigo-500" />}
          title="Blockchain"
          description="Exploring the potential of distributed ledger technology for increased transparency and efficiency."
          features={[
            "Smart contracts for automated loan agreements and repayments",
            "Immutable record-keeping for enhanced audit trails",
            "Tokenization of loans for improved liquidity and fractional investing"
          ]}
        />
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h3 className="text-xl font-semibold text-indigo-700 mb-4">Technology's Impact on P2P Lending</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ImpactCard 
            icon={<Shield size={20} className="text-green-500" />}
            title="Enhanced Security"
            description="Advanced encryption and biometric authentication protecting user data and transactions."
          />
          <ImpactCard 
            icon={<ChartBar size={20} className="text-blue-500" />}
            title="Improved Efficiency"
            description="Automation reducing operational costs and enabling faster loan processing times."
          />
          <ImpactCard 
            icon={<UserCheck size={20} className="text-purple-500" />}
            title="Better User Experience"
            description="AI-powered chatbots and personalized recommendations enhancing customer interactions."
          />
        </div>
      </div>

      <div className="bg-indigo-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-indigo-700 mb-4">Future Technological Trends in P2P Lending</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <Clock className="text-indigo-500 mr-2 flex-shrink-0 mt-1" size={20} />
            <span className="text-gray-700">Real-time credit scoring using continuous data streams and IoT devices</span>
          </li>
          <li className="flex items-start">
            <GitBranch className="text-indigo-500 mr-2 flex-shrink-0 mt-1" size={20} />
            <span className="text-gray-700">Integration with open banking platforms for comprehensive financial profiling</span>
          </li>
          <li className="flex items-start">
            <Zap className="text-indigo-500 mr-2 flex-shrink-0 mt-1" size={20} />
            <span className="text-gray-700">Quantum computing for ultra-fast, complex risk calculations and market predictions</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EighteenthSlide;