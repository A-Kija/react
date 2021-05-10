import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import basic from './store/basic';


ReactDOM.render(
  <Provider store={basic}>
    <App />
  </Provider>,
  document.getElementById('root')
);



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


