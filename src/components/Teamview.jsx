import React from "react";

const Teamview = ({ name, position, image }) => {
  return (
    <div className="w-full cursor-pointer h-10 my-1 border  flex gap-2 ">
      <div className="w-8 h-8 rounded-full overflow-hidden">
        <img src={image} alt="photo" />
      </div>

      <div className="w-[120px] truncate relative">
        <h2 className=" uppercase absolute top-1 text-sm font-semibold">
          {name}
        </h2>
        <h1 className="text-[12px] absolute top-[20px]">{position}</h1>
      </div>
    </div>
  );
};

export default Teamview;
