import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";

const Admin = () => {
  let iplTeam = [
    "csk",
    "dc",
    "gt",
    "kkr",
    "lsg",
    "mi",
    "pkbs",
    "rr",
    "sh",
    "rcb",
  ];

  const [battle, setBattle] = useState([]);
  const handleBattle = (e) => {
    if (battle.length >= 2) {
      toast.info("2 teams Selected");
    } else {
      setBattle([...battle, e.target.innerHTML]);
    }
  };

  const navigate = useNavigate();

  const continueBtn = () => {
    if (battle.length != 0) {
      navigate(`/select-teams/${battle[0]}/${battle[1]}`);
    } else {
      toast.info("Please select Team");
    }
  };

  return (
    <Layout>
      <div className="max-w-[360px] mx-auto h-auto ">
        <div className="flex flex-wrap gap-2 justify-center">
          {iplTeam.map((e, index) => (
            <button
              onClick={handleBattle}
              className={`py-1 my-1 w-32  mx-1 border uppercase rounded font-semibold ${
                battle.includes(e) ? "bg-green-100" : ""
              }`}
              key={index}
            >
              {e}
            </button>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <button
            className="bg-red-500 text-white rounded my-1 py-1 w-56 mx-auto"
            onClick={() => setBattle([])}
          >
            Clear Team
          </button>

          <button
            onClick={continueBtn}
            className="bg-green-600 text-center rounded my-1 text-white py-1 w-56 mx-auto"
          >
            Continue
          </button>
          <div className="flex justify-center">
            <NavLink to={`/lineup/${battle[0]}/${battle[1]}`}>
              <button className="bg-green-600 text-center rounded my-1 text-white py-1 w-56  mx-auto">
                Go to lineup
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
