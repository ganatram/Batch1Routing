import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
// import { Header } from './Header';
import { App } from './App';
import { ProductPage } from './pages/ProductPage';
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage';

const myRouterTree = createBrowserRouter([
  {
    path: '/', // tracks the BrowseURl state
    element: <App />, // provides the relevant component
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: 'products', // tracks the BrowseURl state
        element: <ProductsPage />, // provides the relevant component
      },
      {
        path: 'products/:id', // {id:1}
        element: <ProductPage />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={myRouterTree} />;
}
