/* import packages */
import React from "react";
import clsx from "clsx";

/* import antd packages */
import { Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";

/* import react router dom packages */
import { NavLink } from "react-router-dom";

/* import local components */
import CustomButton from "../../Button/CustomButton";
import UserAccountDropdown from "./UserAccountDropdown";
import { USER_NAV_DATA } from "../../../constant/Nav.data";

export default function UserAccountNav() {
  return (
    <div className="user-account-action">
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
      {/* <Dropdown
        overlay={
          <UserAccountDropdown
            mode={USER_NAV_DATA.mode}
            menuItems={USER_NAV_DATA.items}
          />
        }
        overlayClassName="shadow-md shadow-sky-500 rounded-md overflow-hidden"
        placement="bottomLeft"
        trigger={["click"]}
      >
        <UserOutlined className="text-2xl text-[#fffc]" />
      </Dropdown> */}
    </div>
  );
}
