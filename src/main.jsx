import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/HomePage/Home';
import BuildForm from './pages/FormBuildPage/BuildForm';
import Preview from './pages/PreviewPage/Preview';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: 'build-form',
    element: <BuildForm></BuildForm>
  },
  {
    path: 'preview-form',
    element: <Preview></Preview>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
