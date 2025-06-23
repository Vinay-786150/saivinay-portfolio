
import { ArrowDown, ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
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
  );
};

export default HeroSection;
