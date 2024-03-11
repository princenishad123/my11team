import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { toast } from "react-toastify";
import services from "../firebase/Services";
import MyContext from "../context/MyContext";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [button, setButton] = useState("Login");
  const [inputType, setInputType] = useState(true);
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    setButton("Loading...");
    if (!loginData.email || !loginData.password) {
      toast.error("all field is Required");
      setButton("Login");
      return;
    }
    services
      .login(loginData)
      .then((res) => {
        const email = res.user.email;
        const uid = res.user.uid;
        localStorage.setItem("user", JSON.stringify({ email, uid }));
        setButton("Login");
        toast.success("Successfully Login");
        navigate("/");
      })
      .catch((error) => {
        if (error.code == "auth/invalid-credential") {
          toast.error("Invalid email or password");
          setButton("Login");
        }
      });
  };

  return (
    <Layout>
      <div className="max-w-[320px] mt-6 mx-auto h-auto p-2">
        <form onSubmit={login} className="flex flex-col  items-center">
          <h1 className="text-start w-4/5 font-semibold text-2xl text-red-600 my-2">
            Login
          </h1>

          <input
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            value={loginData.email}
            className="py-1 px-2 outline-none my-1 border border-blue-300 w-4/5 rounded "
            type="email"
            name="email"
            placeholder="Enter Email"
          />
          <div className="w-4/5 border overflow-hidden border-blue-300 flex items-center my-1 rounded">
            <input
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              value={loginData.password}
              className="py-1 px-2 outline-none  w-full  "
              type={inputType ? "password" : "text"}
              name="password"
              placeholder="Enter Password"
            />
            <span
              onClick={() => setInputType(!inputType)}
              className="cursor-pointer text-xl text-gray-500 pr-1"
            >
              {inputType ? <BsEye /> : <BsEyeSlash />}
            </span>
          </div>

          <div className="-ml-2">
            <p className="text-sm font-semibold my-1">
              Not have an Account ?{" "}
              <NavLink to={"/signup"} className="text-blue-500">
                Sign up
              </NavLink>
            </p>
          </div>
          <button
            type="submit"
            className="w-4/5 mt-6 rounded py-1 text-center bg-red-600 text-white"
          >
            {button}
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
