import React, { useState, useEffect } from 'react';
import { ChevronRight, Terminal } from 'lucide-react';
import TerminalText from '../components/TerminalText';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [showWelcome, setShowWelcome] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [showBio, setShowBio] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [showCommands, setShowCommands] = useState(false);
  const [commandInput, setCommandInput] = useState('');
  const [isExecuting, setIsExecuting] = useState(false);

  useEffect(() => {
    const welcomeTimer = setTimeout(() => setShowWelcome(true), 100);
    const introTimer = setTimeout(() => setShowIntro(true), 400);
    const bioTimer = setTimeout(() => setShowBio(true), 800);
    const navTimer = setTimeout(() => setShowNav(true), 1200);
    const promptTimer = setTimeout(() => setShowPrompt(true), 1600);
    const commandsTimer = setTimeout(() => setShowCommands(true), 2000);

    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(introTimer);
      clearTimeout(bioTimer);
      clearTimeout(navTimer);
      clearTimeout(promptTimer);
      clearTimeout(commandsTimer);
    };
  }, []);

  const executeCommand = (command: string) => {
    if (isExecuting) return;

    setIsExecuting(true);
    setCommandInput(command);

    setTimeout(() => {
      switch (command) {
        case 'cd /experience':
          navigate('/experience');
          break;
        case 'cd /skills':
          navigate('/skills');
          break;
        case 'cd /contact':
          navigate('/contact');
          break;
        case 'clear':
          // Reset all states to trigger animation restart
          setShowWelcome(false);
          setShowIntro(false);
          setShowBio(false);
          setShowNav(false);
          setShowPrompt(false);
          setShowCommands(false);
          setCommandInput('');
          setIsExecuting(false);

          // Restart animations with a slight delay
          setTimeout(() => {
            setShowWelcome(true);
            setTimeout(() => setShowIntro(true), 300);
            setTimeout(() => setShowBio(true), 600);
            setTimeout(() => setShowNav(true), 900);
            setTimeout(() => setShowPrompt(true), 1200);
            setTimeout(() => setShowCommands(true), 1500);
          }, 100);
          break;
        default:
          setIsExecuting(false);
          setCommandInput('');
      }
    }, 300);
  };

  return (
    <div className="space-y-4">
      {showWelcome && (
        <div className="fade-in" style={{ animationDuration: '0.4s' }}>
          <TerminalText
            text="uname -a"
            isCommand={true}
            typingSpeed={10}
          />
        </div>
      )}

      {showIntro && (
        <div className="mt-4 space-y-3 fade-in" style={{ animationDuration: '0.4s' }}>
          <div className="flex items-center">
            <Terminal className="text-terminal-accent mr-2" size={24} />
            <TerminalText
              text="Mario Enache | Linux SysAdmin"
              className="text-xl md:text-2xl font-bold text-terminal-accent"
              delay={100}
              typingSpeed={15}
            />
          </div>

          {showBio && (
            <div className="fade-in" style={{ animationDuration: '0.4s' }}>
              <TerminalText
                text="Hey, I’m Mario Enache, a 20-year-old guy who started learning Unix-like systems since childhood when I turned an broken screen laptop into an Ubuntu server!"
                delay={100}
                typingSpeed={9}
              />
            </div>
          )}

          {showNav && (
            <div className="fade-in" style={{ animationDuration: '0.4s' }}>
              <TerminalText
                text="I also do web design for small businesses and content creators. Feel free to navigate and check my work using the buttons below!"
                delay={100}
                typingSpeed={5}
              />
            </div>
          )}
        </div>
      )}

      {showPrompt && (
        <div className="mt-6 flex items-center text-terminal-accent fade-in" style={{ animationDuration: '0.4s' }}>
          <ChevronRight size={16} />
          <span className="ml-2">
            {commandInput ? commandInput : <span className="animate-blink">_</span>}
          </span>
        </div>
      )}

      {showCommands && (
        <div className="mt-6 p-3 md:p-4 border border-gray-800 rounded-md bg-terminal-darkGray fade-in" style={{ animationDuration: '0.5s' }}>
          <TerminalText
            text="Available commands:"
            className="text-terminal-accent font-semibold"
            delay={100}
            typingSpeed={8}
          />
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div
              className="flex items-center cursor-pointer hover:bg-terminal-mediumGray p-1 rounded transition-colors command-button"
              onClick={() => executeCommand('cd /experience')}
              style={{
                opacity: 0,
                animation: 'fadeIn 0.4s ease-out forwards 150ms'
              }}
            >
              <span className="text-terminal-accent mr-2">→</span>
              <TerminalText
                text="cd /experience"
                delay={150}
                typingSpeed={5}
              />
            </div>
            <div
              className="flex items-center cursor-pointer hover:bg-terminal-mediumGray p-1 rounded transition-colors command-button"
              onClick={() => executeCommand('cd /skills')}
              style={{
                opacity: 0,
                animation: 'fadeIn 0.4s ease-out forwards 300ms'
              }}
            >
              <span className="text-terminal-accent mr-2">→</span>
              <TerminalText
                text="cd /skills"
                delay={300}
                typingSpeed={5}
              />
            </div>
            <div
              className="flex items-center cursor-pointer hover:bg-terminal-mediumGray p-1 rounded transition-colors command-button"
              onClick={() => executeCommand('cd /contact')}
              style={{
                opacity: 0,
                animation: 'fadeIn 0.4s ease-out forwards 450ms'
              }}
            >
              <span className="text-terminal-accent mr-2">→</span>
              <TerminalText
                text="cd /contact"
                delay={450}
                typingSpeed={5}
              />
            </div>
            <div
              className="flex items-center cursor-pointer hover:bg-terminal-mediumGray p-1 rounded transition-colors command-button"
              onClick={() => executeCommand('clear')}
              style={{
                opacity: 0,
                animation: 'fadeIn 0.4s ease-out forwards 600ms'
              }}
            >
              <span className="text-terminal-accent mr-2">→</span>
              <TerminalText
                text="clear"
                delay={600}
                typingSpeed={5}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;