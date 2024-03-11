import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../context/MyContext";

const ProtectedVipTeam = ({ Components }) => {
  const { isVipMember, setIsVipMember, isLoggedIn } = useContext(MyContext);

  const isLogedIn = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogedIn) {
      navigate("/login");
    } else if (isVipMember?.length == 0) {
      navigate("/invite");
    }
  }, []);
  return (
    <div>
      <Components />
    </div>
  );
};

export default ProtectedVipTeam;
