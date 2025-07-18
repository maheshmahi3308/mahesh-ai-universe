
import { Brain, Code, Database, TrendingUp } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI & ML Expertise",
      description: "Specialized in machine learning algorithms and artificial intelligence systems"
    },
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Proficient in Python, C++, SQL, and modern web technologies"
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Experienced in data analysis, visualization, and predictive modeling"
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence",
      description: "Creating insights through data-driven solutions and dashboards"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate B.Tech Computer Science student specializing in AI & ML, 
            with a strong focus on developing intelligent systems that solve real-world problems. 
            My expertise spans across healthcare AI, predictive modeling, and business intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="text-purple-400 mb-4 group-hover:text-pink-400 transition-colors duration-300">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">My Mission</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            To leverage the power of artificial intelligence and machine learning to create innovative solutions 
            that improve healthcare outcomes, enhance business decision-making, and contribute to a more 
            data-driven future. I believe in the transformative potential of technology to solve complex 
            challenges and make a positive impact on society.
          </p>
        </div>
      </div>
    </section>
  );
};
