"use client";

const WorkExperience = () => {
  const experiences = [
    {
      role: "Data Analyst Consultant",
      company: "Forfend Cybernatics",
      period: "Sep 2022 - Jul 2025",
      type: "Consulting",
      achievements: [
        "Designed and deployed an AI-driven Vehicle Recommendation Platform for automobile showroom kiosks and sales teams, integrating customer inputs with sales, product, and demand data; boosted engagement 60% and conversions 22%",
        "Partnered with sales leadership to turn analytics into optimized promotional campaigns, improving ROI 15%",
        "Built loyalty and expenditure analytics to segment high-value customers, driving targeted discounts that lifted repeat purchases 18% and average transaction value 12%",
        "Developed and maintained a Tableau dashboard tracking campaign progress, success rates, and engagement metrics, enabling rapid, data-driven adjustments",
      ],
    },
    {
      role: "Full Stack Intern",
      company: "Rezolve AI",
      period: "Jan 24 - Feb 24",
      type: "Internship",
      achievements: [
        "Led a team to design and deploy real-time dashboards accessing Azure-hosted financial data for Wipro's BFS delivery vertical, enabling leadership to monitor key metrics for a 230,000+ employee global workforce",
        "Implemented role-based access controls to ensure secure, compliant data visibility across user groups",
        "Streamlined data ingestion workflows, reducing manual reporting time 40% and accelerating decision-making speed 30%",
      ],
    },
    {
      role: "Full Stack Intern",
      company: "Wipro Ltd",
      period: "Jul 2023 - Oct 2023",
      type: "Internship",
      achievements: [
        "Collaborated and developed on an internal portal, utilizing React, Vite, Node.js/Express.js, SQL, and Azure",
        "Significantly enhanced internal resource tracking, project utilization, and data-driven decision-making, boosting operational efficiency",
        "Utilized React to develop a dynamic dashboard frontend. Used Axios for asynchronous data fetching. Used React Navigation for seamless user navigation. Leveraged Bootstrap to create an effective User Interface",
        "Managed the deployment on Azure, ensuring high availability and scalability while integrating Azure Functions for dynamic scaling. The backend utilized MS SQL as the relational database, managed through SQL Server Management Studio",
        "Integrated Role-Based Access Control through Azure Active Directory, ensuring Granular Access Control and secure data access",
      ],
    },
    {
      role: "Data Science Intern",
      company: "Flutura Business Solutions",
      period: "Jun 2022 - Aug 2022",
      type: "Internship",
      achievements: [
        "Specialized in Engineering Workbench (EWB) Data Analytics at Flutura Business Solutions, conducting drone flight data analysis using EWB and Cerebra Solutions, extracting meaningful insights",
        "Analyzed sensor data for drone failure cases using clustering, enhancing expertise in data analytics and digital twin concepts",
        "Researched AR/VR tools, selected Vuforia, and integrated it with Unity to create a Drone AR environment. Simulated swarm scenarios with radar-zone detection and on-click individual drone analysis, showcasing practical skills",
      ],
    },
  ];

  return (
    <section id="workex" className="relative py-20 px-6 cyber-grid-bg">
      <div className="container mx-auto">
        <div className="text-center mb-16 flex flex-col items-center w-full">
          <span className="text-cyber-primary font-mono text-sm tracking-wider">
            {`// PROFESSIONAL JOURNEY`}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-4 mb-4 w-full flex justify-center">
            <span className="text-white">Work</span>{" "}
            <span className="bg-gradient-to-r from-cyber-primary to-cyber-secondary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card p-6 sm:p-8 hover:neon-border transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyber-primary transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-cyber-primary font-semibold mt-1">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-col sm:items-end gap-2">
                  <span className="text-sm font-mono px-3 py-1 bg-cyber-accent/10 text-cyber-accent rounded-full border border-cyber-accent/30 w-fit">
                    {exp.type}
                  </span>
                  <span className="text-sm text-gray-400 font-mono">
                    {exp.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, achIndex) => (
                  <li
                    key={achIndex}
                    className="text-sm text-gray-400 flex items-start leading-relaxed"
                  >
                    <span className="text-cyber-secondary mr-3 mt-1 flex-shrink-0">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
