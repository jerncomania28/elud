/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useReducer } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../context/auth';

// components
import DropDown from '../components/DropDown';
import MakePaymentDropDown from '../components/MakePaymentDropDown';

//constants
import {
  PAYMENT_TYPE_OPTIONS,
  LEVELS,
  LIST_OF_FACULTY,
  LIST_OF_DEPARTMENT,
  LIST_OF_PAYMENTS,
  LIST_OF_ACCT_NUMBER,
} from '../constants';

import helperUtils from '../utils/helperUtils';

import { ConfirmPaymentProps } from '../types';

interface PaymentState {
  payment_type: string;
  level: string;
  department: string;
  selected_payment: string;
  faculty: string;
}

type PaymentAction = {
  type:
    | 'SELECT_PAYMENT_TYPE'
    | 'SELECT_LEVEL'
    | 'SELECT_DEPARTMENT'
    | 'SELECT_PAYMENT'
    | 'SELECT_FACULTY';
  payload: PaymentState;
};

const initialState: PaymentState = {
  payment_type: '',
  level: '',
  department: '',
  selected_payment: '',
  faculty: '',
};

const handlers: Record<
  string,
  (state: PaymentState, action: PaymentAction) => PaymentState
> = {
  SELECT_PAYMENT_TYPE: (state, action) => {
    const { payment_type } = action.payload;
    return {
      ...state,
      payment_type,
    };
  },
  SELECT_LEVEL: (state, action) => {
    const { level } = action.payload;
    return {
      ...state,
      level,
    };
  },
  SELECT_DEPARTMENT: (state, action) => {
    const { department } = action.payload;
    return {
      ...state,
      department,
    };
  },
  SELECT_PAYMENT: (state, action) => {
    const { selected_payment } = action.payload;
    return {
      ...state,
      selected_payment,
    };
  },
  SELECT_FACULTY: (state, action) => {
    const { faculty } = action.payload;

    return {
      ...state,
      faculty,
    };
  },
};

const reducer = (state: PaymentState, action: PaymentAction) => {
  return handlers[action.type] ? handlers[action.type](state, action) : state;
};

const MakePayment: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { handleMakePayment, setConfirmPaymentData } = React.useContext(
    AuthContext,
  );

  const makePayment = (paymentData: ConfirmPaymentProps) => {
    handleMakePayment();
    setConfirmPaymentData(paymentData);
  };

  const handleChange = (event: any, type: any, key: string) => {
    console.log('event value ', event);

    dispatch({
      type,
      payload: { ...state, [key]: event.target.innerText },
    });
  };

  return (
    <div className="w-full relative">
      <div className="w-full relative flex justify-end">
        <DropDown />
      </div>
      <div className="flex flex-col my-4">
        <h1 className="text-[#122940] text-[20px] md:text-[24px] font-[500]">
          Make Payment Seamlessly and Generate Receipt
        </h1>
        <p className="text-[#285C8F] text-[14px] md:text-[16px] font-[500] my-1">
          Narrow down your search by selecting relevant tags
        </p>
      </div>

      <MakePaymentDropDown
        state={state.payment_type || 'Select Payment Type'}
        handleChange={(event: any) =>
          handleChange(event, 'SELECT_PAYMENT_TYPE', 'payment_type')
        }
        options={PAYMENT_TYPE_OPTIONS}
      />

      <MakePaymentDropDown
        state={state.level || 'Select Level'}
        handleChange={(event: any) =>
          handleChange(event, 'SELECT_LEVEL', 'level')
        }
        options={LEVELS}
      />

      {state.payment_type.toLowerCase() ===
        PAYMENT_TYPE_OPTIONS[1].toLocaleLowerCase() &&
        !!state.level && (
          <MakePaymentDropDown
            state={state.faculty || 'Faculty'}
            handleChange={(event: any) =>
              handleChange(event, 'SELECT_FACULTY', 'faculty')
            }
            options={LIST_OF_FACULTY}
          />
        )}

      {state.payment_type.toLowerCase() ===
        PAYMENT_TYPE_OPTIONS[1].toLocaleLowerCase() &&
        !!state.faculty && (
          <MakePaymentDropDown
            state={state.department || 'Select Department'}
            handleChange={(event: any) =>
              handleChange(event, 'SELECT_DEPARTMENT', 'department')
            }
            options={
              LIST_OF_DEPARTMENT[helperUtils.convertToObjectKey(state.faculty)]
            }
          />
        )}

      {state.payment_type.toLowerCase() ===
        PAYMENT_TYPE_OPTIONS[0].toLocaleLowerCase() &&
        !!state.level && (
          <MakePaymentDropDown
            state={state.selected_payment || 'List of Payments'}
            handleChange={(event: any) =>
              handleChange(event, 'SELECT_PAYMENT', 'selected_payment')
            }
            options={LIST_OF_PAYMENTS.general_payments[state.level]}
          />
        )}

      {state.payment_type.toLowerCase() ===
        PAYMENT_TYPE_OPTIONS[0].toLocaleLowerCase() &&
        !!state.level && (
          <button
            className="bg-[#F4AA00] relative py-2 px-6 rounded-md text-[#08111B] my-8 w-full max-w-[336px]"
            onClick={() =>
              makePayment(
                LIST_OF_ACCT_NUMBER[
                  helperUtils.convertToObjectKey(state.selected_payment)
                ],
              )
            }
          >
            <span className="font-[600] text-[16px]">Make Payment</span>
            <FontAwesomeIcon icon={faArrowRight} className="mx-4" />
          </button>
        )}
    </div>
  );
};

export default MakePayment;
