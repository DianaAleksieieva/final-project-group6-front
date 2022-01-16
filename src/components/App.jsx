import css from './App.module.css';
import { Header, Body, Footer, DayPicker } from '.';

function App() {

  return (
    <div className={css.app}>
      <div className={css.container}>
        <Header />
        <Body />
        <DayPicker />
        <Footer />
      </div>
    </div>
  );
}

export default App;
