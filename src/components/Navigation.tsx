
import { useState, useEffect } from 'react';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navigation = ({ activeSection, scrollToSection }: NavigationProps) => {
  return (
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
  );
};

export default Navigation;
