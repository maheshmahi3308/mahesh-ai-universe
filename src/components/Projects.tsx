
import { ExternalLink, Github, TrendingUp, Heart, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Projects = () => {
  const projects = [
    {
      title: "Liver Cirrhosis Prediction System",
      description: "AI-powered healthcare solution using Random Forest and Scikit-learn to predict liver disease with 85%+ accuracy. Features comprehensive performance metrics including ROC curves and confusion matrices.",
      icon: Heart,
      technologies: ["Python", "Random Forest", "Scikit-learn", "Data Analysis"],
      features: ["85%+ Accuracy", "ROC Curve Analysis", "Confusion Matrix", "Performance Metrics"],
      gradient: "from-red-500/20 to-pink-500/20",
      borderGradient: "from-red-500/50 to-pink-500/50"
    },
    {
      title: "SwaRakshaAI – Healthcare Chatbot",
      description: "Intelligent healthcare chatbot powered by Gemini AI and NLP for symptom analysis. Built with Streamlit for deployment in low-resource environments.",
      icon: Heart,
      technologies: ["Gemini AI", "NLP", "Streamlit", "Python"],
      features: ["Symptom Analysis", "AI-Powered", "Low Resource Design", "User-Friendly Interface"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderGradient: "from-blue-500/50 to-cyan-500/50"
    },
    {
      title: "Mobile Market Analysis Dashboard",
      description: "Comprehensive Power BI dashboard analyzing customer behavior, pricing trends, and ratings. Provides actionable insights for mobile product strategy and market positioning.",
      icon: Smartphone,
      technologies: ["Power BI", "Data Analysis", "Business Intelligence", "SQL"],
      features: ["Customer Behavior Analysis", "Pricing Strategy", "Market Insights", "Interactive Dashboards"],
      gradient: "from-purple-500/20 to-indigo-500/20",
      borderGradient: "from-purple-500/50 to-indigo-500/50"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative solutions combining AI, machine learning, and data science to solve real-world challenges
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index}
                className="bg-slate-800/90 border border-slate-700/50 hover:border-purple-500/50 backdrop-blur-sm relative overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
                      <Icon size={28} />
                    </div>
                    <CardTitle className="text-white text-xl font-semibold">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-400 mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary" 
                          className="bg-slate-700/50 text-gray-300 text-xs py-1 border border-slate-600/50"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-400 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge 
                          key={idx} 
                          className="bg-purple-500/20 text-purple-300 border border-purple-500/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 flex-1"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
