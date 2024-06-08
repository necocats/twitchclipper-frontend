import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './index.css'
import "bootstrap"; // 追加
import "bootstrap/dist/css/bootstrap.min.css"; // 追加
import 'bootstrap-icons/font/bootstrap-icons.css'; // 追加
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);