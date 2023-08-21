import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchedUserProfile } from "../../redux/features/user/userSlice";

function Navbar() {
  const { email } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(fetchedUserProfile());
  };

  const menuItems = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "bg-gray-900 px-5 py-2 my-auto rounded-lg text-white block w-fit m-2"
            : "text-gray-900 my-auto block w-fit m-2"
        }
      >
        Book
      </NavLink>
      {email && (
        <NavLink
          to="/add-book"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-900 px-5 py-2 my-auto rounded-lg text-white block w-fit m-2"
              : "text-gray-900 my-auto block w-fit m-2"
          }
        >
          Add Book
        </NavLink>
      )}
      <NavLink
        to="/book/wishlist"
        className={({ isActive }) =>
          isActive
            ? "bg-gray-900 px-5 py-2 my-auto rounded-lg text-white block w-fit m-2"
            : "text-gray-900 my-auto block w-fit m-2"
        }
      >
        Wishlist
      </NavLink>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
        <div onClick={() => navigate("/")} className="flex-1 cursor-pointer">
          <a className="btn btn-ghost normal-case text-xl">Love for Book</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {menuItems}
            <li>
              <details>
                <summary>Profile</summary>
                <ul className="p-2 bg-base-100">
                  {!email && (
                    <>
                      <li>
                        <Link to={"/signup"}>Sign Up</Link>
                      </li>
                      <li>
                        <Link to={"/login"}>Login</Link>
                      </li>
                    </>
                  )}
                  {email && (
                    <li className="cursor-pointer" onClick={handleLogout}>
                      Logout
                    </li>
                  )}
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
