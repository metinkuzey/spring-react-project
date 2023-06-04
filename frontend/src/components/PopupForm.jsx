import React from "react";

const PopupForm = ({
  isOpen,
  children,
  options,
  visibilityHandler,
  actionHandler,
}) => {
  return (
    <div
      className={`${
        isOpen ? "fixed inset-0 flex items-center justify-center" : "hidden"
      } bg-black bg-opacity-30`}
    >
      <div className="bg-gray-700 shadow rounded-lg p-6 w-1/3">
        <div className="p-6 text-center">
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            {children}
          </h3>

          <button
            type="button"
            onClick={actionHandler}
            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
          >
            {options[0]}
          </button>
          <button
            onClick={visibilityHandler}
            type="button"
            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            {options[1]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
