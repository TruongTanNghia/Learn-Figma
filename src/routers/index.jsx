import { useRoutes } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/Home";
import RegisterPage from "../pages/regiester";
import OutletChild from "./outletChild";
import Navbar from "../components/Navbar.jsx";

const RouterPage = () => {
  const elements = useRoutes([
    {
      path:"/",
       element: (
        <OutletChild>
          <Navbar />
        </OutletChild>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "Login",
          element: <Login />,
        },
        {
          path: "Register",
          element: <RegisterPage />,
        },
      ],
    },
  ]);
  return elements;
};

export default RouterPage;
