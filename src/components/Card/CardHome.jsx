import React from "react";
import { useNavigate } from "react-router-dom";

const CardHome = ({ dataUsers }) => {
  const navigate = useNavigate();
  const toDetail = (id) => {
    navigate(`/users/${id}`);
  };

  let uniqueData = [...new Map(dataUsers.map((item) => [item["id"], item])).values()];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-x-3 w-full">
      {uniqueData?.map((user) => (
        <div key={user.id} className="cursor-pointer w-full md:max-w-xs my-3 bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:bg-lime-300" onClick={() => toDetail(user.id)}>
          <img className="object-cover rounded-t-md w-full h-56" src={user.avatar} alt="avatar" />
          <div className="bg-lime-500 py-5 text-center">
            <p className="block text-2xl font-bold text-white dark:text-white">
              {user.first_name} {user.last_name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardHome;
