
import React from "react";

const Education = () => {
  return (
    <div className="max-w-3xl mx-auto py-10 px-5">
      <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">
        Education
      </h1>
      <div className="space-y-4">
        <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">
            Bachelor of Technology in Electronics and Communication Engineering
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Jamia Millia Islamia, New Delhi (2022-26)
          </p>
          <p className="text-gray-600 dark:text-gray-300">CGPA: 8.56</p>
        </div>
        <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">
            WE Program by Talentsprint (Supported by Google)
          </h2>
          <p className="text-gray-600 dark:text-gray-300">(2023-2025)</p>
          <p className="text-gray-600 dark:text-gray-300">
            Courses included: Data Structures & Algorithms, Full-Stack Web
            Development, Generative AI, Large System Design, Corporate &
            Leadership Skills, and Computational Thinking. <br></br>
            Hands-on projects and mentorship from Google engineers to build
            real-world problem-solving skills.
          </p>
        </div>
        <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Class 12</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Hamdard Public School, New Delhi (2020-21)
          </p>
          <p className="text-gray-600 dark:text-gray-300">Percentage: 92.6%</p>
        </div>
        <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Class 10</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Hamdard Public School, New Delhi (2018-19)
          </p>
          <p className="text-gray-600 dark:text-gray-300">Percentage: 95.5%</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
