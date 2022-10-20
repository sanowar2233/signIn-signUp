import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Registration from './Components/Registration/Registration'
import Inventory from  './Components/Inventory/Inventory'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Others from './Components/Others/Others';



function App() {
  const router=createBrowserRouter([
    {path:'/', element:<Main></Main>, children:[
     {
      path:'/about',element:<PrivateRoute><About></About></PrivateRoute>
     },
     {
      path:'/home', element:<Home></Home>
     },
     {
      path:'/login', element:<Login></Login>
     },
     {
      path:'/registration', element:<Registration></Registration>
     },
     {
      path:'/inventory', element:<Inventory></Inventory>
     },
     {
      path:'/others', element:<PrivateRoute><Others></Others></PrivateRoute>
     }
     
  ]}

  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
