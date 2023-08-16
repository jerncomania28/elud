/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../context/auth';

import helperUtils from '../../utils/helperUtils';

import Logo from '../../assets/logo-confirm-payment.svg';

// payment hooks
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { config } from '../../utils/payment';
import storageUtils from '../../utils/storageUtils';

//assets
import defaultLogo from '../../assets/logo-confirm-payment.svg';

const ConfirmPayment: React.FC = () => {
  const { confirmPaymentData, handleMakePayment } = React.useContext(
    AuthContext,
  );

  const { email, displayName, phone_number, id } = storageUtils.getItem();
  const customer = { email, name: displayName, phone_number };
  const customizations = {
    title: confirmPaymentData.payment_name,
    description: confirmPaymentData.payment_name,
    logo: defaultLogo,
  };

  const navigate = useNavigate();

  const handleFlutterWave = useFlutterwave({
    ...config,
    customer,
    amount: Number(confirmPaymentData.amount),
    customizations,
    tx_ref: id,
  });

  return (
    <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-[#122940] bg-opacity-75">
      <div className="w-[90%] mx-auto md:w-full max-w-[480px] bg-white rounded-md">
        <div className="w-full py-6 px-6 relative flex justify-between">
          <h1 className="text-[20px] text-[#1D4267] font-[400] tracking-[1%]">
            Confirm Payment
          </h1>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
            onClick={handleMakePayment}
          >
            <circle cx="12" cy="12" r="12" fill="#EFF5FB" />
            <path
              d="M15.5294 8.47046L8.47058 15.5293M15.5294 15.5293L8.47058 8.47046"
              stroke="#285C8F"
              stroke-width="1.05882"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="w-full bg-[#EFF5FB] py-[24px] pcox-[20px] relative">
          {Object.entries(confirmPaymentData).map((key: any, _idx: number) => (
            <div
              className="w-full flex justify-between font-[400] text-[#1D4267] text-[16px] tracking-[1%] my-2"
              key={_idx}
            >
              <p className="capitalize">
                {`${helperUtils.convertObjectKeyToWord(key[0])} :`}
              </p>
              <p>{key[1]}</p>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col items-center justify-center item-center relative">
          <div className="w-[150px] relative h-[32px] mt-8">
            <img
              src={Logo}
              alt="payment confirmation"
              className="w-full h-full"
            />
          </div>

          <button
            className="bg-[#F4AA00] relative py-2 px-6 rounded-md text-[#08111B] mt-4 mb-8"
            onClick={() =>
              handleFlutterWave({
                callback: (response) => {
                  if (response.status === 'completed') {
                    console.log('response', response);
                  }
                  closePaymentModal();
                  handleMakePayment();
                  navigate('/transactions');
                },
                onClose: () => {
                  handleMakePayment();
                },
              })
            }
          >
            <span className="font-[600] text-[16px]">
              Proceed to Make Payment
            </span>
            <FontAwesomeIcon icon={faArrowRight} className="mx-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPayment;
