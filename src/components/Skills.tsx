import { useState } from 'react';
import { Code2, Database, Cpu, Wrench } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', name: 'All', icon: Cpu },
    { id: 'languages', name: 'Languages', icon: Code2 },
    { id: 'data', name: 'Data & ML', icon: Database },
    { id: 'tools', name: 'Tools & Frameworks', icon: Wrench }
  ];

  const skills: Skill[] = [
    // Languages
    { name: 'Python', level: 95, category: 'languages' },
    { name: 'C++', level: 90, category: 'languages' },
    { name: 'JavaScript', level: 85, category: 'languages' },
    { name: 'TypeScript', level: 80, category: 'languages' },
    { name: 'SQL', level: 90, category: 'languages' },
    
    // Data & ML
    { name: 'Pandas', level: 90, category: 'data' },
    { name: 'NumPy', level: 88, category: 'data' },
    { name: 'LangChain', level: 85, category: 'data' },
    { name: 'LangGraph', level: 82, category: 'data' },
    { name: 'PostgreSQL', level: 85, category: 'data' },
    { name: 'Machine Learning', level: 80, category: 'data' },
    
    // Tools & Frameworks
    { name: 'FastAPI', level: 88, category: 'tools' },
    { name: 'React', level: 85, category: 'tools' },
    { name: 'Git', level: 90, category: 'tools' },
    { name: 'Docker', level: 75, category: 'tools' },
    { name: 'Linux', level: 80, category: 'tools' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'bg-primary';
    if (level >= 80) return 'bg-secondary';
    return 'bg-accent';
  };

  const getSkillGlow = (level: number) => {
    if (level >= 90) return 'shadow-[0_0_20px_hsl(var(--primary)/0.5)]';
    if (level >= 80) return 'shadow-[0_0_20px_hsl(var(--secondary)/0.5)]';
    return 'shadow-[0_0_20px_hsl(var(--accent)/0.5)]';
  };

  return (
    <section className="py-24 px-6 bg-gradient-dark relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="text-muted-foreground">TECHNICAL</span>{' '}
            <span className="neon-text">ARSENAL</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit forged through countless hours of deep work and precision engineering
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`glass px-6 py-3 rounded-full font-space font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'neon-border text-primary'
                  : 'border-glass-border hover:border-primary/50 text-muted-foreground hover:text-primary'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-intense p-6 rounded-xl hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Skill Header */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-orbitron font-bold text-lg text-foreground">
                  {skill.name}
                </h3>
                <span className="text-sm font-space font-medium text-primary">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative">
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full ${getSkillColor(skill.level)} ${getSkillGlow(skill.level)} transition-all duration-1000 ease-out rounded-full`}
                    style={{
                      width: `${skill.level}%`,
                      animation: `fillBar 1.5s ease-out ${index * 0.1}s forwards`
                    }}
                  />
                </div>
                
                {/* Skill Level Indicator */}
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </div>

              {/* Skill Badge */}
              <div className="mt-4 flex justify-end">
                {skill.level >= 90 && (
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-space">
                    Expert
                  </span>
                )}
                {skill.level >= 80 && skill.level < 90 && (
                  <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full font-space">
                    Advanced
                  </span>
                )}
                {skill.level < 80 && (
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full font-space">
                    Proficient
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { number: '250+', label: 'DSA Problems Solved', color: 'text-primary' },
            { number: '3+', label: 'Years of Experience', color: 'text-secondary' },
            { number: '10+', label: 'Projects Completed', color: 'text-accent' },
            { number: '2', label: 'Internship Experiences', color: 'text-primary' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center glass p-6 rounded-xl hover-glow">
              <div className={`text-3xl md:text-4xl font-orbitron font-black ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-space">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Skills;