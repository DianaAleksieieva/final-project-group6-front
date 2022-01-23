import { React, useState } from 'react';
import css from './Statistics.module.css';
import ButtonChangeCategories from '../ButtonChangeCategories';
import Charts from '../Charts/Charts';

export default function Statistics({ month, year }) {
  const [costs, setCosts] = useState(false);
  const changeStatus = () => {
    if (!costs) {
      setCosts(true);
    }
    if (costs) {
      setCosts(false);
    }
  };

  return (
    <>
      <div className={css.containerButton}>
        <ButtonChangeCategories costs={costs} changeStatus={changeStatus} />
        {/* <CategoryImage costs={costs} month={month} year={year}/> - тут должен быть компонент с категориями  */}
      </div>
      <div className={css.containerGraph}>
        {<Charts month={month} year={year} />}
      </div>
    </>
  );
}
