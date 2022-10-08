/* import packages */
import { message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Container from "../core/Components/Container/Container";

/* import local component */
import LoginForm from "../core/Components/Form/LoginForm/LoginForm";
import Logo from "../core/Components/Logo/Logo";
import { useActions } from "../core/redux/slice/userSlice";

/* import services */
import USER_SERVICE from "../core/service/userService";
import { LOCAL_SERVICE } from "../core/service/localService";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const notify = () => toast("Login successfully");

  const onLoginSuccess = (data) => {
    let { username: taiKhoan, password: matKhau } = data;

    USER_SERVICE.login({ taiKhoan, matKhau })
      .then((res) => {
        // update redux store
        dispatch(useActions.login(res.data.content));
        // update local storage
        LOCAL_SERVICE.user.set(res.data.content);

        // show success notifcation then redirect
        notify();
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => console.error(`>> Error !! ${err}`));
  };

  const onLoginFail = (errorInfo) => {
    console.log("fail", errorInfo);
  };
  return (
    <div className="page-login">
      <Container>
        <div className="wrapper h-screen relative">
          <div className="content bg-slate-300/10  absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 py-6 px-12 shadow-xl border border-solid border-slate-400/20 rounded-lg">
            <div className="title mb-10">
              <h3 className="text-white text-[55px] font-bold flex items-center justify-center gap-4">
                <span>Welcome to</span> <Logo className="w-32" />
              </h3>
            </div>
            <div className="login-form-wrapper mx-auto flex flex-col items-center justify-center">
              <LoginForm
                formLayout="vertical"
                className="w-full"
                onFinish={onLoginSuccess}
                onFinishFailed={onLoginFail}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
