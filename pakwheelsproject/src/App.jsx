import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import AddCarForm from "./components/AddCarForm"
import CarDetails from "./components/CarDetails"
import Cars from "./components/Cars";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path:'/cars',
      element:<Cars/>
    },
    {
     path:'/AddCarForm',
     element:<AddCarForm/>,
    },
    {
      path:'/about',
      element:<About/>,
    },
    {
      path:'/car/:id',
      element:<CarDetails/>,
    },

  ])

  return <RouterProvider router={router}/>

}

export default App;