import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { DiTechcrunch } from "react-icons/di";

const Navbar = () => {
  const { user, logOutForm } = useAuth();

  const logOutHandler = () => {
    logOutForm().then().catch();
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {/* <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li> */}
    </>
  );
  return (
    <>
      <div>
        <div className="navbar shadow-lg">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl uppercase"
              >
                {navLinks}
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="
                btn
                btn-outline
                btn-warning
                text-3xl mr-2"
              >
                <DiTechcrunch></DiTechcrunch>
              </button>
              <Link className="text-2xl font-bold">
                <p>
                  <span className="text-[#FD367E] mr-0">T</span>ech
                </p>
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl uppercase">
              {navLinks}
            </ul>
          </div>
          <div className="navbar-end">
            <div>{user?.name}</div>
            {user ? (
              <button
                onClick={logOutHandler}
                className="btn bg-[#4e1184] text-white hover:bg-[#4e1184] hover:text-white"
              >
                LogOut
              </button>
            ) : (
              <Link to="/login">
                <button className="btn bg-[#4e1184] text-white hover:bg-[#4e1184] hover:text-white">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Navbar;
