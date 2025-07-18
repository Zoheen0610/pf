import React from "react";

const Education = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-pink-100 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white px-4 py-10 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-black dark:text-white mb-10">
        Education
      </h1>
      <div className="space-y-6 max-w-3xl mx-auto">
        {[
          {
            title:
              "Bachelor of Technology in Electronics and Communication Engineering",
            subtitle: "Jamia Millia Islamia, New Delhi (2022–26)",
            detail: "CGPA: 8.56",
          },
          {
            title: "WE Program by Talentsprint (Supported by Google)",
            subtitle: "(2023–2025)",
            detail:
              "Courses: DSA, Full-Stack, Generative AI, System Design, Leadership. Includes real-world projects and Google mentorship.",
          },
          {
            title: "Class 12",
            subtitle: "Hamdard Public School, New Delhi (2020–21)",
            detail: "Percentage: 92.6%",
          },
          {
            title: "Class 10",
            subtitle: "Hamdard Public School, New Delhi (2018–19)",
            detail: "Percentage: 95.5%",
          },
        ].map((edu, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-1">{edu.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{edu.subtitle}</p>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              {edu.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
