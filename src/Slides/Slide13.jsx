import React, { useState, useEffect } from 'react';
import { Calendar, Target, Sliders, Bot, DollarSign, Users, PieChart, TrendingUp, Shield } from 'lucide-react';

const AnimatedNumber = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.substring(0, value.length - 1));
    const timer = setInterval(() => {
      start += 1;
      setCount(String(start) + value.substring(value.length - 1));
      if (start === end) clearInterval(timer);
    }, duration / end);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}</span>;
};

const InfoCard = ({ icon, title, content }) => (
  <div className="bg-white rounded-lg shadow-lg p-4 flex items-start space-x-4">
    <div className="bg-indigo-100 p-2 rounded-full flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-indigo-700 mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{content}</p>
    </div>
  </div>
);

const ThirteenthSlide = () => {
  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-indigo-100 to-purple-100 p-6 overflow-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-800">
        Case Study: Prosper
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <InfoCard 
          icon={<Calendar className="text-indigo-500" size={24} />}
          title="Founded"
          content="Established in 2005, Prosper was one of the first P2P lending platforms in the US, pioneering the industry."
        />
        <InfoCard 
          icon={<Target className="text-indigo-500" size={24} />}
          title="Focus"
          content="Primarily consumer lending, offering personal loans for various purposes such as debt consolidation, home improvement, and more."
        />
        <InfoCard 
          icon={<Users className="text-indigo-500" size={24} />}
          title="Community"
          content="Over 2 million members, including both borrowers seeking loans and investors funding them."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <InfoCard 
          icon={<Sliders className="text-indigo-500" size={24} />}
          title="Prosper Rating"
          content="Proprietary risk assessment system that assigns ratings from AA (lowest risk) to HR (highest risk), helping investors make informed decisions."
        />
        <InfoCard 
          icon={<Bot className="text-indigo-500" size={24} />}
          title="Investing Options"
          content="Offers both manual investing for hands-on investors and automated plans for those preferring a more passive approach."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <InfoCard 
          icon={<PieChart className="text-indigo-500" size={24} />}
          title="Loan Diversification"
          content="Investors can spread their investments across multiple loans to manage risk effectively."
        />
        <InfoCard 
          icon={<TrendingUp className="text-indigo-500" size={24} />}
          title="Returns"
          content="Historical returns for investors have ranged from 3.5% to 8%, depending on the risk grade of loans."
        />
        <InfoCard 
          icon={<Shield className="text-indigo-500" size={24} />}
          title="Regulatory Compliance"
          content="Registered with the SEC and complies with federal and state lending regulations, ensuring a secure platform for users."
        />
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <h3 className="text-xl font-semibold text-indigo-700 mb-4">Impact and Growth</h3>
        <div className="flex items-center justify-center space-x-2 mb-2">
          <DollarSign className="text-green-500" size={32} />
          <p className="text-4xl font-bold text-green-600">
            $<AnimatedNumber value="28B" /> +
          </p>
        </div>
        <p className="text-indigo-800">in funded loans as of 2024</p>
        <p className="text-sm text-gray-600 mt-2">
          Prosper's growth demonstrates the increasing adoption and trust in P2P lending platforms, 
          revolutionizing personal finance by connecting borrowers directly with individual lenders.
        </p>
      </div>
    </div>
  );
};

export default ThirteenthSlide;