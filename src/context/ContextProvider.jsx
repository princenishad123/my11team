import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import services from "../firebase/Services";

const ContextProvider = ({ children }) => {
  const [togler, setTogler] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [userData, setUserData] = useState("");
  const [isVipMember, setIsVipMember] = useState(false);

  useEffect(() => {
    try {
      services.invitecodeValidation(userData?.myRaferCode).then((res) => {
        setIsVipMember(res);
      });
    } catch (error) {}
  }, [userData]);

  return (
    <MyContext.Provider
      value={{
        togler,
        setTogler,
        isLoggedIn,
        setIsLoggedIn,
        userData,
        setUserData,
        isVipMember,
        setIsVipMember,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
