import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';

import App from './App';


// 引入 BrowserRouter 包裹整个应用
import { BrowserRouter } from "react-router-dom";

// 导入字体图标库的样式文件
import './assets/fonts/iconfont.css'


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
