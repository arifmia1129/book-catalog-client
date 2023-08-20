import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signup from "../pages/Authentication/Signup";
import Login from "../pages/Authentication/Login";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
