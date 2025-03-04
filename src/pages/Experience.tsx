import React from 'react';
import { Calendar, ExternalLink, Server, Globe, Shield } from 'lucide-react';
import TerminalText from '../components/TerminalText';

interface WorkExperience {
  company: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
  projects: string[];
  icon: React.ReactNode;
}

const Experience: React.FC = () => {
  const experiences: WorkExperience[] = [
    {
      company: "ench.ro",
      role: "Founder & Hosting Engineer",
      period: "2025 - Present",
      description: "Leading industry game hosting for high-intensive servers. Responsible for every aspect of the platform including infrastructure, security, and performance optimization.",
      skills: ["Networking", "Docker", "Linux", "Monitoring", "Web Development", "Security"],
      projects: ["Game Panel", "Client Area", "Landing Page", "Status Page"],
      icon: <Globe className="text-terminal-accent" size={24} />
    },
    {
      company: "marioenache.ro",
      role: "Freelancer",
      period: "2023 - Present",
      description: "Deploying various projects for clients, including personal portfolios across multiple niches. Providing end-to-end solutions from server setup to website deployment.",
      skills: ["Docker", "WordPress", "Elementor", "Linux", "Web Hosting", "Domain Management"],
      projects: ["ighorjivcovici.ro", "marioenache.ro"],
      icon: <Server className="text-terminal-accent" size={24} />
    },
    {
      company: "lootmc.org",
      role: "Founder & Project Lead",
      period: "2020 - Present",
      description: "Loot is a Minecraft community founded in early 2020 with various game modes. Managing all technical aspects including server infrastructure, performance optimization, and scaling.",
      skills: ["Linux", "Docker", "Automation", "Networking", "Monitoring", "Java & Kotlin"],
      projects: ["Game Panel", "Website", "Game Server"],
      icon: <Shield className="text-terminal-accent" size={24} />
    }
  ];

  return (
    <div className="space-y-6">
      <TerminalText 
        text="cd /experience" 
        isCommand={true}
        typingSpeed={20}
      />
      
      <div className="mt-4 space-y-6">
        <TerminalText 
          text="Work Experience" 
          className="text-xl font-bold text-terminal-accent"
          delay={300}
          typingSpeed={15}
        />
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="border border-gray-800 rounded-md p-3 md:p-4 hover:border-terminal-accent transition-colors"
              style={{ 
                animationDelay: `${(index + 1) * 300}ms`,
                opacity: 0,
                animation: `fadeIn 0.6s ease-out forwards ${(index + 1) * 300}ms`
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div className="flex items-center">
                  {exp.icon}
                  <TerminalText 
                    text={exp.company}
                    className="text-lg font-bold text-terminal-accent ml-2"
                    delay={(index + 1) * 300}
                    typingSpeed={10}
                  />
                </div>
                <div className="flex items-center mt-2 md:mt-0">
                  <Calendar size={16} className="text-terminal-secondary mr-2" />
                  <TerminalText 
                    text={exp.period}
                    className="text-terminal-secondary text-sm"
                    delay={(index + 1) * 300 + 100}
                    typingSpeed={8}
                  />
                </div>
              </div>
              
              <TerminalText 
                text={exp.role}
                className="text-terminal-accent font-semibold"
                delay={(index + 1) * 300 + 200}
                typingSpeed={8}
              />
              
              <TerminalText 
                text={exp.description}
                className="mt-2 text-sm md:text-base"
                delay={(index + 1) * 300 + 300}
                typingSpeed={5}
              />
              
              <div className="mt-3">
                <TerminalText 
                  text="Key Skills:"
                  className="text-terminal-secondary text-xs md:text-sm font-semibold"
                  delay={(index + 1) * 300 + 400}
                  typingSpeed={5}
                />
                
                <div className="flex flex-wrap gap-2 mt-1">
                  {exp.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 text-xs bg-terminal-darkGray text-terminal-accent rounded"
                      style={{ 
                        animationDelay: `${(index + 1) * 300 + 500 + (skillIndex * 50)}ms`,
                        opacity: 0,
                        animation: `fadeIn 0.4s ease-out forwards ${(index + 1) * 300 + 500 + (skillIndex * 50)}ms`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-3">
                <TerminalText 
                  text="Active Projects:"
                  className="text-terminal-secondary text-xs md:text-sm font-semibold"
                  delay={(index + 1) * 300 + 800}
                  typingSpeed={5}
                />
                
                <ul className="list-disc list-inside pl-2 mt-1 space-y-1 text-sm">
                  {exp.projects.map((project, projectIndex) => (
                    <li 
                      key={projectIndex}
                      style={{ 
                        animationDelay: `${(index + 1) * 300 + 900 + (projectIndex * 100)}ms`,
                        opacity: 0,
                        animation: `fadeIn 0.4s ease-out forwards ${(index + 1) * 300 + 900 + (projectIndex * 100)}ms`
                      }}
                    >
                      <span className="text-terminal-text">{project}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div 
                className="mt-3 pt-2 border-t border-gray-800 flex justify-end"
                style={{ 
                  animationDelay: `${(index + 1) * 300 + 1200}ms`,
                  opacity: 0,
                  animation: `fadeIn 0.4s ease-out forwards ${(index + 1) * 300 + 1200}ms`
                }}
              >
                <a 
                  href={`https://${exp.company}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-terminal-accent text-xs flex items-center hover:underline"
                >
                  <span>Visit Website</span>
                  <ExternalLink size={12} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className="p-3 border border-gray-800 rounded-md bg-terminal-darkGray mt-4"
          style={{ 
            opacity: 0,
            animation: 'fadeIn 0.6s ease-out forwards 1500ms'
          }}
        >
          <TerminalText 
            text="Total Years of Professional Experience: 5+"
            className="text-terminal-accent"
            delay={1500}
            typingSpeed={8}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;