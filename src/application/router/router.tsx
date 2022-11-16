import React from 'react';
import App from '../../application/App';
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/error-page/error-page.tsx';
import { Welcome } from "../pages/welcome-page/Welcome.tsx";

export const router = createBrowserRouter([
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
    path: "/*",
    element: <ErrorPage />,
  },
]);
