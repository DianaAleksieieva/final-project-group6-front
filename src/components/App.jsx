import css from './App.module.css';
import { Header, Body, Footer } from '.';

function App() {
  return (
    <div className={css.app}>
      <div className={css.container}>
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
