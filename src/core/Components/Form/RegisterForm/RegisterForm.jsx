/* import packages */
import React from "react";

/* import antd packages */
import { Button, Checkbox, Form, Input } from "antd";
import clsx from "clsx";
import CustomButton from "../../Button/CustomButton";
import Label from "../Label/Label";

export default function RegisterForm({
  onFinish,
  onFinishFailed,
  formLayout = "horizontal",
  size = "large",
  className = "",
}) {
  const validateMessages = {
    required: "${name} must be input with data",
    min: "${name} must be input with at least",
  };
  const [form] = Form.useForm();
  const labelItem = (labelText) => (
    <Label className="text-lg font-semibold text-white capitalize">
      {labelText}
    </Label>
  );
  return (
    <Form
      name="profleForm"
      layout={formLayout}
      form={form}
      size={size}
      validateMessages={validateMessages}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={clsx("login-form", "text-lg", className)}
    >
      <Form.Item
        label={labelItem("Username")}
        name="username"
        rules={[{ required: true }]}
        className="mb-10"
        hasFeedback
      >
        <Input
          placeholder="Enter your username..."
          className="py-2 rounded-md outline-none border-2 border-solid border-transparent  hover:border-[#1A2030] focus:border-[#1A2030] transition-all duration-700"
        />
      </Form.Item>

      <Form.Item
        label={labelItem("Passwords")}
        name="password"
        rules={[
          { required: true },
          { min: 6, message: "Username must be minimum 6 characters." },
        ]}
        hasFeedback
        className="mb-6"
      >
        <Input.Password
          placeholder="Enter your password..."
          className="py-2 rounded-md outline-none border-2 border-solid border-transparent transition-all duration-700"
        />
      </Form.Item>
      <Form.Item
        name="confirm"
        label={labelItem("Confirm Password")}
        dependencies={["password"]}
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
        // hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label={labelItem("Name")}
        name="fullname"
        rules={[
          { required: true },
          {
            pattern: /^[A-Za-z\s]*$/i,
            message: "Name must not contain number",
          },
        ]}
        className="mb-6"
        hasFeedback
      >
        <Input
          placeholder="Enter your fullname..."
          className="py-2 rounded-md outline-none border-2 border-solid border-transparent hover:border-[#1A2030] focus:border-[#1A2030] transition-all duration-700"
        />
      </Form.Item>
      <Form.Item
        name="useremail"
        label={labelItem("user email")}
        hasFeedback
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
        label={labelItem("Phone")}
        rules={[
          { required: true },
          {
            pattern: /^(?:\d*)$/,
            message: "Phone number should contain just number",
          },
        ]}
        hasFeedback
        className="mb-6"
      >
        <Input
          placeholder="089123456"
          className="py-2 rounded-md outline-none border-2 border-solid border-transparent hover:border-[#1A2030] focus:border-[#1A2030] transition-all duration-700"
        />
      </Form.Item>

      <Form.Item className="w-full mt-16">
        <CustomButton
          btnType="btnPink"
          className="w-full py-6 px-12 font-bold text-xl h-14"
          htmlType="submit"
        >
          Register Account
        </CustomButton>
      </Form.Item>
    </Form>
  );
}
