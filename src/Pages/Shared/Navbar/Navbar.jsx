import { Link } from "react-router-dom";

const Navbar = () => {
  const Navlinks = (
    <>
      <li className="p-2">
        <Link to="" className="text-gray-700 hover:text-purple-600 transition-all">
          Home
        </Link>
      </li>
      <li className="p-2">
        <Link to="" className="text-gray-700 hover:text-purple-600 transition-all">
          About
        </Link>
      </li>
      <li className="p-2">
        <Link to="" className="text-gray-700 hover:text-purple-600 transition-all">
          Task
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-gray-100 p-4 shadow-neumorphic">
      <div className="navbar flex items-center justify-between">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden shadow-inner hover:shadow-neumorphic-hover transition-shadow p-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-neumorphic bg-gray-100 rounded-xl"
            >
              {Navlinks}
            </ul>
          </div>
          <a className="btn text-purple-500 font-bold text-xl shadow-inner hover:shadow-neumorphic-hover p-2 rounded-lg transition-shadow">
            WebTree
          </a>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-2 space-x-4">{Navlinks}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <a className="btn bg-purple-500 text-white rounded-lg shadow-inner hover:shadow-neumorphic-hover p-3 transition-shadow">
            Let's Start
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
