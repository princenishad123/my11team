import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import services from "../firebase/Services";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { toast } from "react-toastify";
const SignUp = () => {
  const [inputType, setInputType] = useState(true);
  const [button, setButton] = useState("Sign Up");
  const { code } = useParams();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    inviteCode: code ? code : "PR9950",
  });
  const navigate = useNavigate();
  const signup = (e) => {
    e.preventDefault();
    setButton("Loading...");
    if (
      !userData.name ||
      !userData.email ||
      !userData.password ||
      !userData.confirmPassword
    ) {
      toast.error("all field is required");
      setButton("Sign up");
      return;
    } else if (userData.password != userData.confirmPassword) {
      toast.error("Password did not match");
      setButton("Sign up");

      return;
    }

    const randomNum = Math.floor(Math.random() * 9000 + 1000).toString();
    const referCode = userData.name.slice(0, 2).toUpperCase() + randomNum;
    console.log(referCode);

    services
      .signup(userData)
      .then((res) => {
        toast.success("Sign up successfull");
        setButton("Sign up");
        navigate("/login");

        let uid = res.user.uid;
        services.users(uid, referCode, userData);
      })
      .catch((error) => {
        console.log(error.code);
        if (error.code == "auth/email-already-in-use") {
          toast.error("Email already used");
          setButton("Sign up");
        } else {
          setButton("Sign up");
          toast.error("something went wrong");
        }
      });
  };
  return (
    <Layout>
      <div className="max-w-[320px] mt-6 mx-auto h-auto p-2">
        <form onSubmit={signup} className="flex flex-col  items-center">
          <h1 className="text-start w-4/5 font-semibold text-2xl text-red-600 my-2">
            Sign Up
          </h1>
          <input
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            value={userData.name}
            className="py-1 px-2 outline-none my-1 border border-blue-300 w-4/5 rounded "
            type="text"
            name="name"
            placeholder="Enter Name"
          />
          <input
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            value={userData.email}
            className="py-1 px-2 outline-none my-1 border border-blue-300 w-4/5 rounded "
            type="email"
            name="email"
            placeholder="Enter Email"
          />
          <div className="w-4/5 border overflow-hidden border-blue-300 flex items-center my-1 rounded">
            <input
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              value={userData.password}
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
          <div className="w-4/5 border overflow-hidden border-blue-300 flex items-center my-1 rounded">
            <input
              onChange={(e) =>
                setUserData({ ...userData, confirmPassword: e.target.value })
              }
              value={userData.confirmPassword}
              className="py-1 px-2 outline-none  w-full  "
              type={inputType ? "password" : "text"}
              name="password"
              placeholder="Enter Confirm Password"
            />
            <span
              onClick={() => setInputType(!inputType)}
              className="cursor-pointer text-xl text-gray-500 pr-1"
            >
              {inputType ? <BsEye /> : <BsEyeSlash />}
            </span>
          </div>

          <input
            onChange={(e) =>
              setUserData({ ...userData, inviteCode: e.target.value })
            }
            value={userData.inviteCode}
            className="py-1 px-2 outline-none my-1 border border-blue-300 w-4/5 rounded "
            type="text"
            name="invite-code"
            placeholder="Enter Invite code"
          />
          <div className="-ml-2">
            <p className="text-sm font-semibold my-1">
              Already have an account ?{" "}
              <NavLink to={"/login"} className="text-blue-500">
                Login{" "}
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

export default SignUp;
