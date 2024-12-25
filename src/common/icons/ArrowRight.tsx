import React from 'react';
import { cx } from 'class-variance-authority';

type Props = {
  className?: string;
};

export default function ArrowRight({ className }: Props) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx(className, 'group-hover:translate-x-2 transition-all flex justify-end duration-500 ease-in-out')}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.3431 9.29289L27.7071 15.6569C28.0976 16.0474 28.0976 16.6805 27.7071 17.0711L21.3431 23.435C20.9526 23.8256 20.3195 23.8256 19.9289 23.435C19.5384 23.0445 19.5384 22.4113 19.9289 22.0208L24.5858 17.364L4 17.364C3.44772 17.364 3 16.9162 3 16.364C3 15.8117 3.44772 15.364 4 15.364L24.5858 15.364L19.9289 10.7071C19.5384 10.3166 19.5384 9.68342 19.9289 9.29289C20.3195 8.90237 20.9526 8.90237 21.3431 9.29289Z"
        fill="currentColor"
      />
    </svg>
  );
}
