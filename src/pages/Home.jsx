import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import MyContext from "../context/MyContext";
import FirstPage from "../components/FirstPage";
import TeamBg from "../components/TeamBg";
import { NavLink } from "react-router-dom";
import services from "../firebase/Services";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
// import myapp from "../assets/app-release.apk"

const Home = () => {
  let [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const {
    togler,
    setTogler,
    isLoggenIn,
    setIsLoggedIn,
    userData,
    setUserData,
  } = useContext(MyContext);

  const [team, setTeam] = useState(null);

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

  useEffect(() => {
    services.getUserData(currentUser?.uid).then((res) => {
      setUserData(res);
    });
  }, [userData]);

  useEffect(() => {
    setIsLoggedIn(currentUser);
  }, [currentUser]);

  useEffect(() => {
    services.getFreeTeams().then((res) => {
      setTeam(res);
    });
  }, []);

  // const handleDownload = () => {
  //   // const appFilePath = myapp;
  //   // window.location.href = appFilePath;
  // };
  const refresh = () => {
    window.location.reload();
  };

  return (
    <Layout>
      <FirstPage />

      <div className="">
        <NavLink to={"/vip"}>
          <div className="relative rounded my-3 bg-red-500 overflow-hidden h-10 mx-auto w-[360px] max-sm:w-11/12">
            <div className="absolute  h-10 top-0  shineWinners"></div>

            <button className="text-xl w-full py-1 mx-auto text-center rounded font-semibold text-white ">
              VIP Teams
            </button>
          </div>
        </NavLink>
        <div className="w-[320px] px-2 max-sm:w-full mx-auto  overflow-hidden my-4 h-auto">
          <div className="relative rounded   overflow-hidden h-auto mx-auto w-[360px] max-sm:w-11/12">
            <h2 className="text-3xl font-semibold my-3 text-center">
              👇Free Teams👇
            </h2>
          </div>
          <h1 className="text-center text-2xl my-2 font-bold text-red-500">
            Important Notice
          </h1>
          <h1 className="text-xl text-center font-semibold">
            Team will be update after lineup
          </h1>
          {/* <div className="flex my-3 justify-center">
            <button
              onClick={refresh}
              className="px-4 py-1 rounded bg-red-600 text-white"
            >
              Refresh Team
            </button>
          </div> */}
          <div className="w-[320px] max-sm:w-full  mx-auto h-auto">
            {/* here is display teams */}

            {team ? (
              <TeamBg teamUrl={team.url} team={team.teams}></TeamBg>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>

      {/* winners */}
      {/* <div className="relative rounded bg-red-500 overflow-hidden h-10 mx-auto w-[360px] max-sm:w-11/12 skew-y-2">
        <div className="absolute skew-y-3 h-10 top-0  shineWinners"></div>
        <h1 className="text-xl py-1 mx-auto text-center rounded font-semibold text-white ">
          Winners in CSK vs RCB
        </h1>
      </div> */}

      <div className="w-full flex flex-col justify-center mt-4">
        <h1 className="text-2xl text-center my-2 font-semibold">
          यदि ऐप डाउनलोड नहीं होता है तो VPN कनेक्ट करें, फिर पुनः प्रयास करें
        </h1>

        <a
          href="https://www.mediafire.com/file/gjc6zi1ddocrd17/app-release.apk/file"
          target="_blank"
          className="max-w-[300px] py-1 px-4 rounded mx-auto bg-red-600 text-white"
        >
          Download Android App
        </a>
      </div>
    </Layout>
  );
};

export default Home;
