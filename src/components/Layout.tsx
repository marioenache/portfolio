import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Terminal from './Terminal';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-text flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-3 md:px-4 py-4 md:py-8 max-w-4xl">
        <Terminal>
          {children}
        </Terminal>
      </main>
      <footer className="py-3 md:py-4 text-center text-terminal-secondary text-xs md:text-sm">
        <p>© {new Date().getFullYear()} Mario Enache. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;