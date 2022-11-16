import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './application/App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './application/pages/error-page/error-page.tsx';
import { Welcome } from "./application/pages/welcome-page/Welcome.tsx";
import { router } from "./application/router/router.tsx"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
