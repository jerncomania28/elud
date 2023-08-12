import React from 'react';
import { Link } from 'react-router-dom';

//assets
import Logo from '../assets/logo.svg';
import BgHero from '../assets/bg-hero.svg';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="w-full relative h-[100vh] flex">
      <div className="w-full h-full relative hidden md:w-[30%] md:flex items-end relative overflow-hidden bg-[#14142D]">
        <img
          src={BgHero}
          alt="auth-background-hero"
          className="w-full h-full absolute object-cover mix-blend-overlay"
        />
        <div className="flex flex-col px-6 py-4">
          <Link to="/" className="w-[120px] relative cursor-pointer">
            <img src={Logo} alt="auth-logo" className="w-full" />
          </Link>
          <p className="font-[400] text-[20px] text-white mt-4">
            Simplify Your Payments: Easing Student Stress with our Seamless
            E-Wallet Platform!
          </p>
        </div>
      </div>
      <div className="md:w-[70%] w-full h-full relative overflow-y-scroll bg-[#EFF5FB] px-3 md:px-6 flex justify-center items-start md:items-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
