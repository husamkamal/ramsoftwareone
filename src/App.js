import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import {
  createBrowserRouter,
  RouterProvider,
  // Route, 
  // Link, 
  Outlet
} from "react-router-dom";
import Contactus from './pages/Contactus';

function App() {
  const LayOut=()=>{
    return(
    <div className="layout">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
    );
  }
  const router = createBrowserRouter([ 
    {
      path: "/",
      element: <LayOut/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/contactus",
          element:<Contactus/>
        }
      ]
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
