import React, { useEffect, useState } from "react";
const useCustomHook = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const team = await fetch(url);
      const res = await team.json();
      setData(res);
    }
    getData();
  }, []);
  return [data];
};

export default useCustomHook;
