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
          {[{
              title: "Consultant (Data and Research)",
              subtitle: "The London School of Economics and Political Science (Nov’25 – Present)",
              detail: [
                "Working as a Data Science Consultant on an LSE-led project examining the impact of electrification on development outcomes in Bihar, India.",
              ]
          },
            {
              title: "Associate — Applied Research",
              subtitle: "PROTO (Sept’25 – Nov’25)",
              detail: [
                "Research prototyping and development for data-driven journalism, contributing to projects at the intersection of NLP & data analytics.",
                "Migrating large-scale content infrastructure from Drupal CMS to Ghost CMS with the journal’s web platform currently operating across 80+ countries.",
                "Developed an Airtable to Ghost content automation pipeline using a custom FastAPI server, deployed on Render."
              ],
          },
            {
            title: "Machine Learning Research Intern",
              subtitle: "UiT – The Arctic University of Norway (June 2025 – Sept 2025)",
              detail: [
                "Worked on developing adaptive deep learning models for streaming data, gaining practical exposure to online learning and neural networks.",
                "Built modular Python–PyTorch pipelines for training and evaluation, reinforcing analytical and problem-solving skills."
              ],
          },
            {title: "Data Science Research Intern",
              subtitle: "Jamia Millia Islamia (May 2025 – July 2025)",
              detail: [
                "Conducted a data-driven study on urban traffic congestion in Delhi using Python for data analysis, text mining, and visualization.",
                "Worked with social media data, applying TF-IDF, clustering, and geospatial analysis to identify city-wide traffic patterns.",
                "Paper accepted for presentation at IEEE DELCON 2025, forthcoming in IEEE Xplore.",
              ],},
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
