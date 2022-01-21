import { React } from 'react';
import { ReactComponent as ArrowLeft } from '../../images/svg/ArrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../images/svg/ArrowRight.svg';
import css from './ButtonChangeCategories.module.css';

const ButtonChangeCategories = ({ costs, changeStatus }) => {
  // const [costs, setCosts] = useState(false);
  // const onClick = () => {
  //   if (!costs) {
  //     setCosts(true);
  //   }
  //   if (costs) {
  //     setCosts(false);
  //   }
  // };

  return (
    <div className={css.container}>
      <button className={css.button} onClick={changeStatus}>
        <ArrowLeft className={css.color} />
      </button>

      {!costs ? (
        <p className={css.text}>Доходы</p>
      ) : (
        <p className={css.text}>Paсходы</p>
      )}

      <button className={css.button} onClick={changeStatus}>
        <ArrowRight className={css.color} />
      </button>
    </div>
  );
};
export default ButtonChangeCategories;
