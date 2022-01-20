import { React, useState } from 'react';
import css from './Statistics.module.css';
import ButtonChangeCategories from '../ButtonChangeCategories';

export default function Statistics() {
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
        {/* <CategoryImage/> - тут должен быть компонент с категориями  */}
      </div>
      <div className={css.containerGraph}>
        {/* <Graph/> - тут должны быть графики для описаний */}
      </div>
    </>
  );
}
