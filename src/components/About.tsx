
import { Code, Palette, Rocket } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Modern Design",
      description: "Creating beautiful, intuitive interfaces with attention to detail and user experience."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Performance",
      description: "Building fast, optimized applications that deliver exceptional user experiences."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          I’m a developer who enjoys solving real problems with clean, efficient code. 
          I’ve worked across the full stack and have a growing interest in AI and machine learning, especially when it helps automate or simplify things for people. 
          I like building things that are useful, easy to use, and actually make a difference. That’s what keeps me coding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Started as a curious student who fell in love with programming, I've evolved into a 
              full-stack developer who enjoys every aspect of the development process. From planning 
              and designing to coding and deploying, I find joy in crafting digital experiences.
            </p>
            <p className="text-gray-300 leading-relaxed">
            When I’m not coding, I’m usually exploring new technologies, building side projects, or diving into technical blogs and videos. I’m passionate about continuous learning and enjoy staying up to date with the latest industry trends.


            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-4">Quick Facts</h4>
            <ul className="space-y-3 text-gray-300">
                <li>🎓 Master’s in Computer Science (AI/ML)</li>
                <li>💼 End-to-End Product Development Experience</li>
                <li>🌍 Based in the United States</li>
                <li>🧠 Passionate about Clean Code & Debugging</li>
                <li>📚 Lifelong Learner & Tech Explorer</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="text-blue-400 mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;