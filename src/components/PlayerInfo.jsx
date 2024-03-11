import React from "react";

const PlayerInfo = ({ team }) => {
  return (
    <div className="w-[62px] my-1 h-[66px] flex flex-col justify-center items-center">
      <div className="w-12  h-12 overflow-hidden rounded-full">
        <img src={team.image} alt="" />
      </div>
      <div className="w-[70px] px-1 bg-black text-white h-auto rounded-sm">
        <h2 className="truncate text-center text-[12px]">{team?.name}</h2>
      </div>
    </div>
  );
};

export default PlayerInfo;
