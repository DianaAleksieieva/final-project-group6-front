import Statistics from '../../components/Statistics/Statistics';
import CostsAndIncome from '../../components/CostsAndIncome';

function StatisticsPage({ month, year }) {
  return (
    <>
      <CostsAndIncome month={month} year={year} />
      <Statistics month={month} year={year} />
    </>
  );
}

export default StatisticsPage;
