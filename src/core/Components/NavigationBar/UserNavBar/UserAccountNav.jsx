/* import packages */
import React from "react";

/* import react router dom packages */
import { NavLink } from "react-router-dom";

/* import local components */
import CustomButton from "../../Button/CustomButton";
import { LOCAL_SERVICE } from "../../../service/localService";

import { useSelector } from "react-redux";
import { FiUser, FiPower } from "react-icons/fi";
import { Tooltip } from "antd";

export default function UserAccountNav() {
  let userInfo = useSelector((state) => state.userReducer.user);
  let handleLogout = () => {
    LOCAL_SERVICE.user.unset();
    window.location.href = "/login";
  };

  let renderContent = () => {
    if (!userInfo) {
      return (
        <div className="flex items-center gap-10">
          <div className="text-lg py-2 px-5 text-right flex justify-center flex-col gap-1">
            <p className="text-[#fffc] font-medium tracking-wider relative capitalize mb-0">
              Don't have account yet ?
            </p>
            <div className="text-[#707070] text-base font-medium">
              Please{" "}
              <NavLink
                to="/register"
                className="text-[#C8235D] text-xl font-semibold underline transition-all duration-300 capitalize hover:text-white"
              >
                sign up
              </NavLink>{" "}
              here
            </div>
          </div>
          <NavLink to="/login">
            <CustomButton btnType="btnGreyBordered" className="h-full">
              Sign in
            </CustomButton>
          </NavLink>
        </div>
      );
    } else {
      return (
        <div className="flex items-center gap-10">
          <NavLink className="user-account block" to="profile">
            <div className="flex items-center gap-3">
              <FiUser className="font-medium text-white text-xl" />
              <div className="user-name text-white text-xl font-mediumm tracking-wider">
                {userInfo?.hoTen}
              </div>
            </div>
          </NavLink>
          <Tooltip title="Click here to logout" color="#28324A">
            <div
              className="btn btn-logout border border-solid shadow-md p-2 rounded-md group hover:bg-white transition-all duration-1000 group cursor-pointer"
              onClick={handleLogout}
            >
              <FiPower
                className="cursor-pointer text-lg text-white group-hover:text-[#1A2030] transition-all duration-1000"
                onClick={handleLogout}
              />
            </div>
          </Tooltip>
        </div>
      );
    }
  };
  return <div className="user-account-action">{renderContent()}</div>;
}
