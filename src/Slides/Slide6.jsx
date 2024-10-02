import React, { useState, useEffect } from 'react';
import { Users, Clock } from 'lucide-react';

const SixthSlide = () => {
  const [showDefinition, setShowDefinition] = useState(false);
  const [activeHistoryStep, setActiveHistoryStep] = useState(-1);

  const historySteps = [
    { year: 2005, event: "Zopa launches in the UK, pioneering P2P lending" },
    { year: 2006, event: "Prosper and Lending Club launch in the US" },
    { year: 2008, event: "Global financial crisis boosts interest in alternative finance" },
    { year: 2014, event: "China becomes the world's largest P2P lending market" },
    { year: 2016, event: "US introduces regulations for P2P lending" },
    { year: 2020, event: "COVID-19 pandemic accelerates digital lending adoption" },
    { year: 2024, event: "Global P2P lending market reaches $558 billion" }
  ];

  useEffect(() => {
    const definitionTimer = setTimeout(() => setShowDefinition(true), 1000);
    
    const historyTimer = setInterval(() => {
      setActiveHistoryStep(prev => (prev < historySteps.length - 1 ? prev + 1 : prev));
    }, 2000);

    return () => {
      clearTimeout(definitionTimer);
      clearInterval(historyTimer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-start h-full bg-gradient-to-br from-indigo-100 to-purple-100 p-8 overflow-y-auto">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">P2P Lending: Connecting Borrowers and Lenders</h2>
      
      {showDefinition && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8 max-w-2xl animate-fade-in">
          <div className="flex items-center mb-4">
            <Users size={32} className="text-indigo-600 mr-4" />
            <h3 className="text-2xl font-semibold">What is P2P Lending?</h3>
          </div>
          <p className="text-gray-700">
            Peer-to-Peer (P2P) lending is a method of debt financing that enables individuals to borrow and lend money without the use of an official financial institution as an intermediary. It removes the middleman from the process, but it also involves more time, effort and risk than the general brick-and-mortar lending scenarios.
          </p>
        </div>
      )}

      <div className="w-full max-w-2xl">
        <h3 className="text-2xl font-semibold mb-4 flex items-center">
          <Clock size={24} className="text-purple-600 mr-2" />
          Brief History of P2P Lending
        </h3>
        <div className="space-y-4">
          {historySteps.map((step, index) => (
            <div 
              key={step.year}
              className={`flex items-start transition-all duration-500 ${
                index <= activeHistoryStep ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
            >
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 mr-4">
                {step.year}
              </div>
              <div className="bg-white p-4 rounded-lg shadow flex-grow">
                <p className="text-gray-800">{step.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SixthSlide;