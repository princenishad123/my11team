import React, { useContext, useState } from "react";
import MyContext from "../../context/MyContext";
import { NavLink } from "react-router-dom";
import services from "../../firebase/Services";

const Sidebar = () => {
  const { togler, isLoggedIn } = useContext(MyContext);
  const [isAdmin, setIsAdmin] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <div
      style={{ minHeight: "100vh" }}
      className={`w-56 max-sm:w-[60%] z-30 fixed transition-all top-14 bg-white border left-0 ${
        togler ? "-ml-[300px]" : "ml-0"
      }`}
    >
      <ul className="p-3">
        {user ? (
          ""
        ) : (
          <NavLink to={"/login"}>
            <li className=" my-3 mx-2 px-1 font-semibold uppercase ">Login</li>
          </NavLink>
        )}

        {user ? (
          ""
        ) : (
          <NavLink to={"/signup"}>
            <li className=" my-3 mx-2 px-1 font-semibold uppercase ">
              Sign Up
            </li>
          </NavLink>
        )}

        {user ? (
          <NavLink to={"/account"}>
            <li className=" my-3 mx-2 px-1 font-semibold uppercase ">
              Account
            </li>
          </NavLink>
        ) : (
          ""
        )}
        {isAdmin?.email === import.meta.env.VITE_ADMIN_EMAIL ? (
          <NavLink to={"/admin"}>
            <li className=" my-3 mx-2 px-1 font-semibold uppercase ">Admin</li>
          </NavLink>
        ) : (
          ""
        )}
        {user ? (
          <NavLink to={"/invite"}>
            <li className=" my-3 mx-2 px-1 font-semibold uppercase ">
              Invite Friends
            </li>
          </NavLink>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
