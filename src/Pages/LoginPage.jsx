/* import packages */
import { message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Container from "../core/Components/Container/Container";

/* import local component */
import LoginForm from "../core/Components/Form/LoginForm/LoginForm";
import Logo from "../core/Components/Logo/Logo";
import { userActions } from "../core/redux/slice/userSlice";

/* import services */
import USER_SERVICE from "../core/service/userService";
import { LOCAL_SERVICE } from "../core/service/localService";

import toastify from "../core/utils/toastify/toastifyUtils";

export default function LoginPage() {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const onLoginSuccess = (data) => {
    let { username: taiKhoan, password: matKhau } = data;

    USER_SERVICE.login({ taiKhoan, matKhau })
      .then((res) => {
        // update redux store
        dispatch(userActions.login(res.data.content));
        // update local storage
        LOCAL_SERVICE.user.set(res.data.content);
        // show success notifcation then redirect
        toastify("Login successfully !", "success");
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 2000);
      })
      .catch((err) => {
        // show success notifcation then redirect
        toastify("Login fails !", "error");
        console.error(`>> Error !! ${err}`);
      });
  };

  const onLoginFail = (errorInfo) => {
    toastify(`Login fails ! ${errorInfo}`, "error");
  };
  return (
    <div className="page-login">
      <Container>
        <div className="wrapper h-screen relative">
          <div className="content bg-slate-300/10  absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 py-6 px-12 shadow-xl border border-solid border-slate-400/20 rounded-lg">
            <div className="title mb-5">
              <h3 className="text-white text-[55px] font-bold flex items-center justify-center gap-4 mb-0">
                <span>Welcome to</span> <Logo className="w-32" />
              </h3>
            </div>
            <div className="login-form-wrapper mx-auto flex flex-col items-center justify-center">
              <div className="header font-semibold text-4xl text-white uppercase mt-5 mb-5">
                Login form
              </div>
              <LoginForm
                formLayout="vertical"
                className="w-full"
                onFinish={onLoginSuccess}
                onFinishFailed={onLoginFail}
              />
              <div className="bottom py-3">
                <Link
                  to="/register"
                  className="link text-indigo-500 text-lg underline hover:text-[#C8235D] transition-all duration-1000"
                >
                  Don't have account ? Please register here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
