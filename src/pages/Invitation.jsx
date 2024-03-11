import React, { useContext, useState } from "react";
import Layout from "../components/Layout/Layout";
import MyContext from "../context/MyContext";
import { toast } from "react-toastify";

const Invitation = () => {
  const { userData } = useContext(MyContext);
  const [button, setButton] = useState("COPY INVITE CODE");
  const copyInviteCode = () => {
    navigator.clipboard.writeText(
      `http://my11team.online/signup/invite-code/${userData.myRaferCode}`
    );
    setButton("COPYED");
    setTimeout(() => {
      setButton("COPY INVITE CODE");
    }, 1000);
    toast.success("copyed");
  };
  return (
    <Layout>
      <div className="max-w-[360px] h-screen border">
        <div className="w-full h-[60vh] inviteTheme">
          <h2 className="text-2xl font-semibold text-center text-gray-100 py-3">
            Rafer Your 1 Friends to Unlock VIP Team{" "}
          </h2>
          <div className="w-36 h-36 mx-auto">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/referral-8292436-6612665.png?f=webp"
              className="w-36"
              alt=""
            />
          </div>
          <div className="w-4/5 rounded relative h-auto border-dashed border mx-auto py-1">
            <p className="text-white text-sm text-center">My Referal Code</p>
            <h1 className="text-center text-2xl font-semibold text-gray-50 tracking-widest">
              {userData?.myRaferCode}
            </h1>
          </div>
        </div>
        <div className="w-4/5 my-3 bg-blue-700 rounded font-semibold text-white h-auto border flex justify-center mx-auto">
          <button
            onClick={copyInviteCode}
            className="py-1 uppercase px-3 rounded "
          >
            {button}
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Invitation;
