import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './application/App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root.tsx';
import ErrorPage from './application/pages/error-page/error-page.tsx';
import { Welcome } from "./application/pages/Welcome/Welcome.tsx";

const router = createBrowserRouter([
  { 
    path: "/intro", 
    element: <App />,
    children: [
      {
        path: "/intro",
        element: <Welcome/>,
      },
    ],
  },
  {
    path: "/test",
    element: <Root />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

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
