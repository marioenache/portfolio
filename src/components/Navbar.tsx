import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Terminal, Code, Mail, Menu, X, Clock } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b border-gray-800 py-3 md:py-4">
      <div className="container mx-auto px-4 max-w-4xl">
        <nav className="flex justify-between items-center">
          <NavLink to="/" className="text-terminal-accent flex items-center gap-2 font-bold text-lg md:text-xl">
            <Terminal size={20} className="terminal-icon" />
          </NavLink>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-terminal-text hover:text-terminal-accent"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-5">
            <li>
              <NavLink 
                to="/experience" 
                className={({ isActive }) => 
                  isActive ? "nav-active flex items-center gap-1" : "text-terminal-text hover:text-terminal-accent transition-colors flex items-center gap-1"
                }
              >
                <Clock size={16} />
                <span>Experience</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/skills" 
                className={({ isActive }) => 
                  isActive ? "nav-active flex items-center gap-1" : "text-terminal-text hover:text-terminal-accent transition-colors flex items-center gap-1"
                }
              >
                <Code size={16} />
                <span>Skills</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  isActive ? "nav-active flex items-center gap-1" : "text-terminal-text hover:text-terminal-accent transition-colors flex items-center gap-1"
                }
              >
                <Mail size={16} />
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        
        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 border-t border-gray-800 pt-3 pb-2 animate-fadeIn">
            <ul className="space-y-3">
              <li>
                <NavLink 
                  to="/experience" 
                  className={({ isActive }) => 
                    isActive ? "nav-active flex items-center gap-2 py-1" : "text-terminal-text hover:text-terminal-accent transition-colors flex items-center gap-2 py-1"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Clock size={16} />
                  <span>Experience</span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/skills" 
                  className={({ isActive }) => 
                    isActive ? "nav-active flex items-center gap-2 py-1" : "text-terminal-text hover:text-terminal-accent transition-colors flex items-center gap-2 py-1"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Code size={16} />
                  <span>Skills</span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    isActive ? "nav-active flex items-center gap-2 py-1" : "text-terminal-text hover:text-terminal-accent transition-colors flex items-center gap-2 py-1"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Mail size={16} />
                  <span>Contact</span>
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;