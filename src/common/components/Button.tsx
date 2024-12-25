'use client';

import { cva, type VariantProps, cx } from 'class-variance-authority';
import React from 'react';
import ArrowRight from '@/common/icons/ArrowRight';
import { Slot } from '@radix-ui/react-slot';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full font-medium focus:outline-none group',
  {
    variants: {
      variant: {
        primary: 'bg-primaryTheme text-white hover:bg-white hover:text-black transition-colors duration-300',
        secondary: 'bg-gray-200 text-black hover:bg-gray-300',
        danger: 'bg-red-500 text-white hover:bg-red-600',
        outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
        link: 'text-white hover:text-textHover',
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
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  showArrow?: boolean;
  arrowClassName?: string;
}

const Button: React.FC<ButtonProps> = ({
  asChild = false,
  variant,
  size,
  fullWidth,
  className,
  children,
  showArrow = false,
  arrowClassName,
  ...props
}) => {
  const Component = asChild ? Slot : 'button';

  return (
    <Component className={cx(buttonVariants({ variant, size, fullWidth }), className)} {...props}>
      <span className="flex items-center">
        {children}
        {showArrow && (
          <span className={cx('inline-block ml-2 transform transition-transform', arrowClassName)}>
            <ArrowRight />
          </span>
        )}
      </span>
    </Component>
  );
};

export default Button;
