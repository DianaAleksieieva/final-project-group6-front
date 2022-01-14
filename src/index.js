import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store, persistor } from './redux/store';
import './index.css';
import { App } from './components';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
