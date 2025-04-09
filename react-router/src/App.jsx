
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import Layout from './wrappers/Layout';

const router = createBrowserRouter([
  {
      path:'/',
      element:<Layout/>,
      children:
      [
        {
          path:'',
          element:<Home/>
        },
        {
          path:'register',
          element:<Register/>
        },
        {
          path:'login',
          element:<Login />
        }
      ]
  }
  
], {
     future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
     }
    }
);


const App = () => {
  return<RouterProvider router={router}
  future={{
    v7_startTransition: true,
  }}
  />;
}

export default App