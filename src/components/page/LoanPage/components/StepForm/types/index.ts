export enum FormSteps {
  first = 1,
  second = 2,
  third = 3,
}

type TOptionInput = {
  type: 'input';
  placeholder: string;
  name: FormKeys;
};

type TOptionTxt = {
  type: 'txt';
  value: string;
};

type TOptionBtn = {
  type: 'buttons';
  values: string[];
  isSmallTxt?: boolean;
  name: FormKeys;
};

type TOptionSelect = {
  type: 'select';
  values: (string | number)[];
  name: FormKeys;
  placeholder: string;
};

type TOption = TOptionInput | TOptionTxt | TOptionBtn | TOptionSelect;

export interface IFormConfig {
  title: string;
  subtitle: string;
  step: FormSteps;
  substep: number;
  options: TOption[];
  next: boolean;
  prev: boolean;
}

export enum FormKeys {
  amount = 'amount',
  startMonth = 'startMonth',
  startYear = 'startYear',
  revenue = 'revenue',
  creditScore = 'creditScore',
  loanFor = 'loanFor',
  zipCode = 'zipCode',
  businessName = 'businessName',
  firstName = 'firstName',
  lastName = 'lastName',
  phone = 'phone',
  email = 'email',
}

export interface IFormState {
  [FormKeys.amount]: number;
  [FormKeys.startMonth]: string;
  [FormKeys.startYear]: number;
  [FormKeys.revenue]: number;
  [FormKeys.creditScore]: string;
  [FormKeys.loanFor]: string;
  [FormKeys.zipCode]: number;
  [FormKeys.businessName]: string;
  [FormKeys.firstName]: string;
  [FormKeys.lastName]: string;
  [FormKeys.phone]: string;
  [FormKeys.email]: string;
}
