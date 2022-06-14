import React from "react";
import { useNavigate } from "react-router-dom";

const Table = ({ dataUser }) => {
  const navigate = useNavigate();

  const titleHeading = ["No", "Name", "Email"];

  const toDetail = (id) => {
    navigate(`/users/${id}`);
  };

  return (
    <div className="shadow overflow-x-scroll md:overflow-hidden border-b border-gray-200 sm:rounded-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {titleHeading.map((title, ind) => (
              <th scope="col" key={ind} className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {dataUser?.data?.map((person) => (
            <tr key={person.id} className="cursor-pointer hover:bg-violet-200" onClick={() => toDetail(person.id)}>
              <td className="px-6 py-3 w-1/12 text-center text-gray-500">{person.id}</td>
              <td className="px-3 lg:w-4/12 py-4">
                <div className="flex items-center ">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img className="h-10 w-10 md:ml-4 rounded-full" src={person.avatar} alt="" />
                  </div>

                  <div className="ml-4 w-full">
                    <div className="text-sm font-medium text-gray-900 lg:-ml-14 text-center">
                      {person.first_name} {person.last_name}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-1 py-4 text-sm text-gray-500 text-center">{person.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
