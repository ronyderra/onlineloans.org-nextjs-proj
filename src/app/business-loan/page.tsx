import LoanPage from '@/components/page/LoanPage/LoanPage';
import { LoanTypes } from '@/shared/types';

export default function BusinessLoansPage() {
  return <LoanPage type={LoanTypes.business} />;
}
