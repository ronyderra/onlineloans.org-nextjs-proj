import { FormKeys, FormSteps, IFormConfig } from './types';

const currentYear = new Date().getFullYear();
const years = [];
for (let year = 1950; year <= currentYear; year++) {
  years.push(year);
}

export const STEP_CONFIG = [
  {
    step: FormSteps.first,
    title: 'Basic Info',
  },
  {
    step: FormSteps.second,
    title: 'Your Business',
  },
  {
    step: FormSteps.third,
    title: 'Your Info',
  },
];

export const FORM_CONFIG: IFormConfig[] = [
  {
    title: 'How much money do you need?',
    subtitle: 'Enter your requested loan or pick a common amount below:',
    step: FormSteps.first,
    substep: 1,
    options: [
      {
        type: 'input',
        placeholder: 'Enter your requested loan',
        name: FormKeys.amount,
      },
      {
        type: 'buttons',
        name: FormKeys.amount,
        values: [
          '$10,000',
          '$25,000',
          '$50,000',
          '$100,000',
          '$200,000',
          '$300,000',
        ],
      },
    ],
    next: true,
    prev: false,
  },
  {
    title: 'When did you start your business?',
    subtitle: 'If you don’t remember the month, take your best guess.',
    step: FormSteps.first,
    substep: 2,
    options: [
      {
        type: 'select',
        values: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        name: FormKeys.startMonth,
        placeholder: 'Month',
      },
      {
        type: 'select',
        name: FormKeys.startYear,
        placeholder: 'Year',
        values: years,
      },
    ],
    next: true,
    prev: true,
  },
  {
    title: 'My monthly revenue is',
    subtitle: 'Take an average of your last few months.',
    step: FormSteps.first,
    substep: 3,
    options: [
      { type: 'input', placeholder: 'Monthly revenue', name: FormKeys.revenue },
    ],
    next: true,
    prev: true,
  },
  {
    title: 'What is your credit score?',
    subtitle: "Rest assured, checking rates won't impact your credit score.",
    step: FormSteps.first,
    substep: 4,
    options: [
      {
        type: 'buttons',
        name: FormKeys.creditScore,
        values: [
          'Below 550',
          '550-579',
          '580-619',
          '620-639',
          '640-659',
          '660-699',
          '700-719',
          '720+',
        ],
      },
    ],
    next: true,
    prev: true,
  },
  {
    title: 'What will you use this loan for?',
    subtitle:
      'This helps us match you to the right funding options for your business.',
    step: FormSteps.first,
    substep: 5,
    options: [
      {
        type: 'buttons',
        name: FormKeys.loanFor,
        values: [
          'Working capital',
          'Equipment purchase',
          'Inventory',
          'Marketing or advertising',
          'Business expansion',
          'Debt refinancing',
          'Real estate',
          'Other',
        ],
        isSmallTxt: true,
      },
    ],
    next: true,
    prev: true,
  },
  {
    title: 'My business zip code is',
    subtitle: 'Please enter your 5-Digit zip code',
    step: FormSteps.second,
    substep: 1,
    options: [
      {
        type: 'input',
        placeholder: 'business zip code',
        name: FormKeys.zipCode,
      },
    ],
    next: true,
    prev: true,
  },
  {
    title: 'My business name is',
    subtitle: 'Please enter your business’s full name',
    step: FormSteps.second,
    substep: 2,
    options: [
      {
        type: 'input',
        placeholder: 'Business name',
        name: FormKeys.businessName,
      },
    ],
    next: true,
    prev: true,
  },
  {
    title: 'My name is',
    subtitle: 'Please enter your full first and last name',
    step: FormSteps.third,
    substep: 1,
    options: [
      { type: 'input', placeholder: 'First name', name: FormKeys.firstName },
      { type: 'input', placeholder: 'Last name', name: FormKeys.lastName },
    ],

    next: true,
    prev: true,
  },
  {
    title: 'Found your match, {{name}}!',
    subtitle: 'Almost done! Please provide final details and that’s it!',
    step: FormSteps.third,
    substep: 2,
    options: [
      { type: 'input', placeholder: 'Phone number', name: FormKeys.phone },
      {
        type: 'txt',
        value:
          'We or our lending partners may call you at this number to discuss your personalized loan options',
      },
      { type: 'input', placeholder: 'email', name: FormKeys.email },
      {
        type: 'txt',
        value:
          'We or our lending partners may email you at this address with next steps on your loan options',
      },
    ],

    next: true,
    prev: true,
  },
];
