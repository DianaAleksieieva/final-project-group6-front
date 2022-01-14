import css from './Hero.module.css';
import hero from '../../images/svg/hero.svg';

function Hero() {
  return (
    <div className={css.hero}>
      <img className={css.image} src={hero} alt="Hero" />
      <h1 className={css.tagline}>Smart Finance</h1>
    </div>
  );
}

export default Hero;
