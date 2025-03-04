import React, { ReactNode, useState, useEffect } from 'react';

interface TerminalProps {
  children: ReactNode;
}

const Terminal: React.FC<TerminalProps> = ({ children }) => {
  const [date, setDate] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formattedDate = date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
  
  const formattedTime = date.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit',
    hour12: false 
  });

  return (
    <div className="bg-terminal-bg border border-gray-800 rounded-md shadow-lg overflow-hidden terminal-window">
      <div className="bg-gray-900 px-3 md:px-4 py-2 flex items-center justify-between border-b border-gray-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-center text-xs md:text-sm text-terminal-secondary truncate px-2">
          Terminal
        </div>
        <div className="text-xs text-terminal-secondary hidden sm:block">
          {formattedDate} {formattedTime}
        </div>
      </div>
      <div className="p-3 md:p-4 font-mono text-sm md:text-base">
        {children}
      </div>
      <div className="bg-gray-900 px-3 md:px-4 py-1 border-t border-gray-800">
        {/* Online indicator removed */}
      </div>
    </div>
  );
};

export default Terminal;