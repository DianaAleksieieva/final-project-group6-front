import css from './StatisticCategories.module.css';
import iconsContainer from '../../../utils/statisticComponents';
import { useEffect, useState } from 'react';
import { getByTypeMonthly } from '../../../api/transactionsAPI';
import { ReactComponent as BgStatisric } from '../../../images/svg/statistics/bg-statisric-ico.svg';

export default function StatisticCategories({
  transactionType,
  month,
  year,
  changeCategory,
}) {
  const { type } = transactionType;
  const [monthTransactionsByType, setMonthTransactionsByType] = useState([]);
  const [activeBackground, setActiveBackground] = useState(null);

  async function fetchMonthlyDataLoc(type, year, month) {
    const data = await getByTypeMonthly({ type, year, month });
    return data.categories;
  }

  useEffect(() => {
    async function fetchData() {
      const data = await fetchMonthlyDataLoc(type, year, month);
      setMonthTransactionsByType(data);
    }
    fetchData();
  }, [month, type, year]);

  function getResultArray() {
    let newArr = [];
    const keys = Object.keys(monthTransactionsByType);
    const values = Object.values(monthTransactionsByType);

    keys.forEach(function (item, i) {
      newArr.push({ CatName: item, Amount: values[i].sum });
    });

    return newArr;
  }

  // console.log('result', getResultArray());

  function res(iconsContainer) {
    let arr = [];

    if (monthTransactionsByType) {
      const result = getResultArray();

      if (result && result !== []) {
        result.map(item =>
          arr.push(
            ...iconsContainer.filter(function (el) {
              return el.CatName === item.CatName;
            }),
          ),
        );

        arr = arr.map(function (item, i) {
          return (item = { ...item, ...result[i] });
        });
      }
    }

    return arr;
  }

  return (
    <div>
      <ul className={css.statistics_list}>
        {res(iconsContainer).map((item, index) => (
          <li className={css.statistics_item} key={index}>
            <span className={css.labels_style}>{item.Amount}</span>
            <div className={css.wrapper_icon}>
              <BgStatisric
                className={
                  activeBackground === index
                    ? css.wrapper_background
                    : css.background_hide
                }
              />
              <button
                className={
                  activeBackground !== index
                    ? css.statistics_icon
                    : css.statistics_icon_active
                }
                onClick={() => {
                  changeCategory(item.CatName);
                  setActiveBackground(index);
                }}
              >
                {item.Component}
              </button>
            </div>
            <span className={css.labels_style}>{item.CatLabel}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
