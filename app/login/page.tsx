"use client";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="flex w-full justify-center items-center m-auto">
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="flex flex-col border border-grey rounded-md p-5 gap-6 w-full max-w-sm">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Get Started!</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Choose your login method
            </p>
          </div>
          <div className="space-y-4">
            <button className="w-full space-x-2 flex items-center border border-grey rounded-md p-3">
              <Image
                src="/icons/github.svg"
                alt="github icon"
                width="100"
                height="100"
                className="w-6 h-6 mr-5"
              />
              Login with GitHub
            </button>
            <button className="w-full space-x-2 flex items-center border border-grey rounded-md p-3">
              <Image
                src="/icons/google.svg"
                alt="google icon"
                width="100"
                height="100"
                className="w-6 h-6 mr-5"
              />
              Login with Google
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
