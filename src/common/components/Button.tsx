'use client';

import { cva, type VariantProps, cx } from 'class-variance-authority'; // Utility function for conditional class joining
import React from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full font-medium transition-colors duration-300 focus:outline-none',
  {
    variants: {
      variant: {
        primary: 'bg-primaryTheme text-white hover:bg-white hover:text-black',
        secondary: 'bg-gray-200 text-black hover:bg-gray-300',
        danger: 'bg-red-500 text-white hover:bg-red-600',
        outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
      },
      size: {
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-8 py-4 text-base',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: React.FC<ButtonProps> = ({ variant, size, fullWidth, className, children, ...props }) => {
  return (
    <button className={cx(buttonVariants({ variant, size, fullWidth }), className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
