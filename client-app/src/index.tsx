import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
import 'react-calendar/dist/Calendar.css'
import './app/layout/styles.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import { StoreContext, store } from './app/stores/store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StoreContext.Provider value={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreContext.Provider>
);

// ReactDOM.render(
//   <StoreContext.Provider value={store}>
//     <App />
//   </StoreContext.Provider>
//   document.getElementById('root') as HTMLElement
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
