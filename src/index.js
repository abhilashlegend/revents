import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-calendar/dist/Calendar.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store/config';
import ScrollToTop from './components/navigation/scrollToTop';


const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
     <BrowserRouter>
     <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
