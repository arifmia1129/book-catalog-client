import { NavLink } from "react-router-dom";

function Navbar() {
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
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Love for Book</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {menuItems}
            <li>
              <details>
                <summary>Profile</summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
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
