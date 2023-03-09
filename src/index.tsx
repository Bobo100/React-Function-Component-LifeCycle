import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactDom from 'react-dom';
import './css/index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// 如果你使用嚴格模式（如第一個問題裡），React會在兩種模式下分別調用2次effect/callback。
// 當Effective产生副作用时，在开发环境下会输出两次。 
// 第一次紧跟DOM渲染，第二次在DOM更新后紧接着调用。
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode> 
);

// 3秒後unmount (unmount意思是把component從DOM tree中移除)
// setTimeout(() => {
//   root.unmount();
// }, 3000);