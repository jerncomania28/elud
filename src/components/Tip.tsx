import React from 'react';

const Tip: React.FC = () => {
  return (
    <div className="w-[70%] max-w-[400px] relative py-4 px-3 border-[2px] border-solid border-[#DCDBF2] rounded-xl flex gap-4 text-[#122940]">
      <span className="h-1/2 px-3 py-3 border-[1px] border-solid border-gray-300 rounded-md font-[400] text-[20px]">
        {' '}
        1
      </span>

      <div>
        <h4 className="text-center py-3 border-[1px] border-solid border-gray-300 rounded-md font-[600] text-[20px] leading-[24px]">
          Verify Student Mail
        </h4>
        <p className="mt-2 font-[400] text-[16px]">
          Click on the link sent to your student E-mail
        </p>
      </div>
    </div>
  );
};

export default Tip;
