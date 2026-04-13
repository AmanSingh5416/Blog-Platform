import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import HomePage from './pages/HomePage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {path: '/', element: <HomePage/>},
  {path: '/login', element: <LoginPage/>},
  {path: '/blogs', element: <BlogPage/>},
  {path: '*', element: <ErrorPage/>}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
