import React from 'react';
import { Link } from 'react-router-dom';

//assets
import BgHero from '../assets/bg-hero.svg';
import FormLogo from '../assets/form-logo.svg';

const Verification: React.FC = () => {
  const handleRedirectToGoogleMail = () => {
    window.location.href = 'https://mail.google.com';
  };
  return (
    <div className="w-full h-screen relative overflow-hidden bg-[#14142DBF] bg-opacity-75 flex justify-center items-center">
      <img
        src={BgHero}
        alt="auth-background-hero"
        className="w-full h-full absolute object-cover mix-blend-overlay"
      />
      <div className="flex flex-col py-4 px-6 w-[80%] max-w-[500px] rounded-md bg-white relative items-center justify-center">
        <Link to="/" className="w-[120px] relative cursor-pointer">
          <img src={FormLogo} alt="logo" className="w-full" />
        </Link>
        <p className="text-[14px] md:text-[16px] text-[#1D4267] font-[500] text-center my-6">
          A link has been sent to your student mail Click on the Link to
          Complete your sign up process
        </p>
        <button
          onClick={handleRedirectToGoogleMail}
          className="outline-none border-none w-[60%] mx-auto py-2 bg-[#F9AD01] text-white font-[600] text-[16px] rounded-md my-2 cursor-pointer"
        >
          Go to Gmail
        </button>
      </div>
    </div>
  );
};

export default Verification;
