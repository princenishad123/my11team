import React, { useEffect, useState } from "react";
import TeamBg from "../components/TeamBg";
import Layout from "../components/Layout/Layout";
import services from "../firebase/Services";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

const VipTeam = () => {
  // const team = [
  //   {
  //     id: 1,
  //     name: "Virat Kohali",
  //     position: "batter",
  //   },
  //   {
  //     id: 2,
  //     name: "Rohit sharma",
  //     position: "batter",
  //   },

  //   {
  //     id: 4,
  //     name: "shubhman gil",
  //     position: "batter",
  //   },
  //   {
  //     id: 5,
  //     name: "Rishav pant",
  //     position: "wicket-keeper",
  //   },
  //   {
  //     id: 6,
  //     name: "ms dhoni",
  //     position: "wicket-keeper",
  //   },
  //   {
  //     id: 7,
  //     name: "devon konway",
  //     position: "wicket-keeper",
  //   },
  //   {
  //     id: 8,
  //     name: "hardik Pandaya",
  //     position: "all-rounder",
  //   },
  //   {
  //     id: 9,
  //     name: "moen ali",
  //     position: "all-rounder",
  //   },
  //   {
  //     id: 10,
  //     name: "rasid khan",
  //     position: "bowler",
  //   },
  //   {
  //     id: 11,
  //     name: "avesh khan",
  //     position: "bowler",
  //   },
  //   {
  //     id: 12,
  //     name: "harshal Patel",
  //     position: "bowler",
  //   },
  // ];

  const [team, setTeam] = useState(null);

  useEffect(() => {
    services.getVipTeams().then((res) => {
      setTeam(res);
    });
  }, []);

  return (
    <Layout>
      <div>
        <div className="w-[320px] max-sm:w-full bg-gray-100 mx-auto border border-red-500 overflow-hidden my-4 h-auto">
          <div className="relative rounded   overflow-hidden h-auto mx-auto w-[360px] max-sm:w-11/12">
            <h2 className="text-3xl font-semibold my-3 text-center">
              👇 VIP Teams👇
            </h2>
          </div>
          <h1 className="text-center text-2xl my-2 font-bold text-red-500">
            Important Notice
          </h1>
          <h1 className="text-xl text-center font-semibold">
            Team will be update after lineup
          </h1>
          <div className="w-[320px] max-sm:w-full bg-gray-100 mx-auto h-auto">
            {/* here is display teams */}
            {team ? (
              <TeamBg teamUrl={team.url} team={team.teams}></TeamBg>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VipTeam;
