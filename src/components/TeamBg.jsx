import React, { useEffect, useState } from "react";
import PlayerInfo from "./PlayerInfo";
import { toast } from "react-toastify";
import { Link, NavLink } from "react-router-dom";

const TeamBg = ({ team, teamUrl }) => {
  const [wicketKeeper, setWicketKeeper] = useState([]);
  const [batter, setBatter] = useState([]);
  const [allRounder, setAllRounder] = useState([]);
  const [bowler, setBowler] = useState([]);

  useEffect(() => {
    let batter = team?.filter((e) => {
      if (e.position == "batter") {
        return e;
      }
    });
    let wicket = team?.filter((e) => {
      if (e.position == "wicket-keeper") {
        return e;
      }
    });
    let all = team?.filter((e) => {
      if (e.position == "bowler") {
        return e;
      }
    });
    let bow = team?.filter((e) => {
      if (e.position == "all-rounder") {
        return e;
      }
    });

    setAllRounder(all);
    setBatter(batter);
    setBowler(bow);
    setWicketKeeper(wicket);
  }, []);

  const copyTeam = () => {
    navigator.clipboard.writeText(teamUrl);
    toast.success("Team C");
  };

  return (
    <>
      <div className="w-full rounded overflow-hidden flex justify-center mt-2">
        <NavLink
          to={teamUrl}
          className={
            "border px-4 border-blue-600 bg-blue-50 font-semibold py-1 rounded"
          }
        >
          Click Here To Pick team
        </NavLink>
      </div>
      <div className="w-full h-full rounded bg-green-500 relative flex items-center">
        <div className="w-11/12 min-h-[70vh] border border-gray-100 opacity-25 mx-auto flex items-center rounded-[120px]"></div>

        <div className="w-full h-[90vh] absolute   top-0  ">
          <div className="h-auto w-full relative ">
            {/* wicket keeper */}
            <div className="w-full  relative min-h-20 p-2">
              <h3 className="text-[12px] w-full  font-semibold top-0 text-center mx-auto text-white">
                WICKET-KEEPERS
              </h3>
              <div className="w-full flex justify-evenly gap-2 min-h-20 flex-wrap ">
                {wicketKeeper.map((t, index) => (
                  <PlayerInfo team={t} key={index} />
                ))}
              </div>
            </div>
            {/* batters */}
            <div className="w-full  relative min-h-20 p-2">
              <h3 className="text-[12px] w-full  font-semibold top-0 text-center mx-auto text-white">
                BATTERS
              </h3>
              <div className="w-full flex justify-evenly gap-2 min-h-20 flex-wrap ">
                {batter.map((t, index) => (
                  <PlayerInfo team={t} key={index} />
                ))}
              </div>
            </div>

            {/* All rounded */}
            <div className="w-full  relative min-h-20 p-2">
              <h3 className="text-[12px] w-full  font-semibold top-0 text-center mx-auto text-white">
                ALL-ROUNDER
              </h3>
              <div className="w-full flex justify-evenly gap-2 min-h-20 flex-wrap ">
                {bowler.map((t, index) => (
                  <PlayerInfo team={t} key={index} />
                ))}
              </div>
            </div>
            {/* Bowler */}
            <div className="w-full  relative min-h-20 p-2">
              <h3 className="text-[12px] w-full  font-semibold top-0 text-center mx-auto text-white">
                BOWLER
              </h3>
              <div className="w-full flex justify-evenly gap-2 min-h-20 flex-wrap ">
                {allRounder.map((t, index) => (
                  <PlayerInfo team={t} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamBg;
