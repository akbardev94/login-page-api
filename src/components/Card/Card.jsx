import React from "react";
import { MdOutlineMail } from "react-icons/md";

const Card = ({ detailUser }) => {
  return (
    <div className="mx-2 min-w-[95%] md:min-w-[70%] lg:min-w-[40%] ">
      <div className="bg-indigo-300 h-40 rounded-t-lg"></div>
      <div className="flex justify-center -mt-20 ">
        <img className="object-cover w-40 h-40 border-4 border-gray-200 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={detailUser?.data?.avatar} />
      </div>
      <div className="px-8 flex flex-col items-center md:py-4 mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <h2 className="pt-5  text-center text-xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
          {detailUser?.data?.first_name} {detailUser?.data?.last_name}
        </h2>
        <p className="mt-2 text-center pb-4 text-gray-600 dark:text-gray-200 flex items-center justify-center gap-1">
          <MdOutlineMail /> {detailUser?.data?.email}
        </p>
      </div>
    </div>
  );
};

export default Card;
