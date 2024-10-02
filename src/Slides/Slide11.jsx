import React, { useState, useEffect } from 'react';
import { TrendingUp, PieChart, Coins, Target, Key, ShieldCheck } from 'lucide-react';

const AdvantageCard = ({ icon, title, description, comparison }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`bg-white rounded-lg shadow-lg p-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="flex items-center mb-3">
        <div className="bg-green-100 p-2 rounded-full mr-3">
          {icon}
        </div>
        <h3 className="font-semibold text-green-700">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <div className="bg-green-50 p-3 rounded-lg">
        <h4 className="font-semibold text-green-600 mb-1">Comparison:</h4>
        <p className="text-xs text-gray-600">{comparison}</p>
      </div>
    </div>
  );
};

const EleventhSlide = () => {
  const advantages = [
    {
      icon: <TrendingUp size={24} className="text-green-500" />,
      title: "Higher Potential Returns",
      description: "P2P lending often offers higher interest rates compared to traditional savings accounts or bonds.",
      comparison: "vs. Traditional Savings: While savings accounts may offer 0.5-1% interest, P2P lending can yield 6-12% or more, depending on risk."
    },
    {
      icon: <PieChart size={24} className="text-green-500" />,
      title: "Portfolio Diversification",
      description: "Spread investments across multiple loans to minimize risk and optimize returns.",
      comparison: "vs. Stock Market: P2P loans have low correlation with stocks, providing true diversification to an investment portfolio."
    },
    {
      icon: <Coins size={24} className="text-green-500" />,
      title: "Lower Minimum Investment",
      description: "Start investing with smaller amounts, making it accessible to more people.",
      comparison: "vs. Real Estate Investment: While real estate often requires large capital, P2P lending allows starting with as little as $25-$50."
    },
    {
      icon: <Target size={24} className="text-green-500" />,
      title: "Targeted Investing",
      description: "Choose specific loans based on risk appetite or use automated investing for convenience.",
      comparison: "vs. Mutual Funds: Unlike mutual funds, P2P lending allows direct control over which loans to invest in, tailoring to personal preferences."
    },
    {
      icon: <Key size={24} className="text-green-500" />,
      title: "Access to New Asset Class",
      description: "Invest in consumer and business loans, previously only available to banks.",
      comparison: "vs. Traditional Banking: P2P lending democratizes access to the lucrative personal and business loan market, previously a bank monopoly."
    },
    {
      icon: <ShieldCheck size={24} className="text-green-500" />,
      title: "Transparency",
      description: "Clear information about borrowers and loan terms for informed decision-making.",
      comparison: "vs. Complex Financial Products: Unlike some complex financial products, P2P lending offers straightforward, transparent investment opportunities."
    }
  ];

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-green-100 to-emerald-100 p-6 overflow-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-green-800">
        Advantages of P2P Lending for Lenders
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {advantages.map((advantage, index) => (
          <AdvantageCard key={index} {...advantage} />
        ))}
      </div>

      <div className="mt-8 bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-green-700">Key Takeaway</h3>
        <p className="text-gray-600">
          P2P lending offers a unique combination of potentially higher returns, lower barriers to entry, 
          and greater control over investments compared to traditional financial products. However, it's 
          important for lenders to understand the associated risks and diversify their investments accordingly.
        </p>
      </div>
    </div>
  );
};

export default EleventhSlide;