import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/action/GetUsers";
import CardHome from "../../components/Card/CardHome";
import LoginPage from "../../pages/Login/Login";

const Home = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const tokens = sessionStorage.getItem("token");
  const { users } = useSelector((state) => state.users);
  let [page, setPage] = useState(1);

  useEffect(() => {
    tokens && dispatch(getUsers(page));
  }, [dispatch, page, tokens]);

  useEffect(() => {
    if (users.data) {
      setData((data) => [...data, ...users.data]);
    }
  }, [users]);

  const showMore = (e) => {
    e.preventDefault();
    if (page < users.total_pages) {
      setPage((page += 1));
    }
  };

  if (!tokens) {
    return <LoginPage />;
  }

  return (
    <div className="mt-20 min-h-[90vh] mb-10">
      <div className="wraper mx-auto px-3 lg:px-0">
        <CardHome dataUsers={data} />
        <div className="button w-full flex justify-center">
          <button
            onClick={showMore}
            className="bg-sky-500 mt-2 mb-5 flex items-center px-2 py-2 font-medium tracking-wide capitalize transition-colors duration-200 transform rounded-md hover:bg-sky-500/50 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80"
          >
            <span className="mx-1 text-gray-800">Show more</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
