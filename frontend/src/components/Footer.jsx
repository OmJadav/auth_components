import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="flex flex-col space-y-3 justify-center text-xl mt-15 p-5 bg-gray-400 ">
        <div className="flex justify-center space-x-7">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="mdi mdi-linkedin"></span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="mdi mdi-instagram"></span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="mdi mdi-github"></span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="mdi mdi-twitter"></span>
          </a>
        </div>
        <p className="text-center text-gray-700 font-medium ">
          Copyright ©️{" "}
          <span className="text-white cursor-pointer font-bold">
            {" "}
            OM JADAV{" "}
          </span>{" "}
          {new Date().getFullYear()}. All rights reservered.
        </p>
      </footer>
    </>
  );
};
