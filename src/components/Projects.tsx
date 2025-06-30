
import { Github, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Product Recommender",
      description: "A scalable product recommendation system using FastAPI, PySpark, and AWS Lambda. Features real-time recommendations, automated model retraining with Airflow, and a REST API for seamless integration.",
      image: "https://plus.unsplash.com/premium_photo-1682310539039-1a65c8fc0b4a?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["FastAPI", "PySpark", "AWS Lambda", "Airflow", "Streamlit", "Machine Learning", "Recommendation System", "REST API"],
      github: "https://github.com/Ruhaizi/Product-Recommender",
    //   live: "https://example.com"
    },
    {
      title: "Codebase_QA_Chatbot",
      description: "A code-aware chatbot that answers natural language questions about your codebase using semantic search and generative AI, with an interactive Streamlit interface.",
      image: "https://images.unsplash.com/photo-1615525137689-198778541af6?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Python", "LangChain", "Hugging Face", "Streamlit", "ChromaDB", "LLM", "RAG", "SentenceTransformers"],
      github: "https://github.com/Ruhaizi/Codebase_QA_Chatbot",
    //   live: "https://example.com"
    },
    {
      title: "Full Stack Crypto Trading Platform",
      description: "A full stack cryptocurrency trading platform with real-time market data and an integrated AI chatbot for personalized user interaction and seamless trading experience.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["JavaScript", "React", "Node.js", "TypeScript", "Gemini API", "AI Chatbot"],
      github: "https://github.com/Ruhaizi/Crypto_trading",
      live: "https://example.com"
    },
    {
      title: "Cold Email Generator with GenAI",
      description: "A GenAI-powered tool that generates personalized cold emails for software and AI firms using semantic search, retrieval-augmented generation, and a scalable modular pipeline.",
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Python", "Llama 3.1", "LangChain", "ChromaDB", "Generative AI"],
      github: "https://github.com/Ruhaizi/Cold-Email-Generator-with-GenAI",
      live: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  {/* <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Ruhaizi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
          >
            <Eye size={20} />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;