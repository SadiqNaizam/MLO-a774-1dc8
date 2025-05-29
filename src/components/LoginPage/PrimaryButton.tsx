import React from 'react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button'; // Import ButtonProps for extending

interface PrimaryButtonProps extends ButtonProps { // Extend Shadcn ButtonProps
  // children is already part of ButtonProps
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, className, ...props }) => {
  return (
    <Button
      className={cn(
        'w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg',
        // `rounded-lg` corresponds to `var(--radius)` which is 0.5rem
        // Colors `primary` and `primary-foreground` are from the theme
        className
      )}
      {...props} // Spread all other ButtonProps (like type, onClick, disabled, etc.)
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
