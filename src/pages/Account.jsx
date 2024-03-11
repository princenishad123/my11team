import React, { useContext } from "react";
import Layout from "../components/Layout/Layout";
import services from "../firebase/Services";
import { useNavigate } from "react-router-dom";
import MyContext from "../context/MyContext";

const Account = () => {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(MyContext);
  const logout = () => {
    services.logout().then((res) => {
      localStorage.clear();
      navigate("/");
    });
  };
  return (
    <Layout>
      <div className="max-w-[360px]  h-auto px-2 py-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 border border-blue-200 rounded-full overflow-hidden">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/user-3711850-3105265.png?f=webp"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">{userData?.name}</h2>
            <h2>{userData?.email}</h2>
          </div>
        </div>

        <div className="w-full min-h-40 mt-3">
          <h2 className="font-semibold">My information</h2>
          <div className="flex justify-between my-2 px-3">
            <h1 className="font-semibold">user ID </h1>
            <h1>{userData?.userId}</h1>
          </div>
          <div className="flex justify-between my-2 px-3">
            <h1 className="font-semibold">Name </h1>
            <h1>{userData?.name}</h1>
          </div>
          <div className="flex justify-between my-2 px-3">
            <h1 className="font-semibold">Email </h1>
            <h1>{userData?.email}</h1>
          </div>
          <div className="flex justify-between my-2 px-3">
            <h1 className="font-semibold">Invite Code </h1>
            <h1>{userData?.myRaferCode}</h1>
          </div>
        </div>

        <div className="w-full my-4 flex justify-center">
          <button
            onClick={logout}
            className="w-4/5 rounded border border-red-500 px-6 py-1 mx-auto text-center"
          >
            Log Out{" "}
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Account;
