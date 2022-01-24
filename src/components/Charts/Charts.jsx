import { useState, useEffect } from 'react';

import { getByCategoryMonthly } from '../../api/transactionsAPI';

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
} from 'recharts';

export default function Charts({ category, month, year }) {
  const [transactions, setTransactions] = useState([]);
  let mas = [];

  useEffect(() => {
    getByCategoryMonthly({ category, year, month })
      .then(data1 => setTransactions(data1))
      .catch(error => setTransactions([]));
  }, [category, month, year]);
  let activeCategory = transactions?.result;
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

  const MobileBarLabel = ({ x, y, width, value }) => (
    <text x={x + width / 1.1} y={y} textAnchor="middle" fontSize={10} dy={-10}>
      {value ? `${value} грн` : ''}
    </text>
  );

  const MobileCategoryLabel = ({ x, y, value }) => (
    <text x={x} y={y} dy={-10} fontSize={10}>
      {value}
    </text>
  );

  const screenWidth = window.innerWidth;
  console.log('screenWidth', screenWidth);

  return screenWidth >= 768 ? (
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
  ) : (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart
        layout="vertical"
        data={dataChart}
        margin={{ top: 30, right: 0, bottom: 30, left: 0 }}
        className="chartText"
      >
        <Bar
          dataKey="total"
          barSize={18}
          radius={[0, 10, 10, 0]}
          label={<MobileBarLabel />}
          fill="#52555f"
          minPointSize={80}
        >
          {dataChart.map((el, idx) => (
            <Cell key={`cell-${idx}`} fill={idx % 3 ? '#FFDAC0' : '#ff751d'} />
          ))}
          <LabelList
            dataKey="description"
            content={<MobileCategoryLabel />}
            fill="#52555F"
          />
        </Bar>

        <XAxis type="number" hide={true} />
        <YAxis dataKey="description" type="category" scale="band" hide={true} />
      </BarChart>
    </ResponsiveContainer>
  );
}
