import { useRoutes } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/Home";
import RegisterPage from "../pages/regiester";

const RouterPage = () => {
  const elements = useRoutes([
    {
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
      ],
    },
  ]);
  return elements;
};

export default RouterPage;
