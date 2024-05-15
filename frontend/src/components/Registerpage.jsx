import React from "react";
import { SideImage } from "./SideImage";
import { InputField } from "./InputField";
import { useForm } from "react-hook-form";

export const Registerpage = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  return (
    <div className="min-w-screen min-h-screen bg-white flex items-center justify-center px-5 py-5">
      <div
        className="bg-gray-100 text-gray-500 rounded-3xl shadow-2xl w-full overflow-hidden"
        style={{ maxWidth: 1000 }}
      >
        <div className="md:flex w-full">
          <SideImage />
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
            </div>
            <form
              noValidate
              onSubmit={handleSubmit((data) => {
                reset();
                console.log(data);
              })}
            >
              <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-5">
                  <InputField
                    id="fname"
                    labelName="First Name"
                    iconName="account"
                    inputType="text"
                    placeholder="John"
                    formHook={{
                      ...register("fname", {
                        required: "First Name is Required",
                      }),
                    }}
                    inputProps={{
                      required: true,
                    }}
                  />
                  {errors.fname && (
                    <p className="text-red-500">{errors.fname.message}</p>
                  )}
                </div>
                <div className="w-1/2 px-3 mb-5">
                  <InputField
                    id="lname"
                    labelName="Last Name"
                    iconName="account"
                    inputType="text"
                    placeholder="Smith"
                    formHook={{
                      ...register("lname", {
                        required: "Last Name is Required",
                      }),
                    }}
                    inputProps={{
                      required: true,
                    }}
                  />
                  {errors.lname && (
                    <p className="text-red-500">{errors.lname.message}</p>
                  )}
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <InputField
                    id="email"
                    labelName="Email Address"
                    iconName="email"
                    inputType="email"
                    placeholder="abc@example.com"
                    formHook={{
                      ...register("email", {
                        required: "Email is Required",
                        pattern: {
                          value: /\b\w+@[\w.-]+\.\w{2,4}\b/gi,
                          message: "Email not valid",
                        },
                      }),
                    }}
                    inputProps={{
                      required: true,
                    }}
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <InputField
                    id="password"
                    labelName="Password"
                    iconName="lock"
                    inputType="password"
                    placeholder="*************"
                    formHook={{
                      ...register("password", {
                        minLength: {
                          value: 4,
                          message: "Minimum length:  4 characters",
                        },

                        required: "password is required",
                      }),
                    }}
                    inputProps={{
                      required: true,
                    }}
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-12">
                  <InputField
                    id="confirmPassword"
                    labelName="Confirm Password"
                    iconName="lock"
                    inputType="password"
                    placeholder="*************"
                    formHook={{
                      ...register("confirmPassword", {
                        validate: (value, formValues) =>
                          value === formValues.password ||
                          "password not matching",
                      }),
                    }}
                    inputProps={{
                      required: true,
                    }}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <button className="block w-full mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                    REGISTER
                  </button>
                </div>
              </div>
            </form>
            <div className="text-center">
              <h1 className="font-semibold">
                Already Have an account?{" "}
                <span className="underline cursor-pointer">Login</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
