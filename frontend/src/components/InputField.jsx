import React from "react";

export const InputField = ({
  labelName,
  id,
  iconName,
  inputType,
  placeholder,
  formHook,
  inputProps,
}) => {
  const borderFocusColor = "focus:border-indigo-500";
  return (
    <>
      {labelName && (
        <label htmlFor={id} className="text-xs font-semibold px-1">
          {labelName}
        </label>
      )}
      <div className="flex ">
        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
          {iconName ? (
            <i
              className={`mdi mdi-${iconName}-outline text-gray-400 text-lg`}
            />
          ) : (
            <i className={`mdi mdi-emoticon-outline text-gray-400 text-lg`} />
          )}
        </div>
        <input
          id={id}
          type={inputType}
          className={`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none ${borderFocusColor}`}
          placeholder={placeholder}
          {...inputProps}
          defaultValue={""}
          {...formHook}
        />
      </div>
    </>
  );
};
