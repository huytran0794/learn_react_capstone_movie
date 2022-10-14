/* import packages */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../core/Components/Container/Container";

/* import local component */
import Logo from "../core/Components/Logo/Logo";

/* import services */
import USER_SERVICE from "../core/service/userService";

import toastify from "../core/utils/toastify/toastifyUtils";
import RegisterForm from "../core/Components/Form/RegisterForm/RegisterForm";

export default function RegisterPage() {
  let navigate = useNavigate();

  const onRegisterSuccess = (data) => {
    let {
      username: taiKhoan,
      password: matKhau,
      fullname: hoTen,
      useremail: email,
      phone: soDt,
    } = data;
    let userDataToSubmit = {
      taiKhoan,
      matKhau,
      hoTen,
      email,
      soDt,
    };
    USER_SERVICE.register(userDataToSubmit)
      .then((res) => {
        toastify("Register successfully !", "success");
        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 2000);
      })
      .catch((err) => {
        // show success notifcation then redirect
        toastify("Login fails !", "error");
        console.error(`>> Error !! ${err}`);
      });
  };

  const onRegisterFail = (errorInfo) => {
    toastify(`Register fails ! Check your console`, "error");
    console.log(errorInfo);
  };
  return (
    <div className="page-register">
      <Container>
        <div className="wrapper h-screen relative">
          <div className="content bg-slate-300/10  absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 py-6 px-12 shadow-xl border border-solid border-slate-400/20 rounded-lg">
            <div className="title mb-5">
              <h3 className="text-white text-[55px] font-bold flex items-center justify-center gap-4 mb-0">
                <span>Welcome to</span> <Logo className="w-32" />
              </h3>
            </div>
            <div className="register-form-wrapper mx-auto flex flex-col items-center justify-center">
              <div className="header font-semibold text-4xl text-white uppercase py-4 mt-5 mb-5">
                Register form
              </div>
              <RegisterForm
                formLayout="vertical"
                className="w-full"
                onFinish={onRegisterSuccess}
                onFinishFailed={onRegisterFail}
              />
              <div className="bottom py-3">
                <Link
                  to="/login"
                  className="link text-indigo-500 text-lg underline hover:text-[#C8235D] transition-all duration-1000"
                >
                  Already have account ? Please login here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
