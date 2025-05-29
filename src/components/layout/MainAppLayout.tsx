import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        // Overall layout requirements: flex items-center justify-center h-screen bg-background
        // Sizing: contentPadding p-4
        'flex h-screen items-center justify-center bg-background p-4',
        className
      )}
    >
      {/* Children (e.g., LoginCard) are expected to manage their own sizing, like max-width */}
      {children}
    </main>
  );
};

export default MainAppLayout;
