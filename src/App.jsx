import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import VipTeam from "./pages/VipTeam";
import Invitation from "./pages/Invitation";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import ProtectedRoutes from "./pages/ProtectedRoutes";
import Account from "./pages/Account";
import ProtectedVipTeam from "./pages/ProtectedVipTeam";
import Admin from "./pages/Admin";
import Selectteams from "./pages/Selectteams";
import ProtectedForAdmin from "./pages/ProtectedForAdmin";
import Lineup from "./pages/Lineup";
import MyVipTeams from "./pages/MyVipTeams";
import PreviewTeam from "./pages/PreviewTeam";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vip" element={<ProtectedVipTeam Components={VipTeam} />} />
      <Route
        path="/account"
        element={<ProtectedRoutes Components={Account} />}
      />
      <Route path="/invite" element={<Invitation />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signup/invite-code/:code" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      // admin
      <Route path="/admin" element={<ProtectedForAdmin Componets={Admin} />} />
      <Route
        path="/select-teams/:t1/:t2"
        element={<ProtectedForAdmin Componets={Selectteams} />}
      />
      <Route
        path="/lineup/:t1/:t2"
        element={<ProtectedForAdmin Componets={Lineup} />}
      />
      <Route
        path="/lineup/my-vip-team"
        element={<ProtectedForAdmin Componets={MyVipTeams} />}
      />
      <Route
        path="/preview-team/:t1/:t2"
        element={<ProtectedForAdmin Componets={PreviewTeam} />}
      />
    </Routes>
  );
};

export default App;
