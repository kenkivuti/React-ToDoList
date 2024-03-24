import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ContactUs from './Pages/ContactUs.tsx';
import AboutUs from './Pages/AboutUs.tsx';
import 'bootstrap/dist/css/bootstrap.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/About",
    element: <AboutUs/>,
  },
  {
    path: "/ContactUs",
    element: <ContactUs/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
