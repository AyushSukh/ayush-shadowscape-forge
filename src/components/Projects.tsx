import { useState } from 'react';
import { ExternalLink, Github, Play, Zap, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import tradingBotImage from '@/assets/project-trading-bot.jpg';
import ecommerceImage from '@/assets/project-ecommerce.jpg';
import portfolioImage from '@/assets/project-portfolio.jpg';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
  featured: boolean;
  icon: any;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 'zerodha-ai',
      title: 'Zerodha AI Trading Bot',
      description: 'Intelligent algorithmic trading system powered by LLMs and real-time market analysis',
      longDescription: 'A sophisticated trading bot that leverages Large Language Models for market sentiment analysis and automated trading decisions. Integrates with Zerodha APIs for real-time market data and executes trades based on advanced machine learning algorithms.',
      image: tradingBotImage,
      technologies: ['Python', 'LangChain', 'FastAPI', 'PostgreSQL', 'Machine Learning'],
      githubUrl: 'https://github.com/ayushsukhwal',
      liveUrl: 'https://demo.example.com',
      category: 'ai',
      featured: true,
      icon: Zap
    },
    {
      id: 'ecommerce-recommender',
      title: 'E-commerce Recommender',
      description: 'Advanced ML-powered product recommendation engine with real-time personalization',
      longDescription: 'A scalable recommendation system that analyzes user behavior, purchase history, and product features to provide personalized recommendations. Built with collaborative filtering and content-based algorithms for optimal performance.',
      image: ecommerceImage,
      technologies: ['Python', 'Pandas', 'NumPy', 'React', 'PostgreSQL'],
      githubUrl: 'https://github.com/ayushsukhwal',
      liveUrl: 'https://demo.example.com',
      category: 'ml',
      featured: true,
      icon: ShoppingCart
    },
    {
      id: 'portfolio-website',
      title: 'Portfolio Website',
      description: 'Futuristic dark-themed portfolio showcasing cutting-edge web technologies',
      longDescription: 'A modern, responsive portfolio website built with React and advanced CSS techniques. Features glassmorphism effects, smooth animations, and a cyberpunk aesthetic that reflects the digital age.',
      image: portfolioImage,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/ayushsukhwal',
      liveUrl: 'https://ayushsukhwal.dev',
      category: 'web',
      featured: false,
      icon: User
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'web', name: 'Web Development' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="text-muted-foreground">FEATURED</span>{' '}
            <span className="neon-text">PROJECTS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions that bridge the gap between cutting-edge technology and real-world impact
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`glass px-6 py-3 rounded-full font-space font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'neon-border text-primary'
                  : 'border-glass-border hover:border-primary/50 text-muted-foreground hover:text-primary'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer ${
                project.featured ? 'lg:col-span-2 xl:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="glass-intense rounded-2xl overflow-hidden hover-lift hover-glow transition-all duration-500">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  {/* Project Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="glass px-3 py-1 rounded-full text-xs font-space text-primary border border-primary/30">
                      {categories.find(c => c.id === project.category)?.name}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-orbitron font-bold">
                        FEATURED
                      </span>
                    </div>
                  )}

                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                      <Button size="sm" className="glass neon-border">
                        <Play className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <project.icon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-orbitron font-bold text-foreground">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded font-space"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs text-primary">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="glass border-glass-border hover:border-primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank');
                      }}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary-glow"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.liveUrl, '_blank');
                        }}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-intense p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold mb-4 text-foreground">
              Want to see more?
            </h3>
            <p className="text-muted-foreground mb-6">
              These are just a few highlights. Check out my GitHub for more projects and contributions.
            </p>
            <Button className="bg-primary hover:bg-primary-glow neon-border">
              <Github className="w-4 h-4 mr-2" />
              View All Projects
            </Button>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    </section>
  );
};

export default Projects;