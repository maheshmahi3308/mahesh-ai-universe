
import { Code, Database, Brain, Wrench } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 85 },
        { name: "SQL", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "HTML/CSS", level: 80 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: [
        { name: "Scikit-learn", level: 85 },
        { name: "Pandas", level: 90 },
        { name: "TensorFlow", level: 75 },
        { name: "Data Analysis", level: 88 },
        { name: "Predictive Modeling", level: 82 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: [
        { name: "Power BI", level: 85 },
        { name: "Streamlit", level: 80 },
        { name: "Matplotlib", level: 85 },
        { name: "Git", level: 80 },
        { name: "Jupyter", level: 88 }
      ]
    },
    {
      title: "Data & Analytics",
      icon: Database,
      skills: [
        { name: "Data Science", level: 88 },
        { name: "Business Intelligence", level: 82 },
        { name: "Statistical Analysis", level: 85 },
        { name: "Data Visualization", level: 87 },
        { name: "Database Design", level: 78 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across AI/ML, data science, and full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-purple-400">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-purple-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-slate-700"
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
