import React, { useContext } from "react";
import Navbar from "./Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import MyContext from "../../context/MyContext";

const Layout = ({ children }) => {
  const { togler, setTogler } = useContext(MyContext);
  document.body.addEventListener("click", () => {
    if (togler == false) {
      setTogler(true);
    }
  });
  return (
    <div>
      <Navbar />

      <Sidebar />

      <main className="w-full" style={{ minHeight: "80vh" }}>
        {children}
        <ToastContainer />
      </main>
    </div>
  );
};

export default Layout;
