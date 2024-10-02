import React, { useState, useEffect } from 'react';
import { Calendar, Briefcase, Globe, Users, Landmark, ChartBar, Shield, TrendingUp, Clock } from 'lucide-react';

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
    <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-green-700 mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{content}</p>
    </div>
  </div>
);

const FourteenthSlide = () => {
  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-green-100 to-teal-100 p-6 overflow-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-800">
        Case Study: Funding Circle
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <InfoCard 
          icon={<Calendar className="text-green-500" size={24} />}
          title="Founded"
          content="Established in 2010 in the UK, Funding Circle quickly became a leading P2P platform for small business lending."
        />
        <InfoCard 
          icon={<Briefcase className="text-green-500" size={24} />}
          title="Focus"
          content="Specializes in small business lending, providing crucial access to capital for SMEs often underserved by traditional banks."
        />
        <InfoCard 
          icon={<Globe className="text-green-500" size={24} />}
          title="Global Presence"
          content="Operates in multiple countries including the UK, US, Germany, and the Netherlands, demonstrating the global potential of P2P lending."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <InfoCard 
          icon={<Users className="text-green-500" size={24} />}
          title="Diverse Investor Base"
          content="Caters to both retail and institutional investors, including individuals, financial institutions, national banks, and even government entities."
        />
        <InfoCard 
          icon={<Landmark className="text-green-500" size={24} />}
          title="Loan Types"
          content="Offers various loan products including term loans, lines of credit, and specialized loans for different business needs."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <InfoCard 
          icon={<ChartBar className="text-green-500" size={24} />}
          title="Risk Assessment"
          content="Employs advanced data analytics and machine learning for credit assessment, ensuring efficient and accurate evaluation of loan applications."
        />
        <InfoCard 
          icon={<Shield className="text-green-500" size={24} />}
          title="Regulatory Compliance"
          content="Adheres to strict regulatory standards in each operating country, including FCA regulation in the UK and SEC registration in the US."
        />
        <InfoCard 
          icon={<TrendingUp className="text-green-500" size={24} />}
          title="Economic Impact"
          content="Contributes significantly to job creation and economic growth by supporting small businesses. In the UK alone, it's estimated to have created over 100,000 jobs."
        />
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <h3 className="text-xl font-semibold text-green-700 mb-4">Global Impact and Growth</h3>
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Briefcase className="text-green-500" size={32} />
          <p className="text-4xl font-bold text-green-600">
            £<AnimatedNumber value="11.5B" /> +
          </p>
        </div>
        <p className="text-green-800">lent to small businesses globally</p>
        <p className="text-sm text-gray-600 mt-2">
          Funding Circle's substantial lending volume demonstrates the significant role P2P platforms can play in supporting small businesses and driving economic growth.
        </p>
        <div className="mt-4 flex items-center justify-center">
          <Clock className="text-green-500 mr-2" size={20} />
          <p className="text-sm text-gray-600">
            On average, it takes just 6 minutes to apply and 24 hours to get a decision
          </p>
        </div>
      </div>
    </div>
  );
};

export default FourteenthSlide;