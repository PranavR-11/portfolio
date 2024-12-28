export default function AboutMe() {
  return (
    <section id="about" className="py-16 px-6 bg-transparent text-gray-300">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-white mb-6">About Me</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          With a strong foundation in computer science from{" "}
          <span className="font-bold text-blue-400">PES University</span>, I’ve
          honed my expertise in Python, full-stack development, and data-driven
          decision-making. Currently pursuing a Master’s in Business Analytics
          at{" "}
          <span className="font-bold text-blue-400">Babson College</span>, I
          bring a unique blend of{" "}
          <span className="font-bold text-blue-400">technical expertise</span>{" "}
          and <span className="font-bold text-blue-400">business acumen</span>,
          enabling me to bridge the gap between cutting-edge technology and
          strategic business insights. My hands-on experience includes
          developing scalable applications, designing innovative analytics
          solutions, and collaborating on projects that leverage data to drive
          impactful outcomes. Passionate about creating meaningful change, I
          aim to contribute to projects and teams by harnessing the power of
          technology and analytics to solve real-world problems and unlock new
          opportunities.
        </p>
        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-8">
          <div>
            <h3 className="font-semibold text-xl text-white mb-2">Name</h3>
            <p>Pranav Rao Rebala</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-white mb-2">Email</h3>
            <p>
              <a
                href="mailto:prebala1@babson.edu"
                className="text-blue-400 hover:underline"
              >
                prebala1@babson.edu
              </a>
            </p>
            <p>
              <a
                href="mailto:pranav.rebala11@gmail.com"
                className="text-blue-400 hover:underline"
              >
                pranav.rebala11@gmail.com
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-white mb-2">Languages</h3>
            <p>English, Hindi, Telugu, Kannada</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-8">
          <div>
            <h3 className="font-semibold text-xl text-white mb-2">
              Nationality
            </h3>
            <p>American</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-white mb-2">Phone</h3>
            <p>
              <a href="tel:+16179871268" className="text-blue-400 hover:underline">
                +1 (617) 987-1268
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}