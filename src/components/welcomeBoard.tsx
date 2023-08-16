import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

//asssets
import WelcomeChart from '../assets/welcome-chart.svg';
import storageUtils from '../utils/storageUtils';
import Bars from '../assets/bars.svg';
import Graph from '../assets/Graph.svg';

const WelcomeBoard: React.FC = () => {
  const user = storageUtils.getItem();

  return (
    <div className="w-full relative bg-[#01A26F] rounded-md px-6 py-4 my-4 border-[1px] border-solid border-[#C7DBEF]">
      <img
        src={Bars}
        alt="bg-image"
        className="w-[244px] h-[229px] absolute bottom-0 left-[50%] tranform -translate-x-[50%] object-cover mix-blend-overlay"
      />
      <img
        src={Graph}
        alt="bg-image"
        className="w-[122px] h-[149px] absolute top-0 left-0 object-cover mix-blend-overlay"
      />
      <div className="w-full relative flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 relative">
          <h1 className="text-[24px] text-white font-[600] tracking-[0.48px] ">
            {`Welcome ${user.displayName}!`}{' '}
          </h1>
          <p className="font-[400] text-[20px] tracking-[0.4px] leading-[30px] text-[#B0F7E0] my-4">
            Simplify your payments with Elud. Convenient, cashless, and
            stress-free.
          </p>

          <button className="bg-[#F4AA00] relative py-3 px-6 rounded-md text-[#08111B] mt-2 w-full max-w-[336px]">
            <span className="font-[600] text-[16px]">
              Complete your Profile
            </span>
            <FontAwesomeIcon icon={faChevronRight} className="mx-4" />
          </button>
        </div>
        <div className="w-full md:w-1/2 relative flex justify-center md:justify-end">
          <img src={WelcomeChart} alt="welcome chart" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeBoard;
