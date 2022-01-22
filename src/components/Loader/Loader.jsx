import Kapusta from '../../images/svg/spiner-kapusta.svg';
import css from './Loader.module.css';

function Loader() {
  return (
    <div className={css.loaderWrapper}>
      <img className={css.loader} src={Kapusta} alt="Kapusta" />
      <img className={css.loader} src={Kapusta} alt="Kapusta" />
      <img className={css.loader} src={Kapusta} alt="Kapusta" />
    </div>
  );
}

export default Loader;
