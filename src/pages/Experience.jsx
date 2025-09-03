import React from "react";
import Bg from "../components/Bg";

const Experience = () => {
  return (
    <div className="dark:bg-black text-black dark:text-white px-4 py-10 min-h-screen">
      <Bg className="relative overflow-visible">
        {/* Section Title */}
        <h1 className="text-3xl font-bold text-center text-black dark:text-white mb-10">
          Experience
        </h1>

        {/* Experience Cards */}
        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            {
              title: "MLOps Intern",
              subtitle: "EndorseSphere Ventures (Nov 2024 – Jan 2025)",
              detail: [
                "Worked on AI-based job matching system.",
                "Used NER and cosine similarity for better recommendations.",
                "Improved algorithm with senior developers.",
              ],
            },
            {
              title: "Summer Research Intern",
              subtitle: "MNIT Jaipur (June 2024 – Aug 2024)",
              detail: [
                "Analyzed mammograms using CNNs.",
                "Compared ResNet, VGG, EfficientNet, etc.",
                "Achieved 99.1 ROC with MobileNet.",
                "Co-authored a research paper.",
              ],
            },
            {
              title: "PR Intern",
              subtitle: "Shaagird Foundation, Delhi (June 2024 – Aug 2024)",
              detail: [
                "Networked with donors and partners.",
                "Led social media campaigns.",
                "Drafted pitch documents for fundraising.",
              ],
            },
          ].map((exp, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-1">{exp.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{exp.subtitle}</p>
              <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-300 space-y-1">
                {exp.detail.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Bg>
    </div>
  );
};

export default Experience;
