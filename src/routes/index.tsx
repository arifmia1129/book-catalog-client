import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signup from "../pages/Authentication/Signup";

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
]);

export default router;
