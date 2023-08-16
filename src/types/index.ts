import { DocumentData } from 'firebase/firestore';

// confirm payments props
export interface ConfirmPaymentProps {
  account_name: string;
  amount: string;
  fee: string;
  account_number: string;
  payment_name: string;
}

export interface currentUserProps extends DocumentData {
  email: string;
  displayName: string;
  id: string;
  matric_no: string;
  phone_number: string;
}
