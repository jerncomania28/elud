import React from 'react';
import { NavLink } from 'react-router-dom';

//assets
import FormLogo from '../assets/form-logo.svg';

interface AuthContainerProps {
  children: React.ReactNode;
}

const AuthContainer: React.FC<AuthContainerProps> = ({ children }) => {
  return (
    <div className={`w-full relative flex justify-center items-center `}>
      <div className="w-[95%] max-w-[600px] relative pb-[30px] flex flex-col justify-center items-center bg-white py-4 rounded-lg shadow">
        <div className="w-[119px] h-[51px] relative my-4">
          <img src={FormLogo} alt="logo" className="w-full h-full" />
        </div>
        <div className="w-[90%] relative mx-auto rounded-xl my-2">
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive
                ? 'bg-[#C7DBEF] text-[#0D1D2D] py-2 rounded-tl-xl rounded-bl-xl'
                : 'bg-[#EFF5FB] text-[#285C8F] py-2 rounded-tl-xl rounded-bl-xl '
            }
          >
            <button className="w-[50%] text-[16px] font-[600] tracking-[2%]">
              Sign Up
            </button>
          </NavLink>
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              isActive
                ? 'py-2 bg-[#C7DBEF] text-[#0D1D2D] rounded-tr-xl rounded-br-xl'
                : 'py-2 bg-[#EFF5FB] text-[#285C8F] rounded-tr-xl rounded-br-xl'
            }
          >
            <button className="w-[50%] text-[16px] font-[600] tracking-[2%]">
              Log in
            </button>
          </NavLink>
        </div>
        <div className="w-[90%] mx-auto relative">{children}</div>
      </div>
    </div>
  );
};

export default AuthContainer;
