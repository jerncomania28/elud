import React from 'react';
import { Link } from 'react-router-dom';

interface ButttonProps {
  children: React.ReactNode;
  bgColor: string;
  textColor: string;
  href: string;
  className?: string;
}

const Button: React.FC<ButttonProps> = ({
  children,
  bgColor,
  textColor,
  href,
  className,
}) => {
  return (
    <Link
      className={`py-[10px] px-[20px] md:px-[30px] mx-1 md:mx-2 border-[2px] border-solid border-[#8D8BD6] text-center ${bgColor} ${textColor} ${className}`}
      to={href}
    >
      {children}
    </Link>
  );
};

export default Button;
