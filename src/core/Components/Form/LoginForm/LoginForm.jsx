/* import packages */
import React from "react";

/* import antd packages */
import { Button, Checkbox, Form, Input } from "antd";
import clsx from "clsx";
import CustomButton from "../../Button/CustomButton";
import Label from "../Label/Label";

export default function LoginForm({
  onFinish,
  onFinishFailed,
  formLayout = "horizontal",
  size = "large",
  className = "",
}) {
  const validateMessages = {
    required: "${name} must be input with data",
  };
  const [form] = Form.useForm();
  return (
    <Form
      name="loginForm"
      layout={formLayout}
      form={form}
      size={size}
      initialValues={{
        remember: true,
      }}
      validateMessages={validateMessages}
      onFinish={(values) => {
        onFinish(values);
      }}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={clsx("login-form", "text-lg", className)}
    >
      <Form.Item
        label={
          <Label className="text-xl font-semibold text-white">Username</Label>
        }
        name="username"
        rules={[{ required: true }]}
        className="mb-10"
      >
        <Input
          placeholder="Enter your username..."
          className="py-2 outline-none border-2 border-solid border-transparent  hover:border-[#1A2030] focus:border-[#1A2030] transition-all duration-700"
        />
      </Form.Item>

      <Form.Item
        label={
          <Label className="text-xl font-semibold text-white">Password</Label>
        }
        name="password"
        rules={[{ required: true }]}
        className="mb-6"
      >
        <Input.Password
          placeholder="Enter your password..."
          className="py-2 outline-none border-2 border-solid border-transparent hover:border-[#1A2030] focus:border-[#1A2030] transition-all duration-700"
        />
      </Form.Item>

      <Form.Item className="flex justify-center">
        <CustomButton
          btnType="btnPink"
          className="w-56 py-6 px-12 font-bold text-xl h-14"
          htmlType="submit"
        >
          Sign In
        </CustomButton>
      </Form.Item>
    </Form>
  );
}
