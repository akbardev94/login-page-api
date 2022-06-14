import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const tokens = sessionStorage.getItem("token");

  if (!tokens) {
    return <></>;
  }
  return (
    <div className="w-full py-5 bg-slate-300 h-14 flex justify-center items-center">
      <div className="wraper ">
        <p className="tracking-wider text-gray-800 text-xl cursor-pointer" onClick={() => navigate("/")}>
          | User Apps |
        </p>
      </div>
    </div>
  );
};

export default Footer;
