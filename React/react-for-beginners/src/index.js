import React from 'react';
import ReactDOM from 'react-dom';
  // import './index.css';  불필요한 코드 제거
import App from './App';
  // import reportWebVitals from './reportWebVitals';


// React.js 18 업데이트 이후 ReactDOM.render is no longer supported in React 18 에러 해결
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// [React.js 17]
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

  // // If you want to start measuring performance in your app, pass a function
  // // to log results (for example: reportWebVitals(console.log))
  // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  // reportWebVitals();
