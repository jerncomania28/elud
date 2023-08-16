/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../context/auth';

//components
import SideBar from '../components/SideBar';
import ConfirmPayment from '../components/modals/ConfirmPayment';

//utils
import { authStateChange } from '../utils/firebase';
import storageUtils from '../utils/storageUtils';

//assets
import Logo from '../assets/logo.svg';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const {
    isMobile,
    handleIsLoggedIn,
    handleCurrentUser,
    handleMobile,
    isMakePayment,
  } = useContext(AuthContext);

  React.useEffect(() => {
    const unsubscribeFn = () => {
      const unsubscribe = authStateChange((user) => {
        const _ac = user ? true : false;
        handleIsLoggedIn(_ac);
        handleCurrentUser(storageUtils.getItem());
      });

      return unsubscribe;
    };

    unsubscribeFn();
  }, []);

  return (
    <>
      <div className="w-full h-screen relative grid grid-cols-8">
        <div className="hidden w-full relative md:col-span-2 md:block ">
          <SideBar />
        </div>
        <div className="w-full relative col-span-8 md:col-span-6 flex flex-col items-center">
          <div className="w-full relative py-4 px-6 flex justify-between items-center bg-[#0C1325] md:hidden">
            <FontAwesomeIcon
              icon={faBars}
              className="text-white h-[24px] w-[24px]"
              onClick={handleMobile}
            />
            <img src={Logo} className="w-[90px] h-[40px]" />
            <div></div>
          </div>
          <div className="w-full h-screen relative overflow-y-scroll py-4 px-3 md:px-6 scroll">
            {children}
          </div>
        </div>
      </div>
      {isMobile && (
        <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black bg-opacity-70">
          <div className="top-0 left-0 fixed w-[70%] md:hidden z-10 ">
            <SideBar />
          </div>
        </div>
      )}
      {isMakePayment && <ConfirmPayment />}
    </>
  );
};

export default AdminLayout;
