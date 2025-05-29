import React from 'react';
import { cn } from '@/lib/utils';

interface ActionLinksProps {
  className?: string;
  onForgotPassword?: () => void;
  onSignUp?: () => void;
}

const ActionLinks: React.FC<ActionLinksProps> = ({ className, onForgotPassword, onSignUp }) => {
  const handleForgotPasswordClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onForgotPassword) {
      onForgotPassword();
    } else {
      console.log('Forgot Password link clicked (default handler)');
    }
  };

  const handleSignUpClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onSignUp) {
      onSignUp();
    } else {
      console.log('Sign Up link clicked (default handler)');
    }
  };

  return (
    // This component renders both link sections. 
    // In LoginCard, it's placed before the PrimaryButton due to component hierarchy.
    <div className={cn('w-full text-sm flex flex-col gap-3', className)}> 
      {/* "Forgot Password" link - styled as per common practice, right aligned */}
      <div className="text-right">
        <a
          href="#"
          onClick={handleForgotPasswordClick}
          className="text-muted-foreground hover:text-accent transition-colors"
        >
          Forgot Password
        </a>
      </div>
      {/* "Sign Up" prompt - styled as per image, centered */}
      <div className="text-center">
        <span className="text-card-foreground">Don't have an account? </span>
        <a
          href="#"
          onClick={handleSignUpClick}
          className="font-medium text-accent hover:text-accent/90 underline"
        >
          SignUp
        </a>
      </div>
    </div>
  );
};

export default ActionLinks;
