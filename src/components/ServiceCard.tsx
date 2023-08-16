import React from 'react';

interface ServiceCardProps {
  icon: string;
  serviceText: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, serviceText }) => {
  return (
    <div className="w-[130px] h-[116px] rounded-[16px] border-[#C7DBEF] border-[1px] border-solid flex-col flex items-center justify-center">
      <div className="w-[45px] h-[45px] relative">
        <img src={icon} alt="bills" className="w-full h-full" />
      </div>
      <p className="font-[500] text-[16px] text-[#1D4267] mt-4">
        {serviceText}
      </p>
    </div>
  );
};

export default ServiceCard;
