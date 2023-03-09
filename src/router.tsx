import { createBrowserRouter, Navigate } from 'react-router-dom';
import { App } from './App';
import { Main, Auth, Cart } from './ui';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Navigate to={'home'} />,
      },
      {
        path: '/*',
        element: <Navigate to={'home'} />,
      },
      {
        path: 'home',
        element: <Main />,
      },
      {
        path: 'auth',
        element: <Auth />,
      },
      {
        path: 'user',
        element: <>user</>,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
]);
