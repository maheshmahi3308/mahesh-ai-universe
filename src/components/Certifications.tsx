
import { Award, ExternalLink, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Certifications = () => {
  const certifications = [
    {
      title: "Python for Data Analytics",
      issuer: "L&T EduTech",
      description: "Comprehensive certification covering Python programming for data analysis, including pandas, NumPy, and data visualization techniques.",
      skills: ["Python", "Data Analysis", "Pandas", "NumPy", "Matplotlib"],
      verified: true,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      issuer: "L&T EduTech",
      description: "Advanced certification in AI/ML fundamentals, supervised/unsupervised learning, and practical implementation of machine learning algorithms.",
      skills: ["Machine Learning", "AI", "Scikit-learn", "Deep Learning", "Model Evaluation"],
      verified: true,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "CS50's Introduction to Data Science",
      issuer: "Harvard University",
      description: "Prestigious Harvard certification covering statistical analysis, data visualization, and machine learning with Python and R.",
      skills: ["Data Science", "Statistics", "R", "Python", "Research Methods"],
      verified: true,
      gradient: "from-red-500/20 to-orange-500/20"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional certifications from leading institutions validating expertise in AI, ML, and data science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className={`bg-gradient-to-br ${cert.gradient} backdrop-blur-sm border border-purple-500/30 relative overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25`}
            >
              <div className="absolute inset-[1px] bg-slate-900/90 rounded-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Award className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300" size={28} />
                    {cert.verified && (
                      <div className="flex items-center gap-1 bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs border border-green-500/30">
                        <CheckCircle size={12} />
                        <span>Verified</span>
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-white text-lg leading-tight">{cert.title}</CardTitle>
                  <CardDescription className="text-purple-400 font-medium">{cert.issuer}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {cert.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-400 mb-3">Skills Covered</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <Badge 
                          key={idx} 
                          className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs hover:bg-purple-500/30 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-md hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20 max-w-2xl mx-auto backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
            <p className="text-gray-300 leading-relaxed">
              Committed to staying updated with the latest developments in AI, ML, and data science through 
              continuous professional development and industry-recognized certifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
