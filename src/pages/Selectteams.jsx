import React, { useCallback, useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import useCustomHook from "../CustomHooks/CustomHook";
import Teamview from "../components/Teamview";
import { toast } from "react-toastify";
import services from "../firebase/Services";

const Selectteams = () => {
  const { t1, t2 } = useParams();

  const [lineup, setLineup] = useState([]);
  const [id, setId] = useState([]);

  const navigate = useNavigate();

  const [teamOne] = useCustomHook(
    `https://princenishad123.github.io/tataiplteams/${t1}.json`
  );

  const [teamTwo] = useCustomHook(
    `https://princenishad123.github.io/tataiplteams/${t2}.json`
  );

  const teamSelection = (data, index) => {
    if (id.includes(data.id)) {
      let f = lineup.filter((e) => e.id != data.id);
      setLineup(f);
      let a = id.filter((i) => i != data.id);
      return setId(a);
      // console.log(a);
    }
    if (lineup.length >= 22) {
      return toast.warn("22 teams selected");
    }
    setLineup([...lineup, data]);

    setId([...id, data.id]);
  };

  const uploadLineups = () => {
    services.uploadTeam(lineup).then((res) => {
      toast.success(res);
      navigate(`/lineup${t1}/${t2}`);
    });
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

        <div className="flex w-full sticky bottom-0  mx-auto py-1  bg-red-500 text-white justify-center">
          <button onClick={uploadLineups} className="py-1">
            Set lineup ({lineup.length})
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Selectteams;
