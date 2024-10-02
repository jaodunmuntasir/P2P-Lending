import React, { useState, useEffect } from "react";
import {
  UserPlus,
  Search,
  BarChart2,
  CheckCircle,
  PieChart,
  Inbox,
} from "lucide-react";

const JourneyStep = ({ icon, title, description, isActive }) => (
  <div
    className={`flex items-start p-4 rounded-lg transition-all duration-500 ${isActive ? "bg-green-100 scale-105" : "bg-white"}`}
  >
    <div
      className={`p-3 rounded-full mr-4 ${isActive ? "bg-green-500 text-white" : "bg-green-100 text-green-500"}`}
    >
      {icon}
    </div>
    <div>
      <h3
        className={`font-semibold mb-2 ${isActive ? "text-green-700" : "text-gray-700"}`}
      >
        {title}
      </h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const TenthSlide = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <UserPlus size={24} />,
      title: "1. Account Creation and Verification",
      description:
        "Lender signs up on the P2P platform and completes the verification process, including KYC checks.",
    },
    {
      icon: <Search size={24} />,
      title: "2. Browsing Loan Listings",
      description:
        "Lender explores available loan opportunities, filtering by criteria such as loan amount, interest rate, and risk grade.",
    },
    {
      icon: <BarChart2 size={24} />,
      title: "3. Risk Assessment",
      description:
        "Lender evaluates the risk associated with each loan, considering factors like borrower credit score and loan purpose.",
    },
    {
      icon: <CheckCircle size={24} />,
      title: "4. Investment Decision",
      description:
        "Based on risk assessment, lender decides which loans to invest in and how much to allocate to each.",
    },
    {
      icon: <PieChart size={24} />,
      title: "5. Portfolio Diversification",
      description:
        "Lender spreads investments across multiple loans to minimize risk and optimize returns.",
    },
    {
      icon: <Inbox size={24} />,
      title: "6. Receiving Repayments and Interest",
      description:
        "Lender receives regular repayments of principal and interest as borrowers make their scheduled payments.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % steps.length);
    }, 5000); // Change active step every 5 seconds

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-green-100 to-emerald-100 p-6 overflow-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-green-800">
        The P2P Lending Journey: Lender's Perspective
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {steps.map((step, index) => (
          <JourneyStep key={index} {...step} isActive={index === activeStep} />
        ))}
      </div>

      <div className="mt-8 bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-green-700 text-center">
          Key Considerations for Lenders
        </h3><br></br>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: <BarChart2 size={20} className="text-green-500" />,
              text: "Understand the risk-return tradeoff",
            },
            {
              icon: <PieChart size={20} className="text-green-500" />,
              text: "Diversify investments across multiple loans",
            },
            {
              icon: <Search size={20} className="text-green-500" />,
              text: "Conduct thorough due diligence on each loan",
            },
            {
              icon: <Inbox size={20} className="text-green-500" />,
              text: "Be prepared for potential defaults",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center p-3 bg-green-50 rounded-lg"
            >
              <div className="bg-green-100 p-2 rounded-full mr-3">
                {item.icon}
              </div>
              <p className="text-sm text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TenthSlide;
