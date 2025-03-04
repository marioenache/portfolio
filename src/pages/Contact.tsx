import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Github, Linkedin, Instagram, CheckCircle, ArrowRight } from 'lucide-react';
import TerminalText from '../components/TerminalText';

const Contact: React.FC = () => {
  return (
    <div className="space-y-4">
      <TerminalText 
        text="cd /contact" 
        isCommand={true}
        typingSpeed={20}
      />
      
      <div className="mt-4 space-y-4">
        <TerminalText 
          text="Contact Information" 
          className="text-xl font-bold text-terminal-accent"
          delay={500}
          typingSpeed={15}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="space-y-3">
            <div 
              className="flex items-start p-2 rounded hover:bg-terminal-darkGray transition-colors"
              style={{ 
                opacity: 0,
                animation: 'fadeIn 0.6s ease-out forwards 600ms'
              }}
            >
              <Mail className="text-terminal-accent mt-1 mr-3" size={18} />
              <div>
                <TerminalText 
                  text="Email"
                  className="font-semibold"
                  delay={600}
                  typingSpeed={10}
                />
                <a href="mailto:hello@marioenache.ro" className="text-terminal-accent hover:underline">
                  <TerminalText 
                    text="hello@marioenache.ro"
                    delay={700}
                    typingSpeed={8}
                  />
                </a>
              </div>
            </div>
            
            <div 
              className="flex items-start p-2 rounded hover:bg-terminal-darkGray transition-colors"
              style={{ 
                opacity: 0,
                animation: 'fadeIn 0.6s ease-out forwards 800ms'
              }}
            >
              <MapPin className="text-terminal-accent mt-1 mr-3" size={18} />
              <div>
                <TerminalText 
                  text="Location"
                  className="font-semibold"
                  delay={800}
                  typingSpeed={10}
                />
                <TerminalText 
                  text="Bucharest, Romania"
                  delay={900}
                  typingSpeed={8}
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <TerminalText 
              text="Social Profiles"
              className="font-semibold text-terminal-accent"
              delay={1200}
              typingSpeed={10}
            />
            
            <div className="space-y-2">
              <a 
                href="https://github.com/marioenache" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-terminal-text hover:text-terminal-accent transition-colors p-2 rounded hover:bg-terminal-darkGray"
                style={{ 
                  opacity: 0,
                  animation: 'fadeIn 0.6s ease-out forwards 1300ms'
                }}
              >
                <Github size={18} className="mr-2" />
                <span className="text-sm md:text-base">github.com/marioenache</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/marioenache" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-terminal-text hover:text-terminal-accent transition-colors p-2 rounded hover:bg-terminal-darkGray"
                style={{ 
                  opacity: 0,
                  animation: 'fadeIn 0.6s ease-out forwards 1400ms'
                }}
              >
                <Linkedin size={18} className="mr-2" />
                <span className="text-sm md:text-base">linkedin.com/in/marioenache</span>
              </a>
              
              <a 
                href="https://instagram.com/mario__414" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-terminal-text hover:text-terminal-accent transition-colors p-2 rounded hover:bg-terminal-darkGray"
                style={{ 
                  opacity: 0,
                  animation: 'fadeIn 0.6s ease-out forwards 1500ms'
                }}
              >
                <Instagram size={18} className="mr-2" />
                <span className="text-sm md:text-base">instagram.com/mario__414</span>
              </a>
            </div>
          </div>
        </div>
        
        <div 
          className="mt-6 border border-gray-800 rounded-md p-3 md:p-4 bg-terminal-darkGray"
          style={{ 
            opacity: 0,
            animation: 'fadeIn 0.8s ease-out forwards 1600ms'
          }}
        >
          <div className="flex items-center">
            <CheckCircle className="text-terminal-accent mr-2 flex-shrink-0" size={20} />
            <TerminalText 
              text="Currently Available for Freelance Work"
              className="text-base md:text-lg font-semibold text-terminal-accent"
              delay={1600}
              typingSpeed={10}
            />
          </div>
          
          <div className="mt-3 space-y-2">
            <TerminalText 
              text="Services Available:"
              className="font-semibold"
              delay={1700}
              typingSpeed={8}
            />
            
            <ul className="pl-2 md:pl-4 space-y-1 text-sm md:text-base">
              <li className="flex items-start" style={{ 
                opacity: 0,
                animation: 'fadeIn 0.5s ease-out forwards 1800ms'
              }}>
                <span className="text-terminal-accent mr-2">•</span>
                <TerminalText 
                  text="Server setup and configuration"
                  delay={1800}
                  typingSpeed={5}
                />
              </li>
              <li className="flex items-start" style={{ 
                opacity: 0,
                animation: 'fadeIn 0.5s ease-out forwards 1900ms'
              }}>
                <span className="text-terminal-accent mr-2">•</span>
                <TerminalText 
                  text="Network infrastructure design"
                  delay={1900}
                  typingSpeed={5}
                />
              </li>
              <li className="flex items-start" style={{ 
                opacity: 0,
                animation: 'fadeIn 0.5s ease-out forwards 2000ms'
              }}>
                <span className="text-terminal-accent mr-2">•</span>
                <TerminalText 
                  text="Security audits and implementation"
                  delay={2000}
                  typingSpeed={5}
                />
              </li>
              <li className="flex items-start" style={{ 
                opacity: 0,
                animation: 'fadeIn 0.5s ease-out forwards 2100ms'
              }}>
                <span className="text-terminal-accent mr-2">•</span>
                <TerminalText 
                  text="Automation and monitoring solutions"
                  delay={2100}
                  typingSpeed={5}
                />
              </li>
            </ul>
            
            <div className="mt-3">
              <TerminalText 
                text="Contact me for rates and availability. Quick response guaranteed."
                className="text-terminal-secondary text-sm md:text-base"
                delay={2200}
                typingSpeed={8}
              />
            </div>
          </div>
        </div>
        
        {/* Call to Action Section - Updated */}
        <div 
          className="mt-8 border border-terminal-accent rounded-md p-4 md:p-6 bg-terminal-darkGray"
          style={{ 
            opacity: 0,
            animation: 'fadeIn 0.8s ease-out forwards 2400ms'
          }}
        >
          <TerminalText 
            text="Ready to Elevate Your Project?"
            className="text-lg md:text-xl font-bold text-terminal-accent"
            delay={2400}
            typingSpeed={10}
          />
          
          <div className="mt-3">
            <TerminalText 
              text="Let's discuss how I can help bring your vision to life with professional development and technical expertise."
              className="text-sm md:text-base"
              delay={2500}
              typingSpeed={8}
            />
          </div>
          
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a 
              href="mailto:hello@marioenache.ro?subject=Project%20Inquiry" 
              className="cta-button py-2 px-4 rounded-md font-semibold flex items-center justify-center"
              style={{ 
                opacity: 0,
                animation: 'fadeIn 0.5s ease-out forwards 2600ms'
              }}
            >
              <span>Get in Touch</span>
              <ArrowRight size={16} className="ml-2" />
            </a>
            
            <a 
              href="https://calendly.com/e-mario414-proton" 
              target="_blank"
              rel="noopener noreferrer"
              className="border border-terminal-accent text-terminal-accent py-2 px-4 rounded-md font-semibold hover:bg-terminal-accent hover:text-terminal-bg transition-colors flex items-center justify-center"
              style={{ 
                opacity: 0,
                animation: 'fadeIn 0.5s ease-out forwards 2700ms'
              }}
            >
              <span>Schedule a Call</span>
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;