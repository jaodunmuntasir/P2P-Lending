import React, { useState, useEffect } from "react";
import {
  FileText,
  Search,
  List,
  Users,
  DollarSign,
  RefreshCw,
  TrendingDown,
  Zap,
  Sliders,
  UserPlus,
  Eye,
  AlertTriangle,
} from "lucide-react";

const JourneyStep = ({ icon, title, description, isActive }) => (
  <div
    className={`flex items-start p-4 rounded-lg transition-all duration-500 ${isActive ? "bg-indigo-100 scale-105" : "bg-white"}`}
  >
    <div
      className={`p-3 rounded-full mr-4 ${isActive ? "bg-indigo-500 text-white" : "bg-indigo-100 text-indigo-500"}`}
    >
      {icon}
    </div>
    <div>
      <h3
        className={`font-semibold mb-2 ${isActive ? "text-indigo-700" : "text-gray-700"}`}
      >
        {title}
      </h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const Benefit = ({ icon, text }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex items-center p-3 bg-white rounded-lg shadow transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <div className="bg-indigo-100 p-2 rounded-full mr-3">{icon}</div>
      <p className="text-sm text-gray-700">{text}</p>
    </div>
  );
};

const NinthSlide = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <FileText size={24} />,
      title: "1. Application Submission",
      description:
        "Borrower fills out an online application, providing personal and financial information, loan amount, and purpose.",
    },
    {
      icon: <Search size={24} />,
      title: "2. Credit Assessment",
      description:
        "The P2P platform evaluates the borrower's creditworthiness using traditional and alternative data sources.",
    },
    {
      icon: <List size={24} />,
      title: "3. Loan Listing",
      description:
        "If approved, the loan is listed on the platform marketplace with assigned risk grade and interest rate.",
    },
    {
      icon: <Users size={24} />,
      title: "4. Funding from Multiple Lenders",
      description:
        "Multiple lenders review the loan and contribute portions until the loan is fully funded.",
    },
    {
      icon: <DollarSign size={24} />,
      title: "5. Loan Disbursement",
      description:
        "Once fully funded, the loan amount is transferred to the borrower's bank account.",
    },
    {
      icon: <RefreshCw size={24} />,
      title: "6. Repayment",
      description:
        "Borrower makes regular payments (usually monthly) which are distributed to lenders by the platform.",
    },
  ];

  const benefits = [
    {
      icon: <TrendingDown size={20} className="text-indigo-500" />,
      text: "Potentially lower interest rates compared to traditional loans",
    },
    {
      icon: <Zap size={20} className="text-indigo-500" />,
      text: "Faster approval and funding process",
    },
    {
      icon: <Sliders size={20} className="text-indigo-500" />,
      text: "More flexible loan terms and amounts",
    },
    {
      icon: <UserPlus size={20} className="text-indigo-500" />,
      text: "Opportunity for those with limited credit history",
    },
    {
      icon: <Eye size={20} className="text-indigo-500" />,
      text: "Transparent process with clear terms and conditions",
    },
    {
      icon: <AlertTriangle size={20} className="text-indigo-500" />,
      text: "No early repayment penalties",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % steps.length);
    }, 5000); // Change active step every 5 seconds

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-blue-100 to-indigo-100 p-6 overflow-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">
        The P2P Lending Journey: Borrower's Perspective
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {steps.map((step, index) => (
          <JourneyStep key={index} {...step} isActive={index === activeStep} />
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 text-indigo-700 text-center">
          Key Benefits for Borrowers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <Benefit key={index} {...benefit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NinthSlide;
