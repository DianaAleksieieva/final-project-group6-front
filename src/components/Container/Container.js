import css from './Container.module.css';

export default function Container({ children }) {
  return <div className={css.container}>{children}</div>;
}
