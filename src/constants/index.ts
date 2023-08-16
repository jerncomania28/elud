import { ConfirmPaymentProps } from '../types';

export const PAYMENT_TYPE_OPTIONS = ['General Payment', 'Departmental Payment'];

export const LEVELS = [
  '100 level',
  '200 level',
  '300 level',
  '400 level',
  '500 level',
  '600 level',
];

export const LIST_OF_FACULTY = [
  'Faculty of Agriculture',
  'Faculty of Arts',
  'Faculty of Basic Medical Sciences',
  'Faculty of Communication and Information Sciences',
  'Faculty of Education',
  'Faculty of Engineering and Technology',
];

export const LIST_OF_DEPARTMENT: { [key: string]: string[] } = {
  faculty_of_agriculture: [
    'Department of Aquaculture and Fisheries',
    'Department of Agricultural Economics and Farm Management',
    'Department of Agricultural Extension and Rural Development',
    'Department of Agronomy',
    'Department of Animal Production',
    'Department of Crop Protection',
    'Department of Forest Resources Management',
    'Department of Home Economics and Food Science',
  ],
  faculty_of_arts: [
    'Department of Arabic',
    'Department of English',
    'Department of French',
    'Department of History and International Studies',
    'Department of Linguistics and Nigerian Languages',
    'Department of Performing Arts',
    'Department of Religions',
  ],
  faculty_of_education: [
    'Department of Adult and Primary Education',
    'Department of Arts Education',
    'Department of Counsellor Education',
    'Department of Educational Management',
    'Department of Educational Technology Centre',
    'Department of Educational Technology',
    'Department of Health Promotion and Environmental Health Education',
    'Department of Human Kinetics Education',
    'Department of Science Education',
    'Department of Social Sciences Education',
  ],
  faculty_of_communication_and_information_sciences: [
    'Department of Computer Science',
    'Department of Information & Comm. Science',
    'Department of Library & Info. Science',
    'Department of Mass Communication',
    'Department of Telecommunication Science',
  ],
  faculty_of_basic_medical_sciences: [
    'Department of Anatomy',
    'Department of Physiology',
    'Department of Pharmacology & Therapeutics',
    'Department of Heamatology',
    'Department of Chemical Pathology & Immunology',
    'Department of Medical Microbiology & Parasitology',
    'Department of Pathology & Medical Biochemistry',
  ],
  faculty_of_engineering_and_technology: [
    'Department of Agricultural Engineering',
    'Department of Biomedical Engineering',
    'Department of Chemical Engineering',
    'Department of Civil Engineering',
    'Department of Electrical Engineering',
    'Department of Materials and Metallurgical Engineering',
    'Department of Mechanical Engineering',
    'Department of Food and Bioprocess Engineering',
  ],
};

export const LIST_OF_PAYMENTS: { [key: string]: { [key: string]: string[] } } =
  {
    general_payments: {
      '100 Level': ['Matriculation Gown', 'GNS Textbook'],
      '200 Level': ['General Textbooks'],
      '300 Level': ['GSE Payment', 'SIWES Payment'],
      '400 Level': ['SIWES Payment', 'Clearance Fee'],
      '500 Level': ['Clearance Fee'],
      '600 Level': ['Laboratory Practical Fee'],
    },
    department_payment: {},
  };

export const LIST_OF_ACCT_NUMBER: { [key: string]: ConfirmPaymentProps } = {
  matriculation_gown: {
    account_name: 'TEC Unilorin',
    amount: '1000',
    fee: '10',
    account_number: '4661775012',
    payment_name: 'Matriculation Gown',
  },
  gns_textbook: {
    account_name: 'TEC Unilorin',
    amount: '1200',
    fee: '20',
    account_number: '4661775012',
    payment_name: 'GNS Textbook',
  },
  general_textbooks: {
    account_name: 'TEC Unilorin',
    amount: '1000',
    fee: '10',
    account_number: '4661775012',
    payment_name: 'General Textbooks',
  },
  gse_payment: {
    account_name: 'TEC Unilorin',
    amount: '600',
    fee: '10',
    account_number: '4661775012',
    payment_name: 'GSE',
  },
  siwes_payment: {
    account_name: 'TEC Unilorin',
    amount: '1000',
    fee: '10',
    account_number: '4661775012',
    payment_name: 'SIWES',
  },
  clearance_fee: {
    account_name: 'TEC Unilorin',
    amount: '1000',
    fee: '10',
    account_number: '4661775012',
    payment_name: 'CLEARANCE',
  },
  laboratory_practical_fee: {
    account_name: 'TEC Unilorin',
    amount: '600',
    fee: '10',
    account_number: '4661775012',
    payment_name: 'LABORATORY FEE ',
  },
};

export const defaultConfirmPayment = {
  account_name: '',
  amount: '',
  fee: '',
  account_number: '',
  payment_name: '',
};

export const defaultCurrentUser = {
  email: '',
  displayName: '',
  id: '',
  matric_no: '',
  phone_number: '',
};
