import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-black/20" : "text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bookMarks"
          className={({ isActive }) =>
            isActive ? "bg-black/20" : "text-white"
          }
        >
          Book Marks
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myTasks"
          className={({ isActive }) =>
            isActive ? "bg-black/20" : "text-white"
          }
        >
          My Tasks
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#0077b6]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img
            src="https://res.cloudinary.com/duv5fiurz/image/upload/v1738328662/siteLogo_ttlrhg.png"
            alt="site logo"
            className="h-10 w-16"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white font-medium lg:text-lg">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
