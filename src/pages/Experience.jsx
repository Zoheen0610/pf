import React from "react";

const Experience = () => {
  return (
    <div className="max-w-3xl mx-auto py-10 px-5">
      <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">
        Experience
      </h1>
      <div className="space-y-6">
        {/* MLOps Intern */}
        <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">MLOps Intern</h2>
          <p className="text-gray-600 dark:text-gray-300">
            EndorseSphere Ventures Private Limited (Nov 2024 - Jan 2025)
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-300">
            <li>
              Contributed to the development of an AI-driven job matching system
              as part of a team.
            </li>
            <li>
              Worked on implementing Named Entity Recognition (NER) and cosine
              similarity to improve job-to-candidate recommendations.
            </li>
            <li>
              Collaborated with senior team members to refine the algorithm for
              better accuracy and efficiency.
            </li>
          </ul>
        </div>

        {/* Summer Research Intern */}
        <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Summer Research Intern</h2>
          <p className="text-gray-600 dark:text-gray-300">
            MNIT Jaipur (June 2024 - Aug 2024)
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-300">
            <li>
              Conducted research on digital mammogram image analysis using CNNs.
            </li>
            <li>
              Compared 10 CNN models (ResNet, VGG, EfficientNet, etc.) for tumor
              classification.
            </li>
            <li>
              Achieved 99.1 ROC score with MobileNet for breast cancer
              detection.
            </li>
          </ul>
        </div>

        {/* PR Internship */}
        <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">PR Internship</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Shaagird Foundation, Delhi (June 2024 - Aug 2024)
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-300">
            <li>
              Assisted in networking and collaboration efforts with potential
              donors and partners.
            </li>
            <li>
              Worked on social media campaigns and outreach materials to enhance
              visibility.
            </li>
            <li>
              Helped in preparing pitch documents to support fundraising
              initiatives.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
