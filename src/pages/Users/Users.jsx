import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/action/GetUsers";
import Table from "../../components/Table/Table";

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const lengthPage = Array.from(Array(users.total_pages).keys());

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const changePage = (page) => {
    dispatch(getUsers(page));
  };

  return (
    <div className="mt-20 md:mt-40 min-h-[90vh]">
      <div className="wraper mx-auto px-3 lg:px-0">
        <Table dataUser={users} />
        <div className="flex flex-row justify-center gap-2 w-full ">
          {lengthPage.map((index) => (
            <button className="text-gray-700 hover:text-black focus:outline-blue-300 focus:ring-opacity-80 focus:ring-indigo-300 rounded bg-slate-200 py-1 px-2 mt-4 drop-shadow" key={index} onClick={() => changePage(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
