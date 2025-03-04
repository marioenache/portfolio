import React, { useState, useEffect } from 'react';

interface TerminalTextProps {
  text: string;
  delay?: number;
  className?: string;
  isCommand?: boolean;
  typingSpeed?: number;
}

const TerminalText: React.FC<TerminalTextProps> = ({ 
  text, 
  delay = 0, 
  className = "", 
  isCommand = false,
  typingSpeed = 25
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(visibilityTimer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setIsComplete(true);
        
        // Remove cursor after typing is complete
        setTimeout(() => {
          setShowCursor(false);
        }, 800);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, [text, typingSpeed, isVisible]);

  return (
    <div 
      className={`${isCommand ? 'terminal-line' : 'terminal-output'} ${className} ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}
      style={{ visibility: isVisible ? 'visible' : 'hidden' }}
    >
      <span className="inline-block">
        {displayedText}
        {showCursor && <span className="terminal-cursor">|</span>}
      </span>
    </div>
  );
};

export default TerminalText;