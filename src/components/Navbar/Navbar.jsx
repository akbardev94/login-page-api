import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import { activeBtn, nonActiveBtn } from "./buttonFormat";

const Navbar = () => {
  const tokens = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();

  /* ----------------------------- logout function ---------------------------- */
  const logOut = () => {
    Swal.fire({
      text: "Are you sure you want to logout ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#818CF8",
      cancelButtonColor: "#374151",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.clear();
        document.location.href = "/";
      }
    });
  };

  /* --------------------------- navigation function -------------------------- */
  const toUsers = () => {
    navigate("/users");
  };

  const toHome = () => {
    navigate("/");
  };

  if (!tokens) {
    return <></>;
  } else {
    return (
      <nav className="fixed top-0 bg-amber-200 h-14 w-full flex items-center">
        <div className="row wraper mx-auto px-3 lg:px-0 w-full flex  ">
          <div className="left-col w-9/12 md:w-6/12 flex items-center gap-5">
            <h1 className="tracking-wider text-gray-700 cursor-pointer font-bold text-xl lg:text-2xl ">LOGO</h1>
            <div className="flex list-menu items-center gap-3 lg:mt-2 mt-1 ">
              <button onClick={toHome} className={location.pathname === "/" ? activeBtn : nonActiveBtn}>
                Home
              </button>
              <button onClick={toUsers} className={location.pathname === "/users" ? activeBtn : nonActiveBtn}>
                Users
              </button>
            </div>
          </div>

          <div className="right-col w-3/12 md:w-6/12 flex justify-end">
            <button className="mt-1 lg:mt-1 hover:text-white active:text-black transition ease-in" onClick={logOut}>
              Log Out
            </button>
          </div>
        </div>
      </nav>
    );
  }
};
export default Navbar;
