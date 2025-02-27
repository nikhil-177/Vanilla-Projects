import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { AppLayout } from "./components/layout/AppLayout";

const App = () => {

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
   
  ]);

  return  <RouterProvider router={router} />;
};

export default App;