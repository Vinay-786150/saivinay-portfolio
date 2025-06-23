import { useState, useEffect } from 'react';
import { ArrowDown, ArrowRight, Download, ExternalLink, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'services', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const templateParams = {
      from_name: formData.get('name') as string,
      from_email: formData.get('email') as string,
      message: formData.get('message') as string,
      to_name: 'Paila Saivinay',
    };

    try {
      await emailjs.send(
        'service_90ms28l', // Your service ID
        'template_onndjkv', // Your template ID
        templateParams,
        'd8qydAXymWx7R2EK4' // Your public key
      );
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const skills = [
    { name: 'Java', category: 'Programming' },
    { name: 'Python', category: 'Programming' },
    { name: 'JavaScript', category: 'Programming' },
    { name: 'HTML', category: 'Web Development' },
    { name: 'CSS', category: 'Web Development' },
    { name: 'React.js', category: 'Web Development' },
    { name: 'Node.js', category: 'Web Development' },
    { name: 'Express.js', category: 'Web Development' },
    { name: 'SQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Git', category: 'Tools' },
    { name: 'GitHub', category: 'Tools' },
    { name: 'Jira', category: 'Tools' },
    { name: 'Slack', category: 'Tools' }
  ];

  const services = [
    {
      title: 'Web Design',
      description: 'Professional and modern web design services using React, Node.js, and responsive frameworks, tailored to client needs.',
      icon: '🎨'
    },
    {
      title: 'Full Stack Development',
      description: 'End-to-end web application development with modern technologies and best practices.',
      icon: '💻'
    },
    {
      title: 'Machine Learning',
      description: 'Data analysis and machine learning solutions for real-world problems and business insights.',
      icon: '🤖'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Paila Saivinay
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'skills', 'services', 'portfolio', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 hover:text-cyan-400 ${
                    activeSection === section ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1">
              <img 
                src="/lovable-uploads/1e39e79a-8a56-45ba-a6d4-3e4fd914ad91.png" 
                alt="Paila Saivinay"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Paila Saivinay
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Energetic Full Stack Developer with a Drive for Impactful Solutions
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Computer Science student passionate about creating innovative web solutions and exploring machine learning applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                View Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Contact Me
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-cyan-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Energetic and results-driven professional with a strong work ethic and excellent communication skills. 
                Aiming to secure a challenging position in a progressive company where I can leverage my technical skills 
                to deliver impactful solutions and achieve continuous growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Full Stack Development Enthusiast</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Machine Learning Explorer</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Problem Solving Oriented</span>
                </div>
              </div>
            </div>
            <Card className="bg-slate-700/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-cyan-400">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">B.Tech in Computer Science and Engineering</h3>
                  <p className="text-gray-300">Raghu Engineering College, Visakhapatnam</p>
                  <p className="text-gray-400">2021 – 2025</p>
                  <p className="text-cyan-400 font-semibold">Grade: 8.65/10</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
          </div>
          <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-400">Full Stack Developer Intern</CardTitle>
              <CardDescription className="text-lg text-gray-300">
                SkillDzire • May 2024 – July 2024
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Managed complex IT projects with a focus on timing, functionality, and cost efficiency</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <span>Created project presentations and reports for senior staff</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <span>Explored new technologies and approaches to streamline processes</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Badge 
                  variant="outline" 
                  className="w-full p-3 text-center border-slate-600 hover:border-cyan-400 bg-slate-700/50 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {skill.name}
                  </span>
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-cyan-400 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Portfolio
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
          </div>
          <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl text-cyan-400 mb-2">
                    Credit Card Fraud Detection
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    2024 – Present
                  </CardDescription>
                </div>
                <ExternalLink className="h-6 w-6 text-gray-400 hover:text-cyan-400 transition-colors duration-200" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                Developed a machine learning model to detect fraudulent transactions in real-time using advanced 
                preprocessing techniques and feature engineering on large datasets.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span>Preprocessed large datasets and engineered relevant features</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <span>Trained models: Logistic Regression, Decision Trees, Random Forest, Neural Networks</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <span>Focused on model evaluation and real-world applicability</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Python', 'Machine Learning', 'Data Analysis', 'Neural Networks'].map((tech) => (
                  <Badge key={tech} variant="outline" className="border-cyan-400 text-cyan-400">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-cyan-400" />
                    <span className="text-gray-300">+91-7780356354</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-cyan-400" />
                    <a href="mailto:saivinayreddy786@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                      saivinayreddy786@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Linkedin className="h-6 w-6 text-cyan-400" />
                    <a 
                      href="https://www.linkedin.com/in/sai-vinay-reddy-4750aa251/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Github className="h-6 w-6 text-cyan-400" />
                    <a 
                      href="https://github.com/Vinay-786150" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                    >
                      GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyan-400">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <Input 
                    name="name"
                    placeholder="Your Name" 
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400"
                    required
                  />
                  <Input 
                    name="email"
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400"
                    required
                  />
                  <Textarea 
                    name="message"
                    placeholder="Your Message" 
                    rows={4}
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400"
                    required
                  />
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Paila Saivinay. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating Social Icons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
        <a 
          href="https://github.com/Vinay-786150" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-all duration-300 hover:scale-110"
        >
          <Github className="h-6 w-6 text-white" />
        </a>
        <a 
          href="https://www.linkedin.com/in/sai-vinay-reddy-4750aa251/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 hover:scale-110"
        >
          <Linkedin className="h-6 w-6 text-white" />
        </a>
      </div>
    </div>
  );
};

export default Index;
