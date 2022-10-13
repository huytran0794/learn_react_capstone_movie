/* import packages */
import React from "react";

import { Form, Input, Select } from "antd";
import clsx from "clsx";
import CustomButton from "../../../core/Components/Button/CustomButton";
import Label from "../../../core/Components/Form/Label/Label";
import { useDispatch } from "react-redux";
import { userActions } from "../../../core/redux/slice/userSlice";
import { LOCAL_SERVICE } from "../../../core/service/localService";
import USER_SERVICE from "../../../core/service/userService";
import _ from "lodash";

export default function TabProfile({
  formLayout = "vertical",
  size = "large",
  className = "tabProfile",
  userProfile,
}) {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { Option } = Select;
  const initialValues = {
    taiKhoan: userProfile.taiKhoan,
    password: userProfile.matKhau,
    fullname: userProfile.hoTen,
    useremail: userProfile.email,
    phone: userProfile.soDT,
    userType: userProfile.maLoaiNguoiDung,
  };

  const handleUpdateUserProfile = (data) => {
    USER_SERVICE.updateUserProfile(data)
      .then((res) => {
        let { taiKhoan, hoTen, email, soDT, maLoaiNguoiDung } =
          res.data.content;
        let currentLoggedInUser = LOCAL_SERVICE.user.get();
        currentLoggedInUser.taiKhoan = taiKhoan;
        currentLoggedInUser.hoTen = hoTen;
        currentLoggedInUser.email = email;
        currentLoggedInUser.soDT = soDT;
        currentLoggedInUser.maLoaiNguoiDung = maLoaiNguoiDung;

        // update local storage
        LOCAL_SERVICE.user.set(currentLoggedInUser);
        dispatch(userActions.updateProfile(data));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onFinish = (values) => {
    let {
      taiKhoan,
      password: matKhau,
      fullname: hoTen,
      useremail: email,
      phone: soDt,
      userType: maLoaiNguoiDung,
    } = values;

    let userDataToSubmit = {
      taiKhoan,
      matKhau,
      hoTen,
      email,
      soDt,
      maLoaiNguoiDung,
      maNhom: userProfile.maNhom,
    };
    handleUpdateUserProfile(userDataToSubmit);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="tabProfile py-4">
      <Form
        name="loginForm"
        layout={formLayout}
        form={form}
        initialValues={initialValues}
        size={size}
        wrapperCol={{
          span: 10,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className={clsx("login-form", "text-lg", className)}
      >
        <Form.Item
          label={
            <Label className="text-lg font-semibold text-white">
              Tài khoản
            </Label>
          }
          name="taiKhoan"
          rules={[{ required: true }]}
          className="mb-10"
        >
          <Input
            placeholder="Enter your username..."
            className="py-2 rounded-md outline-none border-2 border-solid border-transparent  hover:border-[#1A2030] focus:border-[#1A2030] transition-all duration-700"
          />
        </Form.Item>

        <Form.Item
          label={
            <Label className="text-lg font-semibold text-white">Mật khẩu</Label>
          }
          name="password"
          rules={[{ required: true }]}
          className="mb-6"
        >
          <Input.Password
            placeholder="Enter your password..."
            className="py-2 rounded-md outline-none border-2 border-solid border-transparent hover:border-[#1A2030] focus:border-[#1A2030] transition-all duration-700"
          />
        </Form.Item>

        <Form.Item
          label={
            <Label className="text-lg font-semibold text-white">Họ tên</Label>
          }
          name="fullname"
          rules={[{ required: true }]}
          className="mb-6"
        >
          <Input
            placeholder="Enter your fullname..."
            className="py-2 rounded-md outline-none border-2 border-solid border-transparent hover:border-[#1A2030] focus:border-[#1A2030] transition-all duration-700"
          />
        </Form.Item>
        <Form.Item
          name="useremail"
          label={
            <Label className="text-lg font-semibold text-white">Email</Label>
          }
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
          className="mb-6"
        >
          <Input
            placeholder="Johndoe@email.com"
            className="py-2 rounded-md outline-none border-2 border-solid border-transparent hover:border-[#1A2030] focus:border-[#1A2030] transition-all duration-700"
          />
        </Form.Item>
        <Form.Item
          name="phone"
          label={
            <Label className="text-lg font-semibold text-white">Phone</Label>
          }
          rules={[{ required: true }]}
          className="mb-6"
        >
          <Input
            placeholder="089123456"
            className="py-2 rounded-md outline-none border-2 border-solid border-transparent hover:border-[#1A2030] focus:border-[#1A2030] transition-all duration-700"
          />
        </Form.Item>
        <Form.Item
          name="userType"
          label={
            <Label className="text-lg font-semibold text-white">
              Loại tài khoản
            </Label>
          }
        >
          <Select>
            <Option value="KhachHang">Khách hàng</Option>
            <Option value="QuanTri">Quản trị</Option>
          </Select>
        </Form.Item>
        <Form.Item className="w-full">
          <CustomButton
            btnType="btnPink"
            className="w-56 py-6 px-12 font-bold text-xl h-14"
            htmlType="submit"
          >
            Update profile
          </CustomButton>
        </Form.Item>
      </Form>
    </div>
  );
}
