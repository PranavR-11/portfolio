const skills = [
  {
    name: "HTML5",
    icon: <i className="fab fa-html5 text-orange-600 text-4xl"></i>,
  },
  {
    name: "CSS3",
    icon: <i className="fab fa-css3-alt text-blue-600 text-4xl"></i>,
  },
  {
    name: "JavaScript",
    icon: <i className="fab fa-js text-yellow-500 text-4xl"></i>,
  },
  {
    name: "Python",
    icon: <i className="fab fa-python text-blue-400 text-4xl"></i>,
  },
  {
    name: "React",
    icon: <i className="fab fa-react text-blue-500 text-4xl"></i>,
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 54 33"
        role="img"
        aria-label="Tailwind CSS"
        className="w-10 h-10 fill-current text-green-400 mx-auto"
      >
        <path d="M27 0c-6.556 0-10.89 3.555-13 10.667 2.623-3.556 5.545-4.667 8.778-3.333 1.778.778 3.223 2.444 4.667 4.333C30.556 17.555 33.89 22 41 22c6.556 0 10.89-3.556 13-10.667C51.377 14.89 48.455 16 45.222 14.667c-1.778-.778-3.222-2.444-4.667-4.333C37.444 5.445 34.11 1 27 1zm-16 10C4.444 10 .11 13.556 0 20.667 2.622 17.11 5.545 16 8.778 17.333c1.778.778 3.222 2.444 4.667 4.333C16.556 27.556 19.89 32 27 32c6.556 0 10.89-3.556 13-10.667-2.622 3.556-5.544 4.667-8.778 3.333-1.778-.778-3.222-2.444-4.667-4.333C23.444 15.444 20.11 11 13 11z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: <i className="fab fa-node-js text-green-600 text-4xl"></i>,
  },
  {
    name: "C/C++",
    icon: <i className="fas fa-code text-blue-500 text-4xl"></i>,
  },
  {
    name: "SQL",
    icon: <i className="fas fa-database text-purple-600 text-4xl"></i>,
  },
  {
    name: "PHP",
    icon: <i className="fab fa-php text-indigo-600 text-4xl"></i>,
  },
  {
    name: "Deluge",
    icon: <i className="fas fa-stream text-green-500 text-4xl"></i>,
  },
  {
    name: "R",
    icon: <i className="fas fa-chart-line text-blue-600 text-4xl"></i>,
  },
  {
    name: "MongoDB",
    icon: <i className="fas fa-leaf text-green-600 text-4xl"></i>,
  },
  {
    name: "Docker",
    icon: <i className="fab fa-docker text-blue-500 text-4xl"></i>,
  },
  {
    name: "Azure",
    icon: <i className="fab fa-microsoft text-blue-400 text-4xl"></i>,
  },
  {
    name: "AWS",
    icon: <i className="fab fa-aws text-orange-600 text-4xl"></i>,
  },
  {
    name: "Jupyter",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        role="img"
        aria-label="Jupyter"
        className="w-10 h-10 fill-current text-orange-500 mx-auto"
      >
        <circle cx="12" cy="12" r="12" />
      </svg>
    ),
  },
  {
    name: "Numpy",
    icon: <i className="fas fa-cube text-blue-500 text-4xl"></i>,
  },
  {
    name: "Pandas",
    icon: <i className="fas fa-table text-gray-500 text-4xl"></i>,
  },
  {
    name: "Matlab",
    icon: <i className="fas fa-square-root-alt text-red-500 text-4xl"></i>,
  },
  {
    name: "Tableau",
    icon: <i className="fas fa-chart-bar text-blue-400 text-4xl"></i>,
  },
];

export default function Skills() {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white" id="skills">
      <h2 className="text-5xl font-extrabold text-center mb-8">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-7 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300"
            role="img"
            aria-label={skill.name}
          >
            <div className="mb-4">{skill.icon}</div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}