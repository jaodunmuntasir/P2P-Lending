import React, { useState } from "react";
import {
  TrendingUp,
  Landmark,
  Link,
  Globe,
  Database,
  Leaf,
  Smartphone,
  Shield,
  Zap,
  GitBranch,
} from "lucide-react";

const TrendCard = ({ icon, title, description, implications }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 ${isExpanded ? "row-span-2" : ""}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center mb-4">
        <div className="bg-purple-100 p-3 rounded-full mr-4">{icon}</div>
        <h3 className="text-xl font-semibold text-purple-700">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {isExpanded && (
        <div>
          <h4 className="font-semibold text-purple-600 mb-2">Implications:</h4>
          <ul className="space-y-2">
            {implications.map((implication, index) => (
              <li key={index} className="flex items-start">
                <TrendingUp
                  className="text-green-500 mr-2 flex-shrink-0 mt-1"
                  size={16}
                />
                <span className="text-sm text-gray-700">{implication}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const ChallengeCard = ({ icon, title, description }) => (
  <div className="bg-purple-50 rounded-lg p-4 flex items-start space-x-4">
    <div className="bg-purple-100 p-2 rounded-full">{icon}</div>
    <div>
      <h4 className="font-semibold text-purple-700 mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const TwentyFirstSlide = () => {
  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-purple-100 to-pink-100 p-6 overflow-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">
        Future Trends in P2P Lending
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <TrendCard
          icon={<Landmark size={24} className="text-purple-500" />}
          title="Increased Institutional Involvement"
          description="Growing participation of banks, investment firms, and other financial institutions in P2P lending platforms."
          implications={[
            "Larger pool of capital available for borrowers",
            "Potentially lower interest rates due to increased competition",
            "More sophisticated risk assessment models",
            "Possible shift in the 'peer' aspect of P2P lending",
          ]}
        />
        <TrendCard
          icon={<Link size={24} className="text-purple-500" />}
          title="Integration with Open Banking"
          description="Leveraging open banking APIs to access real-time financial data for better lending decisions and user experience."
          implications={[
            "More accurate creditworthiness assessments",
            "Streamlined application processes for borrowers",
            "Enhanced financial product recommendations",
            "Potential for new types of lending products",
          ]}
        />
        <TrendCard
          icon={<Globe size={24} className="text-purple-500" />}
          title="Expansion into New Markets and Loan Types"
          description="P2P platforms diversifying into new geographical markets and offering innovative loan products."
          implications={[
            "Increased financial inclusion in underserved markets",
            "Development of niche lending products (e.g., green energy loans)",
            "Cross-border lending opportunities",
            "Adaptation to diverse regulatory environments",
          ]}
        />
        <TrendCard
          icon={<Database size={24} className="text-purple-500" />}
          title="Enhanced Use of Alternative Data"
          description="Incorporating non-traditional data sources for more comprehensive credit scoring and risk assessment."
          implications={[
            "More inclusive lending practices",
            "Improved accuracy in predicting loan performance",
            "Potential for lower default rates",
            "Privacy and ethical considerations in data usage",
          ]}
        />
        <TrendCard
          icon={<Leaf size={24} className="text-purple-500" />}
          title="Focus on Sustainable and Social Impact Lending"
          description="Growing emphasis on funding projects with positive environmental and social outcomes."
          implications={[
            "Alignment with ESG investment trends",
            "Attraction of socially conscious investors",
            "Development of impact measurement metrics",
            "Potential for partnerships with NGOs and social enterprises",
          ]}
        />
        <TrendCard
          icon={<Smartphone size={24} className="text-purple-500" />}
          title="Mobile-First Lending Solutions"
          description="Increasing focus on mobile applications for a seamless lending and borrowing experience."
          implications={[
            "Wider accessibility, especially in mobile-first markets",
            "Real-time lending decisions and disbursements",
            "Integration with mobile payment systems",
            "Enhanced user engagement and retention",
          ]}
        />
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h3 className="text-xl font-semibold text-purple-700 mb-4">
          Potential Challenges and Considerations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ChallengeCard
            icon={<Shield size={20} className="text-purple-500" />}
            title="Regulatory Adaptation"
            description="Keeping pace with evolving regulations across different markets and ensuring compliance."
          />
          <ChallengeCard
            icon={<Zap size={20} className="text-purple-500" />}
            title="Technological Disruption"
            description="Adapting to rapid technological changes and potential disruption from new fintech innovations."
          />
          <ChallengeCard
            icon={<GitBranch size={20} className="text-purple-500" />}
            title="Market Saturation"
            description="Differentiating in an increasingly crowded market and maintaining growth."
          />
          <ChallengeCard
            icon={<Database size={20} className="text-purple-500" />}
            title="Data Privacy and Security"
            description="Balancing the use of alternative data with privacy concerns and data protection regulations."
          />
        </div>
      </div>

      <div className="bg-purple-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-purple-700 mb-4">
          Long-Term Vision for P2P Lending
        </h3>
        <p className="text-gray-700">
          The future of P2P lending points towards a more integrated,
          technologically advanced, and socially conscious financial ecosystem.
          As the industry matures, we can expect to see P2P platforms evolving
          into comprehensive financial service providers, potentially
          challenging traditional banking models. The key to success will lie in
          balancing innovation with risk management, regulatory compliance, and
          user trust.
        </p>
      </div>
    </div>
  );
};

export default TwentyFirstSlide;
