import React from "react";
import Layout from "../components/Layout/Layout";

const MyVipTeams = () => {
  return (
    <Layout>
      <div className="max-w-[360px]">
        <div className="w-full max-sm:w-full  mx-auto h-auto">
          {/* here is display teams */}
          <TeamBg team={team}></TeamBg>
        </div>
      </div>
    </Layout>
  );
};

export default MyVipTeams;
