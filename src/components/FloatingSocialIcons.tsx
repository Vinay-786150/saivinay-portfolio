
import { Github, Linkedin } from 'lucide-react';

const FloatingSocialIcons = () => {
  return (
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
  );
};

export default FloatingSocialIcons;
