import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

interface InputGroupProps {
  className?: string;
  emailValue: string;
  onEmailChange: (value: string) => void;
  passwordValue: string;
  onPasswordChange: (value: string) => void;
}

const InputGroup: React.FC<InputGroupProps> = ({
  className,
  emailValue,
  onEmailChange,
  passwordValue,
  onPasswordChange,
}) => {
  const inputBaseClassName =
    'h-10 w-full rounded-none border-0 border-b border-input bg-transparent px-1 py-2 text-sm ring-offset-transparent placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary';

  return (
    <div className={cn('w-full flex flex-col gap-6', className)}> {/* Gap between input fields */}
      <div>
        <Input
          type="email"
          id="email"
          placeholder="Email Address"
          value={emailValue}
          onChange={(e) => onEmailChange(e.target.value)}
          className={inputBaseClassName}
          required
          aria-label="Email Address"
        />
      </div>
      <div>
        <Input
          type="password"
          id="password"
          placeholder="Password"
          value={passwordValue}
          onChange={(e) => onPasswordChange(e.target.value)}
          className={inputBaseClassName}
          required
          aria-label="Password"
        />
      </div>
    </div>
  );
};

export default InputGroup;
