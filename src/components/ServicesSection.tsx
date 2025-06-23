
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
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
  );
};

export default ServicesSection;
