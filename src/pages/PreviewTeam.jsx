import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { useLocation, useParams } from "react-router-dom";
import TeamBg from "../components/TeamBg";
import { toast } from "react-toastify";
import services from "../firebase/Services";

const PreviewTeam = () => {
  const localtion = useLocation();
  const { t1, t2 } = useParams();
  const [teamUrl, setTeamUrl] = useState("");
  const team = localtion.state.team;
  const uploadVipTeam = () => {
    if (teamUrl == "") {
      return toast.warn("Please Enter Team Url");
    }
    services.uploadVipTeam(teamUrl, team).then((res) => {
      toast.success("VIP Team upload");
    });
  };
  const uploadFreeTeam = () => {
    if (teamUrl == "") {
      return toast.warn("Please Enter Team Url");
    }
    services.uploadFreeTeams(teamUrl, team).then((res) => {
      toast.success("Free Team upload");
    });
  };

  return (
    <Layout>
      <div className="w-[320px] max-sm:w-full bg-gray-100 mx-auto border  overflow-hidden my-4 h-auto">
        <div className="relative rounded   overflow-hidden h-auto mx-auto w-[360px] max-sm:w-11/12">
          <h2 className="text-3xl font-semibold my-3 text-center">
            Preview team
          </h2>
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            value={teamUrl}
            onChange={(e) => setTeamUrl(e.target.value)}
            placeholder="Team url "
            className="outline-none rounded border border-blue-400 py-1 px-2 w-11/12"
          />
        </div>

        <div className="w-[320px] max-sm:w-full bg-gray-100 mx-auto h-auto">
          {/* here is display teams */}
          {team ? <TeamBg team={team}></TeamBg> : "laoding..."}
        </div>
      </div>
      <div className="max-w-[360px] sticky bottom-2 flex justify-evenly">
        <button
          onClick={uploadFreeTeam}
          className="px-2 rounded bg-blue-600 text-white"
        >
          Save Free Team
        </button>
        <button
          onClick={uploadVipTeam}
          className="px-2 rounded bg-red-600 text-white"
        >
          Save VIP Team
        </button>
      </div>
    </Layout>
  );
};

export default PreviewTeam;
