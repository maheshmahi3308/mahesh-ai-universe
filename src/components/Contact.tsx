
import { Mail, Linkedin, Github, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "maheshmahi95944@gmail.com",
      href: "mailto:maheshmahi95944@gmail.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "mahesh-a-3308312b4",
      href: "https://linkedin.com/in/mahesh-a-3308312b4"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "maheshmahi3308",
      href: "https://github.com/maheshmahi3308"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's collaborate on innovative AI/ML projects or discuss opportunities in data science and technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, innovative projects, or potential collaborations 
                in AI, machine learning, and data science. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 group"
                  >
                    <div className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{contact.title}</h4>
                      <p className="text-gray-400">{contact.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
              <h4 className="text-xl font-bold text-white mb-3">Open to Opportunities</h4>
              <p className="text-gray-300">
                Looking for internships, full-time positions, or freelance projects in AI/ML, 
                data science, and software development.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Your Name" 
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                />
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                />
              </div>
              <Input 
                placeholder="Subject" 
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
              />
              <Textarea 
                placeholder="Your Message" 
                rows={6}
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 resize-none"
              />
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 py-3 text-lg font-semibold"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-purple-500/20 text-center">
          <p className="text-gray-400">
            © 2024 A. Mahesh. Built with passion for AI & ML innovations.
          </p>
        </div>
      </div>
    </section>
  );
};
