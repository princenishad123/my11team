import React, { useContext, useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import MyContext from "../../context/MyContext";
import { NavLink } from "react-router-dom";
import services from "../../firebase/Services";
import logo from "../../assets/logo.webp";

const Navbar = () => {
  const { togler, setTogler, isLoggedIn } = useContext(MyContext);
  const [isAdmin, setIsAdmin] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const logOut = () => {
    services.logout().then((res) => {
      localStorage.clear();
    });
  };

  return (
    <>
      <nav className="w-full bg-white sticky top-0 z-30 h-14 flex items-center justify-between px-10 shadow-lg max-md:px-2">
        <div className="w-44 max-md:w-full overflow-hidden  h-10 flex  justify-between flex-row-reverse items-center">
          <button
            onMouseDown={() => setTogler(!togler)}
            className="text-3xl md:hidden"
          >
            {togler ? <HiOutlineBars3 /> : <RxCross2 />}
          </button>

          <div className="w-44">
            <NavLink to={"/"}>
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
        </div>

        <ul className="max-md:hidden">
          {user ? (
            ""
          ) : (
            <NavLink to={"/login"}>
              <li className="inline-block mx-2 px-1 font-semibold uppercase ">
                Login
              </li>
            </NavLink>
          )}

          {isAdmin?.email === import.meta.env.VITE_ADMIN_EMAIL ? (
            <NavLink to={"/admin"}>
              <li className=" inline-block mx-2 px-1 font-semibold uppercase  ">
                Admin
              </li>
            </NavLink>
          ) : (
            ""
          )}

          {user ? (
            ""
          ) : (
            <NavLink to={"/signup"}>
              <li className="inline-block mx-2 px-1 font-semibold uppercase ">
                Sign up
              </li>
            </NavLink>
          )}
          {user ? (
            <NavLink to={"/account"}>
              <li className="inline-block mx-2 px-1 font-semibold uppercase ">
                Account
              </li>
            </NavLink>
          ) : (
            ""
          )}

          {user ? (
            <li
              onClick={logOut}
              className="inline-block mx-2 cursor-pointer px-1 font-semibold uppercase"
            >
              Logout
            </li>
          ) : (
            ""
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
