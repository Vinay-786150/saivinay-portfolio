
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
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

  return (
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
  );
};

export default SkillsSection;
