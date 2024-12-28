import React from "react";

const WorkExperience = () => {
  return (
    <section id="work" className="py-20 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Work Experience</h2>
      <div className="grid grid-cols-1 gap-8 px-4 max-w-3xl mx-auto">
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-2">Full Stack Intern</h3>
          <p className="text-blue-400 mb-1">Rezolve AI</p>
          <p className="text-sm text-gray-400">Jan 24 - Feb 24</p>
          <p className="mt-4 text-gray-300">
            • Implemented branch-per-ticket strategy for efficient code
            management based on a React application. <br />
            • Executed multiple UI changes with a focus on Tailwind CSS. <br />
            • Merged branches, pushed changes to Atlassian Bitbucket, and
            initiated Pull Requests for streamlined collaboration.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-2">Full Stack Intern</h3>
          <p className="text-blue-400 mb-1">Wipro Ltd</p>
          <p className="text-sm text-gray-400">Jul 2023 - Oct 2023</p>
          <p className="mt-4 text-gray-300">
            • Collaborated and developed on an internal portal, utilizing React,
            Vite, Node.js/Express.js, SQL, and Azure. <br />
            • Significantly enhanced internal resource tracking, project
            utilization, and data-driven decision-making, boosting operational
            efficiency. <br />
            • Utilized React to develop a dynamic dashboard frontend. Used Axios
            for asynchronous data fetching. Used React Navigation for seamless
            user navigation. Leveraged Bootstrap to create an effective User
            Interface. <br />
            • Managed the deployment on Azure, ensuring high availability and
            scalability while integrating Azure Functions for dynamic scaling.
            The backend utilized MS SQL as the relational database, managed
            through SQL Server Management Studio. <br />
            • Integrated Role-Based Access Control through Azure Active
            Directory, ensuring Granular Access Control and secure data access.{" "}
            <br />
            • Significantly improved operational efficiency and implemented
            robust financial tracking in the portal.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-2">App Developer Intern</h3>
          <p className="text-blue-400 mb-1">Forfend Cybernatics</p>
          <p className="text-sm text-gray-400">Jun 2023 - Jul 2023</p>
          <p className="mt-4 text-gray-300">
            • Utilized advanced low-code development skills in Zoho Creator to architect, develop, and deploy a "Mining Management System" (MMS) with QR-code-based route tracking, showcasing expertise in rapid application development and logistics optimization. <br />
            • Leveraged Deluge scripting within Zoho Creator to implement custom validations, workflows, and automations tailored to the specific requirements of the system. <br />
            • MMS was further developed using React and employed React Router, Axios, and Bootstrap for seamless user experience. React Hook Form ensured efficient form handling, and Vite streamlined development. Used Git for facilitating version control for project management. <br />
            • Successfully deployed and managed the MMS on AWS EC2 instances, optimizing cost-efficiency and ensuring high availability for seamless operations in a cloud environment. <br />
            • The MMS effectively reduced transportation delays and costs, enhancing logistics efficiency. Its potential for wider industry adoption promises increased revenue, bolstering the company’s market presence and overall profitability.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-2">Data Science Intern</h3>
          <p className="text-blue-400 mb-1">Flutura Business Solutions</p>
          <p className="text-sm text-gray-400">Jun 2022 - Aug 2022</p>
          <p className="mt-4 text-gray-300">
            • Specialized in Engineering Workbench (EWB) Data Analytics at Flutura Business Solutions, conducting drone flight data analysis using EWB and Cerebra Solutions, extracting meaningful insights. <br />
            • Analyzed sensor data for drone failure cases using clustering, enhancing expertise in data analytics and digital twin concepts. <br />
            • Researched AR/VR tools, selected Vuforia, and integrated it with Unity to create a Drone AR environment. Simulated swarm scenarios with radar-zone detection and on-click individual drone analysis, showcasing practical skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;