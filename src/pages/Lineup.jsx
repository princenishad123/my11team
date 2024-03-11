import React, { useEffect, useState } from "react";
import services from "../firebase/Services";
import Layout from "../components/Layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import Teamview from "../components/Teamview";
import { toast } from "react-toastify";

const Lineup = () => {
  const [team, setTeam] = useState([]);
  const [id, setId] = useState([]);
  const { t1, t2 } = useParams();
  const [teamOne, setTeamOne] = useState([]);
  const [teamTwo, setTeamTwo] = useState([]);

  const teamSelection = (data, index) => {
    if (id.includes(data.id)) {
      let f = team?.filter((e) => e.id != data.id);
      setTeam(f);
      let a = id.filter((i) => i != data.id);
      return setId(a);
      // console.log(a);
    }
    if (team?.length >= 22) {
      return toast.warn("22 teams selected");
    }
    setTeam([...team, data]);

    setId([...id, data.id]);
  };

  useEffect(() => {
    services.getlineupTeam().then((res) => {
      let filt1 = res.teams.filter((e) => e.whereTeam == t1);
      let filt2 = res.teams.filter((e) => e.whereTeam == t2);
      setTeamOne(filt1);
      setTeamTwo(filt2);
    });
  }, []);

  const navigate = useNavigate();

  const previewTeam = () => {
    navigate(`/preview-team/${t1}/${t2}`, { state: { team: team } });
  };

  return (
    <Layout>
      <div className="max-w-[360px] mx-auto border h-auto">
        <div className="flex justify-evenly">
          <h2 className="text-xl uppercase">{t1}</h2>
          <h2 className="text-xl uppercase">VS</h2>
          <h2 className="text-xl uppercase">{t2}</h2>
        </div>
        <div className="w-full flex px-1">
          <div className="w-[50%] min-h-96">
            <div className="full  px-2 min-h-[90px]">
              <div>
                {teamOne.map((e, index) => (
                  <div
                    onClick={() => teamSelection(e, index)}
                    key={e.id}
                    className={`w-full ${
                      id.includes(e.id) ? "bg-green-100" : "bg-white"
                    }`}
                  >
                    <Teamview
                      name={e.name}
                      image={e.image}
                      position={e.position}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[50%] min-h-96">
            <div className="full border-dashed border-l  px-2 min-h-[90px]">
              <div>
                {teamTwo.map((e, index) => (
                  <div
                    onClick={() => teamSelection(e, index)}
                    key={e.id}
                    className={`w-full ${
                      id.includes(e.id) ? "bg-green-100" : ""
                    }`}
                  >
                    <Teamview
                      name={e.name}
                      image={e.image}
                      position={e.position}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full my-2 flex  text-white justify-between gap-3">
          <button className="bg-green-500" onClick={previewTeam}>
            Preview Team
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Lineup;
