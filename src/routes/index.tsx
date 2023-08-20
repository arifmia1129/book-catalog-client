import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signup from "../pages/Authentication/Signup";
import Login from "../pages/Authentication/Login";
import NotFound from "../pages/NotFound/NotFound";
import AddBook from "../pages/AddBook/AddBook";
import Book from "../pages/Book/Book";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Book />,
      },
      {
        path: "/add-book",
        element: <AddBook />,
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
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
