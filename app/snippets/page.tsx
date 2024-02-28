import React from "react";
import { BsFileEarmarkCodeFill } from "react-icons/bs";

const Snippets = () => {
  return (
    <div className="flex flex-col px-36 w-3/4 m-auto mt-30 border border-grey rounded-md p-3">
      <div className="flex items-center justify-between">
        <h3>Snippets</h3>
        <button className="flex bg-black-2 text-whiten rounded-md p-2">
          Add Snippet
        </button>
      </div>
      <div className="grid py-5 grid-cols-2 gap-8">
        <div className="flex flex-col border border-grey rounded-md p-3">
          <h5 className="text-xl font-bold">How to add dark theme!</h5>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            To use the dark class in shadcn, simply add the dark class to any
            element you want to apply dark mode styles to.
          </p>
          <div className="flex justify-end items-center">
            <button className="flex items-center p-2 bg-meta-4 rounded-md text-whiten">
              <i className="mr-3">
                <BsFileEarmarkCodeFill />
              </i>
              Show Snippet
            </button>
          </div>
        </div>
        <div className="flex flex-col border border-grey rounded-md p-3">
          <h5 className="text-xl font-bold">How to add dark theme!</h5>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            To use the dark class in shadcn, simply add the dark class to any
            element you want to apply dark mode styles to.
          </p>
          <div className="flex justify-end items-center">
            <button className="flex items-center p-2 bg-meta-4 rounded-md text-whiten">
              <i className="mr-3">
                <BsFileEarmarkCodeFill />
              </i>
              Show Snippet
            </button>
          </div>
        </div>
        <div className="flex flex-col border border-grey rounded-md p-3">
          <h5 className="text-xl font-bold">How to add dark theme!</h5>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            To use the dark class in shadcn, simply add the dark class to any
            element you want to apply dark mode styles to.
          </p>
          <div className="flex justify-end items-center">
            <button className="flex items-center p-2 bg-meta-4 rounded-md text-whiten">
              <i className="mr-3">
                <BsFileEarmarkCodeFill />
              </i>
              Show Snippet
            </button>
          </div>
        </div>
        <div className="flex flex-col border border-grey rounded-md p-3">
          <h5 className="text-xl font-bold">How to add dark theme!</h5>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            To use the dark class in shadcn, simply add the dark class to any
            element you want to apply dark mode styles to.
          </p>
          <div className="flex justify-end items-center">
            <button className="flex items-center p-2 bg-meta-4 rounded-md text-whiten">
              <i className="mr-3">
                <BsFileEarmarkCodeFill />
              </i>
              Show Snippet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Snippets;
