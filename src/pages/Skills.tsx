import React from 'react';
import TerminalText from '../components/TerminalText';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      name: "Linux Systems Administration",
      skills: ["System Performance Monitoring", "Resource Management", "Process Monitoring", "Systemd Service Management", "LVM Storage Management", "Kernel Management"]
    },
    {
      name: "Network Security & Management",
      skills: ["Firewall Configuration", "Intrusion Prevention", "SSH Hardening", "VPN Implementation", "Certificate Management", "Network Traffic Analysis"]
    },
    {
      name: "Web Infrastructure",
      skills: ["Reverse Proxy Configuration", "Web Server Administration", "Load Balancing", "Virtual Hosts", "HTTP/HTTPS Configuration", "High Availability Setup"]
    },
    {
      name: "Cloud Platforms",
      skills: ["AWS", "Azure", "GCP", "Oracle Cloud", "Infrastructure as Code", "Cloud Security"]
    },
    {
      name: "Containerization & Virtualization",
      skills: ["Docker", "Docker Compose", "Kubernetes", "Container Orchestration", "Proxmox", "Virtual Machine Management"]
    },
    {
      name: "Monitoring & Observability",
      skills: ["Prometheus", "Grafana", "Metrics Collection", "Alert Management", "Performance Dashboards", "Log Analysis"]
    },
    {
      name: "Network Infrastructure",
      skills: ["Network Interface Configuration", "IP Management", "Routing", "Network Troubleshooting", "Bandwidth Optimization", "DNS Configuration"]
    }
  ];

  return (
    <div className="space-y-6">
      <TerminalText 
        text="cd /skills" 
        isCommand={true}
        typingSpeed={20}
      />
      
      <div className="mt-4 space-y-6">
        <TerminalText 
          text="Technical Skills & Expertise" 
          className="text-xl font-bold text-terminal-accent"
          delay={500}
          typingSpeed={15}
        />
        
        {skillCategories.map((category, index) => (
          <div key={index} className="mt-4 fade-in" style={{ animationDelay: `${(index + 1) * 200}ms` }}>
            <div className="flex items-center" style={{ 
              opacity: 0,
              animation: `fadeIn 0.5s ease-out forwards ${(index + 1) * 200}ms`
            }}>
              <div className="w-2 h-2 bg-terminal-accent rounded-full mr-2"></div>
              <TerminalText 
                text={category.name} 
                className="text-terminal-accent font-semibold"
                delay={(index + 1) * 200}
                typingSpeed={10}
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 pl-4">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex} 
                  className="flex items-center p-1 rounded skill-item"
                  style={{ 
                    animationDelay: `${(index + 1) * 200 + (skillIndex + 1) * 50}ms`,
                    opacity: 0,
                    animation: `fadeIn 0.5s ease-out forwards ${(index + 1) * 200 + (skillIndex + 1) * 50}ms`
                  }}
                >
                  <span className="text-terminal-secondary mr-2">→</span>
                  <TerminalText 
                    text={skill}
                    delay={(index + 1) * 200 + (skillIndex + 1) * 50}
                    typingSpeed={5}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;