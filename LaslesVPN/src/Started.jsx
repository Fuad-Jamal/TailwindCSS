import React from "react";
import personOne from "./assets/illustration 1.svg";

export default function Started() {
  return (
    <div className="flex items-center justify-center space-x-8 mt-10">
      <div className="flex flex-col mb-[110px]">
        <h1 className="text-[50px] font-semibold text-gray-800 text-left mt-9">
          Want anything to be
          <br />
          easy with <b>LaslesVPN.</b>
        </h1>
        <br />
        <p className="text-left text-[16px]">
          Provide a network for all your needs with ease and fun using LaslesVPN
          <br />
          discover interesting features from us.
        </p>
        <br />
        <button className="bg-red-500 text-white rounded-md px-12 py-3 self-start mt-4 font-bold shadow-2xl shadow-red-500">
          Get Started
        </button>
      </div>
      <div className="h-[380px]">
        <img src={personOne}></img>
      </div>
    </div>
  );
}
