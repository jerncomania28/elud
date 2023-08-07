import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

import { AuthContext } from '../context/auth';

//components
import Button from './Button';

//assets
import Logo from '../assets/logo.svg';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isLoggedIn } = useContext(AuthContext);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const menuItems: string[] = ['features', 'about', 'contact'];

  const handleHeadeButttosDisplay = () => {
    if (!isLoggedIn) {
      return (
        <div className="ml-4 md:ml-0">
          <Button
            href="/signin"
            bgColor="bg-transparent"
            textColor="text-white"
            className="font-[600] text-[14px] md:text-[16px]"
          >
            Login
          </Button>
          <Button
            href="/signup"
            bgColor="bg-[#F4AA00]"
            textColor="text-[#0D1D2D]"
            className="font-[600] text-[14px] md:text-[16px]"
          >
            Signup
          </Button>
        </div>
      );
    }
  };

  return (
    <>
      <header className={`w-full h-[100px] relative`}>
        <div
          className={`h-full flex justify-between items-center mx-auto md:justify-between w-[90%]`}
        >
          <div className="flex item-center">
            {!isLoggedIn && (
              <div
                className="w-[30px] md:w-[40px] relative block flex items-center mr-1 md:hidden"
                onClick={handleIsOpen}
              >
                <FontAwesomeIcon icon={faBars} className="w-full" />
              </div>
            )}

            <Link to="/" className="w-[80px] md:w-[150px] relative">
              <img src={Logo} alt="logo-chariti" className="w-full" />
            </Link>
          </div>
          {!isLoggedIn && (
            <nav className="hidden md:flex">
              {menuItems.map((item, _idx) => (
                <Link
                  to={'#'}
                  key={_idx}
                  className="capitalize mx-2 font-[600] text-gray tracking-[2%] text-[16px] cursor-pointer whitespace-nowrap"
                >
                  {item}
                </Link>
              ))}
            </nav>
          )}
          {handleHeadeButttosDisplay()}
        </div>
      </header>
      {isOpen && (
        <nav className="fixed top-0 left-0 bg-[#14142D] text-white h-[100vh] w-[60%] shadow-md z-20 md:hidden">
          <div className="w-full relative flex justify-end">
            <FontAwesomeIcon
              icon={faX}
              className="w-[30px] mx-4 my-6"
              onClick={handleIsOpen}
            />
          </div>
          <div className="flex flex-col items-center justify-start pt-12 h-full">
            {menuItems.map((item) => (
              <Link
                to={'#'}
                className="capitalize my-4 font-[600] text-gray tracking-[2%] text-[20px] cursor-pointer"
              >
                {item}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
