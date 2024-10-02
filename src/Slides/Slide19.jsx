import React, { useState } from 'react';
import { Globe, Shield, Scale, AlertTriangle, Flag, FileText, Users, TrendingUp } from 'lucide-react';

const RegionCard = ({ region, icon, regulations, challenges }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 ${isExpanded ? 'row-span-2 col-span-2' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-blue-700">{region}</h3>
      </div>
      <ul className="space-y-2 mb-4">
        {regulations.slice(0, isExpanded ? regulations.length : 2).map((reg, index) => (
          <li key={index} className="flex items-start">
            <FileText className="text-blue-500 mr-2 flex-shrink-0 mt-1" size={16} />
            <span className="text-sm text-gray-700">{reg}</span>
          </li>
        ))}
      </ul>
      {isExpanded && (
        <div>
          <h4 className="font-semibold text-blue-600 mb-2">Challenges:</h4>
          <ul className="space-y-2">
            {challenges.map((challenge, index) => (
              <li key={index} className="flex items-start">
                <AlertTriangle className="text-yellow-500 mr-2 flex-shrink-0 mt-1" size={16} />
                <span className="text-sm text-gray-700">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {!isExpanded && regulations.length > 2 && (
        <p className="text-sm text-blue-500">Click to see more...</p>
      )}
    </div>
  );
};

const GlobalChallengeCard = ({ title, description }) => (
  <div className="bg-blue-50 rounded-lg p-4 flex items-start space-x-4">
    <div className="bg-blue-100 p-2 rounded-full">
      <AlertTriangle size={20} className="text-yellow-500" />
    </div>
    <div>
      <h4 className="font-semibold text-blue-700 mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const NineteenthSlide = () => {
  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-blue-100 to-cyan-100 p-6 overflow-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
        Regulatory Landscape of P2P Lending
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <RegionCard 
          region="United States"
          icon={<Flag size={24} className="text-blue-500" />}
          regulations={[
            "SEC oversight for platforms operating as securities",
            "State-level licensing requirements for lending activities",
            "CFPB monitoring for consumer protection",
            "Dodd-Frank Act provisions applicable to some P2P activities"
          ]}
          challenges={[
            "Navigating diverse state-level regulations",
            "Adapting to potential federal regulatory changes",
            "Balancing innovation with investor protection"
          ]}
        />
        <RegionCard 
          region="United Kingdom"
          icon={<Flag size={24} className="text-red-500" />}
          regulations={[
            "FCA authorization required for P2P platforms",
            "Strict rules on marketing and disclosure",
            "Mandatory contingency funds",
            "Investor appropriateness assessments"
          ]}
          challenges={[
            "Adapting to post-Brexit regulatory changes",
            "Ensuring platform stability and investor protection",
            "Managing reputational risks in a mature market"
          ]}
        />
        <RegionCard 
          region="European Union"
          icon={<Flag size={24} className="text-yellow-500" />}
          regulations={[
            "Harmonized rules under ECSP Regulation",
            "Standardized investor information requirements",
            "Cross-border provision of crowdfunding services",
            "Distinction between sophisticated and non-sophisticated investors"
          ]}
          challenges={[
            "Implementing consistent regulations across member states",
            "Balancing investor protection with market growth",
            "Addressing cross-border lending complexities"
          ]}
        />
        <RegionCard 
          region="China"
          icon={<Flag size={24} className="text-red-500" />}
          regulations={[
            "Strict regulatory crackdown on P2P lending",
            "Transition to more regulated 'online micro-lending'",
            "Enhanced data protection and privacy laws",
            "Increased capital requirements for platforms"
          ]}
          challenges={[
            "Rebuilding trust in online lending platforms",
            "Adapting business models to new regulatory reality",
            "Balancing financial inclusion with risk management"
          ]}
        />
        <RegionCard 
          region="India"
          icon={<Flag size={24} className="text-green-500" />}
          regulations={[
            "RBI guidelines for NBFC-P2P platforms",
            "Caps on lender exposure and borrower limits",
            "Mandatory disclosure and reporting requirements",
            "Restrictions on guaranteed returns"
          ]}
          challenges={[
            "Encouraging growth while ensuring stability",
            "Addressing concerns about over-indebtedness",
            "Fostering financial inclusion in a diverse market"
          ]}
        />
        <RegionCard 
          region="Southeast Asia"
          icon={<Globe size={24} className="text-blue-500" />}
          regulations={[
            "Varied approaches across countries",
            "Singapore: Strict licensing under MAS",
            "Indonesia: OJK regulations for fintech lending",
            "Thailand: SEC oversight for P2P platforms"
          ]}
          challenges={[
            "Harmonizing regulations in a diverse region",
            "Balancing innovation with consumer protection",
            "Addressing cross-border lending issues"
          ]}
        />
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Global Regulatory Challenges</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <GlobalChallengeCard 
            title="Balancing Innovation and Protection"
            description="Regulators worldwide are striving to foster fintech innovation while ensuring adequate consumer and investor protection."
          />
          <GlobalChallengeCard 
            title="Cross-Border Lending Complexities"
            description="Managing the intricacies of cross-border transactions, including differing legal frameworks and currency risks."
          />
          <GlobalChallengeCard 
            title="Evolving Business Models"
            description="Adapting regulations to keep pace with rapidly changing P2P lending business models and technologies."
          />
          <GlobalChallengeCard 
            title="Data Privacy and Security"
            description="Ensuring compliance with data protection regulations while leveraging data for credit assessments."
          />
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Regulatory Trends and Future Outlook</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <TrendingUp className="text-blue-500 mr-2 flex-shrink-0 mt-1" size={20} />
            <span className="text-gray-700">Increasing focus on investor education and protection measures</span>
          </li>
          <li className="flex items-start">
            <Globe className="text-blue-500 mr-2 flex-shrink-0 mt-1" size={20} />
            <span className="text-gray-700">Growing trend towards international regulatory cooperation and standardization</span>
          </li>
          <li className="flex items-start">
            <Shield className="text-blue-500 mr-2 flex-shrink-0 mt-1" size={20} />
            <span className="text-gray-700">Enhanced cybersecurity and data protection requirements for P2P platforms</span>
          </li>
          <li className="flex items-start">
            <Scale className="text-blue-500 mr-2 flex-shrink-0 mt-1" size={20} />
            <span className="text-gray-700">Potential integration of P2P lending into broader fintech regulatory frameworks</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NineteenthSlide;