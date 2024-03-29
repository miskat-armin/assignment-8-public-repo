import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import Donation from '../pages/Donation/Donation';
import Statistics from '../pages/Statistics/Statistics';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Category from '../pages/Category/Category';

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/categories.json')
      },
      {
        path: "/donation",
        element: <Donation></Donation>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch('/categories.json')
      },
      {
        path: "/category/:title",
        element: <Category></Category>,
        loader: () => fetch('/categories.json')
      }


    ]

  },
]);

export default myCreatedRoute;