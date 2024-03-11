import React, { useContext, useEffect } from "react";
import MyContext from "../context/MyContext";
import { useNavigate } from "react-router-dom";

const ProtectedForAdmin = ({ Componets }) => {
  const { userData } = useContext(MyContext);
  const navigate = useNavigate();

  const adminIsLoggedIn = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (adminIsLoggedIn?.email === import.meta.env.VITE_ADMIN_EMAIL) {
      navigate("/admin");
    } else {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <Componets />
    </div>
  );
};

export default ProtectedForAdmin;
