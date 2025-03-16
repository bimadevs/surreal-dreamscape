"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  glowEffect?: 'primary' | 'secondary' | 'accent' | 'none';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    children, 
    variant = 'primary', 
    size = 'md', 
    isLoading = false,
    leftIcon,
    rightIcon,
    glowEffect = 'none',
    disabled,
    ...props 
  }, ref) => {
    const baseStyles = 'relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-light focus:ring-primary',
      secondary: 'bg-secondary text-white hover:bg-secondary-light focus:ring-secondary',
      accent: 'bg-accent text-white hover:bg-accent-light focus:ring-accent',
      ghost: 'bg-transparent hover:bg-foreground/5 border border-foreground/20 text-foreground',
      link: 'bg-transparent underline-offset-4 hover:underline text-foreground p-0 h-auto',
    };
    
    const sizes = {
      sm: 'text-xs px-3 py-1.5 h-8',
      md: 'text-sm px-4 py-2 h-10',
      lg: 'text-base px-6 py-3 h-12',
    };
    
    const glowEffects = {
      primary: 'after:absolute after:inset-0 after:rounded-full after:shadow-glow-primary after:opacity-70 after:blur-sm',
      secondary: 'after:absolute after:inset-0 after:rounded-full after:shadow-glow-secondary after:opacity-70 after:blur-sm',
      accent: 'after:absolute after:inset-0 after:rounded-full after:shadow-glow-accent after:opacity-70 after:blur-sm',
      none: '',
    };
    
    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          glowEffect !== 'none' && glowEffects[glowEffect],
          className
        )}
        disabled={isLoading || disabled}
        ref={ref}
        {...props}
      >
        {isLoading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </span>
        )}
        <span className={cn('flex items-center gap-2', isLoading && 'opacity-0')}>
          {leftIcon && <span>{leftIcon}</span>}
          {children}
          {rightIcon && <span>{rightIcon}</span>}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, type ButtonProps }; 