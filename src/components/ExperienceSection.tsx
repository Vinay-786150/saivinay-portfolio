
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ExperienceSection = () => {
  return (
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
  );
};

export default ExperienceSection;
