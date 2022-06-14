import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserDetail } from "../../store/action/GetUserDetail";
import CardUser from "../../components/Card/Card";

const DetailUser = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { userDetail, loading } = useSelector((state) => state.userDetail);

  useEffect(() => {
    dispatch(getUserDetail(id));
  }, [dispatch, id]);

  return (
    <div className="min-h-screen flex justify-center items-center ">
      {loading ? (
        <div className="w-full bg-white flex justify-center items-center" style={{ height: "100vh" }}>
          <h1 className="text-center text-white" style={{ margin: "auto" }}>
            PLEASE WAIT ...
          </h1>
        </div>
      ) : (
        <CardUser detailUser={userDetail} />
      )}
    </div>
  );
};

export default DetailUser;
