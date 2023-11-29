import { useRoutes } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/Home";
import RegisterPage from "../pages/regiester";
import NavlinkActive from "../components/NavlinkActive.jsx";
import OutletChild from "./outletChild";

const RouterPage = () => {
  const elements = useRoutes([
    {
      path:"/",
       element: (
        <OutletChild>
          <NavlinkActive />
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
