import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signup from "../pages/Authentication/Signup";
import Login from "../pages/Authentication/Login";
import NotFound from "../pages/NotFound/NotFound";
import AddBook from "../pages/AddBook/AddBook";
import Book from "../pages/Book/Book";
import PrivateRoute from "./PrivateRoute";
import BookDetails from "../pages/Book/BookDetails";
import EditBook from "../pages/Book/EditBook";
import Wishlist from "../pages/Wishlist/Wishlist";
import ReadingList from "../pages/ReadingList/ReadingList";

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
        path: "/book/:id",
        element: <BookDetails />,
      },
      {
        path: "/book/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/book/reading-list",
        element: <ReadingList />,
      },
      {
        path: "/add-book",
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-book/:id",
        element: (
          <PrivateRoute>
            <EditBook />
          </PrivateRoute>
        ),
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
