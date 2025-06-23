
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
