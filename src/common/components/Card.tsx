import React from 'react';
import clsx from 'clsx';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Card: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={clsx('bg-foreground rounded-elements p-6 border border-white border-opacity-10', className)}>
      {children}
    </div>
  );
};

export default Card;
