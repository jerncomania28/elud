import React from 'react';
import { Link } from 'react-router-dom';

//assets
import Logo from '../assets/logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="w-full relative bg-[#14142D] text-[#EFF5FB]">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 justify-items-start md:justify-items-center font-[500] py-12 ">
        <div className="flex flex-col col-span-2">
          <img src={Logo} alt="elud-logo" className="w-[99px]" />
          <p className="font-[400] leading-[25.6px] mt-4 text-[16px] w-full md:w-[80%] ">
            Elud is a product of Unilorin Microfinance Bank dedicated to ease
            the stress of student. with Elud you can make seamless transactions.
          </p>
        </div>

        {/* company */}
        <div className="flex flex-col col-span-2 md:col-auto">
          <h3 className="font-[600] text-[17px]">Company</h3>
          <ul className="mt-2 text-[400] text-[16px]">
            <li className="my-2">
              <Link to="/">Home</Link>
            </li>
            <li className="my-2">
              <Link to="/about-us">About Us</Link>
            </li>
          </ul>
        </div>

        {/* contact us */}
        <div className="flex flex-col col-span-2 md:col-auto ">
          <h3 className="font-[600] text-[17px]">Contact Us</h3>
          <ul className="mt-4  text-[400] text-[16px]">
            <li className="my-2">
              <Link to="/">charitimail@gmail.com</Link>
            </li>
            <li className="my-2">
              <Link to="#">+234 8163921605</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center py-2 font-[400] text-[13px] leading-[25px] border-t-[0.5px] border-solid border-[#494966] text-[#C7DBEF]">
        {' '}
        Copyright &copy; 2021 Lorem All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
