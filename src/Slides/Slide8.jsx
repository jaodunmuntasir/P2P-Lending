import React, { useState } from "react";
import {
  User,
  Users,
  Building2,
  Briefcase,
  CreditCard,
  Home,
  GraduationCap,
  PiggyBank,
  BarChart4,
  Database,
  DollarSign,
  RefreshCw,
  Shield,
  Search,
  Smartphone,
  Landmark,
  AlertTriangle,
} from "lucide-react";

const PlayerCard = ({ title, icon, items }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-6">
        <div className="bg-indigo-100 p-3 rounded-full mr-4">{icon}</div>
        <h3 className="text-2xl font-semibold text-indigo-700">{title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex items-center transition-all duration-300 ${isHovered ? "translate-x-2" : ""}`}
          >
            <div className="bg-purple-100 p-2 rounded-full mr-3">
              {item.icon}
            </div>
            <span className="text-gray-600">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const PlatformOperation = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4 bg-indigo-50 rounded-lg transition-all duration-300 transform hover:scale-105">
    <div className="bg-purple-100 p-3 rounded-full mb-2">{icon}</div>
    <h4 className="font-semibold text-indigo-700 mb-2">{title}</h4>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const EighthSlide = () => {
  const borrowers = [
    { icon: <Briefcase size={20} />, text: "Small businesses" },
    { icon: <CreditCard size={20} />, text: "Debt consolidators" },
    { icon: <Home size={20} />, text: "Homeowners" },
    { icon: <GraduationCap size={20} />, text: "Students" },
  ];

  const lenders = [
    { icon: <PiggyBank size={20} />, text: "Retail investors" },
    { icon: <BarChart4 size={20} />, text: "High-net-worth individuals" },
    { icon: <Database size={20} />, text: "Hedge funds" },
    { icon: <DollarSign size={20} />, text: "Pension funds" },
  ];

  const platformOperations = [
    {
      icon: <Users size={24} />,
      title: "Matchmaking",
      description:
        "Uses AI algorithms to connect borrowers with suitable lenders based on risk profiles and investment criteria.",
    },
    {
      icon: <BarChart4 size={24} />,
      title: "Credit Assessment",
      description:
        "Employs machine learning models and alternative data sources to evaluate borrower creditworthiness accurately.",
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Loan Servicing",
      description:
        "Automates payment collection, disbursement to lenders, and manage defaults through streamlined processes.",
    },
    {
      icon: <Shield size={24} />,
      title: "Risk Management",
      description:
        "Implements loan grading systems and offer tools for lenders to diversify their loan portfolios effectively.",
    },
    {
      icon: <Search size={24} />,
      title: "Due Diligence",
      description:
        "Conducts thorough background checks on borrowers and verify loan purposes to maintain platform integrity.",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Technology Integration",
      description:
        "Provides user-friendly interfaces and mobile apps for easy access to lending and borrowing services.",
    },
    {
      icon: <Landmark size={24} />,
      title: "Regulatory Compliance",
      description:
        "Ensures all operations adhere to financial regulations and implement KYC/AML procedures.",
    },
    {
      icon: <AlertTriangle size={24} />,
      title: "Fraud Prevention",
      description:
        "Utilizes advanced security measures and monitoring systems to detect and prevent fraudulent activities.",
    },
  ];

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-indigo-100 to-purple-100 p-6 overflow-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">
        Key Players in P2P Lending
      </h2>

      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="flex-1">
          <PlayerCard
            title="Borrowers"
            icon={<User size={40} />}
            items={borrowers}
          />
        </div>
        <div className="flex-1">
          <PlayerCard
            title="Lenders"
            icon={<Users size={40} />}
            items={lenders}
          />
        </div>
      </div>

      <div className="flex-1">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-6">
            <div className="bg-indigo-100 p-3 rounded-full mr-4">
              <Building2 size={40} />
            </div>
            <h3 className="text-2xl font-semibold text-indigo-700">
              P2P Lending Platforms
            </h3>
          </div>
          <p className="text-gray-600 mb-6">
            P2P lending platforms act as sophisticated intermediaries,
            leveraging technology to connect borrowers with lenders while
            ensuring a secure and efficient lending ecosystem. Their
            multifaceted role encompasses:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {platformOperations.map((operation, index) => (
              <PlatformOperation key={index} {...operation} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EighthSlide;
