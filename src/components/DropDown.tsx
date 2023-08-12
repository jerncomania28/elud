import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleUser,
  faCaretDown,
  faHouse,
  faUser,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

// utils
import storageUtils from '../utils/storageUtils';
import { signOutUser } from '../utils/firebase';

const DropDown: React.FC = () => {
  const [isDropDown, setIsDropDown] = React.useState<boolean>(false);

  const currentUser = storageUtils.getItem();

  const navigate = useNavigate();

  const handleDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  const handleSignOut = () => {
    signOutUser();
    storageUtils.clearStorage();
    navigate('/');
  };

  return (
    <div
      className="max-w-[200px] relative font-[700] bg-[#EFF5FB] text-[#122940] tracking-[2%] whitespace-nowrap text-[13px] md:text-[16px] flex items-center justify-center p-2 md:p-3 rounded-md cursor-pointer"
      onClick={handleDropDown}
    >
      <FontAwesomeIcon
        icon={faCircleUser}
        className="text-[#A0C2E4] text-[24px]"
      />
      <span className="mx-2 md:inline-block">{currentUser.displayName}</span>
      <FontAwesomeIcon
        icon={faCaretDown}
        className="text-[#F9AD01] text-[18px] mx-2 md:mx-0 md:text-[24px]"
      />

      {isDropDown && (
        <div className="absolute w-[150px] md:w-[200px] flex flex-col top-[3rem] md:top-[3.5rem] right-0 bg-white rounded-md shadow opacity-100 font-[400] text-[14px] z-20">
          <Link
            to="/dashboard"
            className="w-full p-3 border-[#ddd] border-b-[1px] border-solid hover:bg-[#C7DBEF] flex rounded-t-md items-center "
          >
            <FontAwesomeIcon icon={faHouse} />
            <span className="mx-2">Dashboard</span>
          </Link>
          <Link
            to="/profile"
            className="w-full p-3 border-[#ddd] border-b-[1px] border-solid hover:bg-[#C7DBEF] flex items-center"
          >
            <FontAwesomeIcon icon={faUser} />
            <span className="mx-2"> Profile</span>
          </Link>
          <Link
            to="/"
            onClick={handleSignOut}
            className="w-full p-3 hover:bg-[#C7DBEF] rounded-b-md flex items-center "
          >
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span className="mx-2"> Sign out</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropDown;
