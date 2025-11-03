import HomePage from '@/components/page/HomePage/HomePage';
import { LoanTypes } from '@/shared/types';

export default function PersonalLoansPage() {
  return <HomePage type={LoanTypes.personal} />;
}
