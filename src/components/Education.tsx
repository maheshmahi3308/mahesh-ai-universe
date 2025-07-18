
import { GraduationCap, Calendar, Award } from "lucide-react";

export const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science (AI & ML)",
      institution: "SVCE",
      duration: "2022 - 2026",
      grade: "CGPA: 8.0",
      status: "Pursuing",
      description: "Specializing in Artificial Intelligence and Machine Learning with focus on practical applications in healthcare and business intelligence."
    },
    {
      degree: "Intermediate Education",
      institution: "Sri Chaitanya Junior College",
      duration: "2020 - 2022",
      grade: "80%",
      status: "Completed",
      description: "Strong foundation in Mathematics, Physics, and Chemistry with emphasis on analytical thinking."
    },
    {
      degree: "High School Education",
      institution: "ZPHS Peddamandyam",
      duration: "2019 - 2020",
      grade: "86%",
      status: "Completed",
      description: "Comprehensive secondary education with excellent academic performance across all subjects."
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Academic journey focused on computer science, artificial intelligence, and machine learning
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content Card */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-center gap-3 mb-4">
                      <GraduationCap className="text-purple-400" size={24} />
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        edu.status === 'Pursuing' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <h4 className="text-lg text-purple-400 mb-3">{edu.institution}</h4>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award size={16} />
                        <span>{edu.grade}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
