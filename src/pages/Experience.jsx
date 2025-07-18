import React from "react";

const Experience = () => {
  return (
    <div className="max-w-3xl mx-auto py-16 px-5">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
          Experience
        </h1>
        <div className="mt-2 w-24 h-1 bg-blue-500 mx-auto rounded-full" />
      </div>

      {/* Experience Cards */}
      <div className="space-y-8">
        {/* MLOps Intern */}
        <div className="border p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            MLOps Intern
          </h2>
          <p className="text-gray-500 dark:text-gray-300">
            EndorseSphere Ventures (Nov 2024 - Jan 2025)
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-300">
            <li>Worked on AI-based job matching system.</li>
            <li>Used NER and cosine similarity for better recommendations.</li>
            <li>Improved algorithm with senior developers.</li>
          </ul>
        </div>

        {/* Research Intern */}
        <div className="border p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Summer Research Intern
          </h2>
          <p className="text-gray-500 dark:text-gray-300">
            MNIT Jaipur (June 2024 - Aug 2024)
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-300">
            <li>Analyzed mammograms using CNNs.</li>
            <li>Compared ResNet, VGG, EfficientNet, etc.</li>
            <li>Achieved 99.1 ROC with MobileNet.</li>
            <li>Co-authored a research paper.</li>
          </ul>
        </div>

        {/* PR Internship */}
        <div className="border p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            PR Internship
          </h2>
          <p className="text-gray-500 dark:text-gray-300">
            Shaagird Foundation, Delhi (June 2024 - Aug 2024)
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-300">
            <li>Networked with donors and partners.</li>
            <li>Led social media campaigns.</li>
            <li>Drafted pitch documents for fundraising.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
