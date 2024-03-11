import React, { useContext, useEffect } from "react";
import MyContext from "../context/MyContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ Components }) => {
  const isLoggedIn = localStorage.getItem("user");
  const { isVipMember, setIsVipMember } = useContext(MyContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Components />
    </>
  );
};

export default ProtectedRoutes;
