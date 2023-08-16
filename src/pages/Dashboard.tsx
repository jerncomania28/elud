import React from 'react';

//components
import DropDown from '../components/DropDown';
import ServiceCard from '../components/ServiceCard';
import WelcomeBoard from '../components/welcomeBoard';

//assets
import Call from '../assets/call.svg';
import Bills from '../assets/bills.svg';
import Wifi from '../assets/wifi.svg';
import Upward from '../assets/upward.svg';
import Dodge from '../assets/Dodge.svg';

const Dashboard: React.FC = () => {
  return (
    <div className="w-full relative">
      <div className="w-full relative flex items-center justify-between">
        <p className="font-[500] text-[14px] md:text-[20px]  text-[#122940] flex-col md:flex-row ">
          <p className="text-[#017D56]">Congratulations!</p>{' '}
          <p className="my-1"> Welcome on Board🎉🎉🎉</p>
        </p>

        <DropDown />
      </div>
      <WelcomeBoard />
      <div className="w-full relative border-[1px] border-solid border-[#C7DBEF] rounded-md p-[24px]">
        <h1 className="font-[600] text-[16px] text-[#285C8F] mb-[24px]">
          <span> Other Payments </span>{' '}
          <small className="text-[#508FCE] text-[600] text-[14px] px-[12px] py-[4px] rounded-[12px] mx-4 bg-[#E6FCF5]">
            coming soon
          </small>
        </h1>
        <div className="flex flex-wrap gap-[24px]">
          <ServiceCard icon={Call} serviceText="Buy Text" />{' '}
          <ServiceCard icon={Wifi} serviceText="Buy Data" />{' '}
          <ServiceCard icon={Bills} serviceText="Pay Bills" />
        </div>
      </div>
      <div className="w-full h-[150px] relative border-[1px] border-solid border-[#C7DBEF] rounded-md p-[24px] flex justify-center items-center my-4 bg-white backdrop-blur-md bg-opacity-30">
        <img
          src={Dodge}
          alt="bg-image"
          className="absolute bottom-0 left-0 object-cover mix-blend-overlay"
        />
        <img
          src={Upward}
          alt="bg-image"
          className="absolute top-0 right-0 object-cover mix-blend-overlay"
        />
        <div className="text-center">
          <h1 className="text-[#285C8F] text-[24px] font-[600] leading-[48px]">
            No Transactions
          </h1>
          <p className="font-[400] text-[#285C8F] leading-[32px] text-[16px]">
            You haven't Made any Transactions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
