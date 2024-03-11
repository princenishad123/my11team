import React from "react";

const FirstPage = () => {
  let atOptions = {
    key: "2512a95a9355cd6ac6c38c3f6fcbde9a",
    format: "iframe",
    height: 50,
    width: 320,
    params: {},
  };
  let ads =
    "<scr" +
    'ipt type="text/javascript" src="//www.topcreativeformat.com/2512a95a9355cd6ac6c38c3f6fcbde9a/invoke.js"></scr' +
    "ipt>";

  return (
    <div className="w-full flex-col h-auto md:h-[85vh]  flex max-md:justify-start justify-center max-md:py-12">
      <h1 className="text-4xl text-center font-semibold my-2">TATA IPL</h1>
      <h1 className="text-center text-6xl max-md:text-5xl  font-bold leading-tight max-md:leading-snug">
        India's No.1 Predication <br /> Platform
      </h1>
      <h1 className="text-4xl my-3 text-center font-semibold">
        Won daily in Lakhs
      </h1>
    </div>
  );
};

export default FirstPage;
