import { useState, useEffect } from 'react';

import { getByCategoryMonthly } from '../../api/transactionsAPI';

import { BarChart, Bar, Cell, XAxis } from 'recharts';

export default function Charts({ month, year }) {
  const [transactions, setTransactions] = useState([]);
  let mas = [];

  useEffect(() => {
    let category = 'transport';
    getByCategoryMonthly({ category, year, month })
      .then(data1 => setTransactions(data1))
      .catch(error => setTransactions([]));
  }, [month, year]);
  let activeCategory = transactions.result;
  console.log('activeCategory', activeCategory);

  activeCategory?.map(el =>
    mas.push({ description: el.description, total: el.amount }),
  );
  console.log('mas', mas);

  const sortBy = field => (a, b) => a[field] < b[field] ? 1 : -1;

  const newData = mas
    ?.reduce((acc, { description, total }) => {
      const myCategory = description;
      const newArr = acc?.find(el => el.description === description);
      if (!newArr) {
        acc.push({ description: myCategory, total });
      }

      if (newArr) {
        const idx = acc.findIndex(el => el.description === description);
        acc[idx].total += total;
      }

      return acc;
    }, [])
    .sort(sortBy('total'));

  const dataChart = newData?.length ? newData : [0];
  console.log('dataChart', dataChart);

  const renderCustomizedLabel = props => {
    const { x, y, width, value } = props;

    return (
      <text
        x={x + width / 2}
        y={y}
        dy={-10}
        textAnchor="middle"
        fontSize={12}
      >{`${value}грн`}</text>
    );
  };

  //   let dataChart = [
  //     { description: 'молоко', total: 10 },
  //     { description: 'хлеб', total: 5 },
  //   ];

  return (
    <div>
      <BarChart
        data={dataChart}
        width={666}
        height={422}
        margin={{ top: 40, right: 15, bottom: 20, left: 15 }}
      >
        <Bar
          dataKey="total"
          radius={[10, 10, 0, 0]}
          barSize={38}
          label={renderCustomizedLabel}
        >
          {dataChart?.map((el, idx) => (
            <Cell key={`cell-${idx}`} fill={idx % 3 ? '#FFDAC0' : '#ff751d'} />
          ))}
        </Bar>
        <XAxis dataKey="description" axisLine={false} tickLine={false} />
      </BarChart>
    </div>
  );
}
