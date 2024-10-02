import React, { useState, useEffect } from 'react';
import { User, Users, TrendingUp, Building, DollarSign, Briefcase, PieChart, Award } from 'lucide-react';

const CharacterCard = ({ name, icon, color, achievements }) => {
  const [showAchievements, setShowAchievements] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowAchievements(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:scale-105`}>
      <div className="flex items-center mb-4">
        <div className={`${color} p-3 rounded-full mr-4`}>
          {icon}
        </div>
        <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
      </div>
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <div 
            key={index} 
            className={`flex items-start transition-all duration-500 ${showAchievements ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
            style={{ transitionDelay: `${index * 300}ms` }}
          >
            <div className={`${color} p-2 rounded-full mr-3 flex-shrink-0`}>
              {achievement.icon}
            </div>
            <p className="text-gray-600">{achievement.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ImpactMetric = ({ icon, value, description }) => (
  <div className="bg-indigo-100 rounded-lg p-4 flex flex-col items-center text-center">
    <div className="bg-indigo-200 p-2 rounded-full mb-2">
      {icon}
    </div>
    <span className="text-2xl font-bold text-indigo-800 mb-1">{value}</span>
    <p className="text-sm text-indigo-600">{description}</p>
  </div>
);

const TwentyFourthSlide = () => {
  const [showImpact, setShowImpact] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowImpact(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-indigo-100 to-purple-100 p-6 overflow-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-800">
        Revisiting Our Opening Story: P2P Lending Success
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <CharacterCard
          name="Sarah"
          icon={<User size={32} />}
          color="bg-pink-100 text-pink-500"
          achievements={[
            { icon: <Building size={20} />, text: "Secured a business loan through Funding Circle" },
            { icon: <TrendingUp size={20} />, text: "Expanded her café business significantly" },
            { icon: <Users size={20} />, text: "Created new jobs in her local community" },
            { icon: <Award size={20} />, text: "Won 'Local Business of the Year' award" }
          ]}
        />
        <CharacterCard
          name="Michael"
          icon={<User size={32} />}
          color="bg-blue-100 text-blue-500"
          achievements={[
            { icon: <PieChart size={20} />, text: "Invested across multiple P2P platforms" },
            { icon: <TrendingUp size={20} />, text: "Achieved higher returns compared to traditional savings" },
            { icon: <Briefcase size={20} />, text: "Successfully managed and diversified investment risk" },
            { icon: <DollarSign size={20} />, text: "Reinvested profits to grow his P2P portfolio" }
          ]}
        />
      </div>

      <div className={`transition-all duration-1000 ${showImpact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h3 className="text-2xl font-semibold text-center text-indigo-800 mb-4">The Broader Impact</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ImpactMetric 
            icon={<Building size={24} className="text-indigo-500" />}
            value="1,000+"
            description="Small businesses funded"
          />
          <ImpactMetric 
            icon={<Users size={24} className="text-indigo-500" />}
            value="5,000+"
            description="New jobs created"
          />
          <ImpactMetric 
            icon={<DollarSign size={24} className="text-indigo-500" />}
            value="$100M+"
            description="Loans facilitated"
          />
          <ImpactMetric 
            icon={<TrendingUp size={24} className="text-indigo-500" />}
            value="12%"
            description="Avg. return for lenders"
          />
        </div>
      </div>
    </div>
  );
};

export default TwentyFourthSlide;