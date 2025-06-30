import { useState, useEffect, useRef } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: "Java", level: 92, color: "from-yellow-200 to-yellow-400" },
    { name: "Spring Boot", level: 90, color: "from-green-200 to-green-400" },
    { name: "React & TypeScript", level: 88, color: "from-blue-200 to-indigo-400" },
    { name: "Node.js", level: 85, color: "from-green-100 to-green-300" },
    { name: "SQL & PostgreSQL", level: 87, color: "from-blue-100 to-purple-300" },
    { name: "REST APIs & Microservices", level: 90, color: "from-pink-200 to-purple-300" },
    { name: "Python", level: 80, color: "from-yellow-100 to-orange-300" },
    { name: "Tailwind CSS", level: 85, color: "from-pink-100 to-purple-300" }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I specialize in backend and full-stack development, combining scalable APIs with modern UI frameworks to deliver reliable and performant applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                    transitionDelay: `${index * 100}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Git", "Jenkins", "Docker", "Kubernetes", "AWS", "C#",
              "MongoDB", "ChromaDB", "LangChain", "Vite", "Angular", "Figma"
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-gray-300 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
