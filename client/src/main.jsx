import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Gallery from './views/Gallery_view.jsx/Gallery.jsx';
import Profile from './components/sections/Profile.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App>{<Profile />}</App>,
  },
  {
    path: '/gallery',
    element: <App>{<Gallery />}</App>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
