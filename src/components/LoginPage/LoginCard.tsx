import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

import InputGroup from './InputGroup';
import ActionLinks from './ActionLinks';
import PrimaryButton from './PrimaryButton';

interface LoginCardProps {
  className?: string;
}

const LoginCard: React.FC<LoginCardProps> = ({ className }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) { // Basic client-side check
      // Optionally, provide user feedback here (e.g., toast, inline error)
      console.warn('Email and password are required.');
      return;
    }
    setIsLoading(true);
    console.log('Login attempt with:', { email, password });
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    // In a real app, handle success/error (e.g., show toast, redirect)
    console.log('Simulated login finished.');
  };

  const handleForgotPassword = () => {
    console.log('Forgot password action triggered');
    // Example: navigate('/forgot-password') or open modal
  };

  const handleSignUp = () => {
    console.log('Sign up action triggered');
    // Example: navigate('/sign-up') or open modal
  };

  return (
    <Card className={cn(
      'w-full max-w-xs bg-card text-card-foreground shadow-xl rounded-lg',
      className
    )}>
      <CardHeader className="p-6 pb-0"> {/* Consistent with common card padding, pb-0 to let h2.mb-6 control space */}
        <h2 className="text-2xl font-semibold text-center text-card-foreground mb-6"> {/* mb-6 from layoutRequirements.header.layout */}
          Welcome
        </h2>
      </CardHeader>
      <CardContent className="p-6 pt-0"> {/* Consistent with common card padding, pt-0 as space is handled by h2.mb-6 */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4"> {/* gap-4 from layoutRequirements.mainContent.layout */}
          <InputGroup
            emailValue={email}
            onEmailChange={setEmail}
            passwordValue={password}
            onPasswordChange={setPassword}
          />
          {/* Component order based on hierarchy: InputGroup, ActionLinks, PrimaryButton */}
          {/* This means ActionLinks (containing Forgot Password and Sign Up) will appear before Login button. */}
          <ActionLinks
            onForgotPassword={handleForgotPassword}
            onSignUp={handleSignUp}
          />
          <PrimaryButton type="submit" disabled={isLoading || !email || !password}>
            {isLoading ? 'Logging in...' : 'Login'}
          </PrimaryButton>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginCard;
