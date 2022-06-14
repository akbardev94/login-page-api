import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 4000);
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-200">
      <h1 className="text-6xl text-gray-800 font-bold">Oops, Page not found !!!</h1>
    </div>
  );
};

export default NotFound;
