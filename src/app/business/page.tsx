import HomePage from '@/components/page/HomePage/HomePage';
import { LoanTypes } from '@/shared/types';

export default function BusinessLoansPage() {
  return <HomePage type={LoanTypes.business} />;
}
