
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PortfolioSection = () => {
  return (
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
  );
};

export default PortfolioSection;
