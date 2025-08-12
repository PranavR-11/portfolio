import React from "react";

const WorkExperience = () => {
  return (
    <section id="work" className="py-20 bg-gray-900 text-white">
      <h2 className="text-5xl font-bold text-center mb-10">Work Experience</h2>
      <div className="grid grid-cols-1 gap-8 px-4 max-w-3xl mx-auto">
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-2">Data Analyst Consultant</h3>
          <p className="text-blue-400 mb-1">Forfend Cybernatics</p>
          <p className="text-sm text-gray-400">Sep 2022 - Jul 2025</p>
          <p className="mt-4 text-gray-300">
            &bull; Designed and deployed an AI-driven Vehicle Recommendation Platform for automobile showroom kiosks and sales teams,
            integrating customer inputs with sales, product, and demand data; boosted engagement 60% and conversions 22%.<br />
            &bull; Partnered with sales leadership to turn analytics into optimized promotional campaigns, improving ROI 15%<br />
            &bull; Built loyalty and expenditure analytics to segment high-value customers, driving targeted discounts that lifted repeat purchases
            18% and average transaction value 12%<br />
            &bull; Developed and maintained a Tableau dashboard tracking campaign progress, success rates, and engagement metrics, enabling
            rapid, data-driven adjustments.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-2">Full Stack Intern</h3>
          <p className="text-blue-400 mb-1">Rezolve AI</p>
          <p className="text-sm text-gray-400">Jan 24 - Feb 24</p>
          <p className="mt-4 text-gray-300">
            &bull; Led a team to design and deploy real-time dashboards accessing Azure-hosted financial data forWipro’s BFS delivery vertical,
            enabling leadership to monitor key metrics for a 230,000+ employee global workforce. <br />
            &bull; Implemented role-based access controls to ensure secure, compliant data visibility across user groups. <br />
            &bull; Streamlined data ingestion workflows, reducing manual reporting time 40% and accelerating decision-making speed 30%.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-2">Full Stack Intern</h3>
          <p className="text-blue-400 mb-1">Wipro Ltd</p>
          <p className="text-sm text-gray-400">Jul 2023 - Oct 2023</p>
          <p className="mt-4 text-gray-300">
            &bull; Collaborated and developed on an internal portal, utilizing React,
            Vite, Node.js/Express.js, SQL, and Azure. <br />
            &bull; Significantly enhanced internal resource tracking, project
            utilization, and data-driven decision-making, boosting operational
            efficiency. <br />
            &bull; Utilized React to develop a dynamic dashboard frontend. Used Axios
            for asynchronous data fetching. Used React Navigation for seamless
            user navigation. Leveraged Bootstrap to create an effective User
            Interface. <br />
            &bull; Managed the deployment on Azure, ensuring high availability and
            scalability while integrating Azure Functions for dynamic scaling.
            The backend utilized MS SQL as the relational database, managed
            through SQL Server Management Studio. <br />
            &bull; Integrated Role-Based Access Control through Azure Active
            Directory, ensuring Granular Access Control and secure data access. <br />
            &bull; Significantly improved operational efficiency and implemented
            robust financial tracking in the portal.
          </p>
        </div>

        <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-2">Data Science Intern</h3>
          <p className="text-blue-400 mb-1">Flutura Business Solutions</p>
          <p className="text-sm text-gray-400">Jun 2022 - Aug 2022</p>
          <p className="mt-4 text-gray-300">
            &bull; Specialized in Engineering Workbench (EWB) Data Analytics at Flutura Business Solutions, conducting drone flight data analysis using EWB and Cerebra Solutions, extracting meaningful insights. <br />
            &bull; Analyzed sensor data for drone failure cases using clustering, enhancing expertise in data analytics and digital twin concepts. <br />
            &bull; Researched AR/VR tools, selected Vuforia, and integrated it with Unity to create a Drone AR environment. Simulated swarm scenarios with radar-zone detection and on-click individual drone analysis, showcasing practical skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
