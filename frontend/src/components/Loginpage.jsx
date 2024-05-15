import React from "react";
import { SideImage } from "./SideImage";
import { useForm } from "react-hook-form";
import { InputField } from "./InputField";

export const Loginpage = () => {
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
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">LOGIN</h1>
            </div>
            <form
              noValidate
              onSubmit={handleSubmit((data) => {
                reset();
                console.log(data);
              })}
            >
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
                <div className="w-full px-3 mb-12">
                  <InputField
                    id="password"
                    labelName="Password"
                    iconName="lock"
                    inputType="password"
                    placeholder="*************"
                    formHook={{
                      ...register("password", {
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
                <div className="w-full px-3 mb-5">
                  <button className="block w-full  mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                    LOGIN
                  </button>
                </div>
              </div>
            </form>
          </div>
          <SideImage />
        </div>
      </div>
    </div>
  );
};
