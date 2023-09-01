import React from "react";

const BrandPanel = ({ panelName, performPanelHandler }) => {
  return (
    <div className="panel-style">
      <div className="flex justify-between items-center">
        <p className="underline underline-offset-1 decoration-double text-sm font-semibold text-black">
          {panelName}
        </p>
        <button
          className=" hover:text-orange-600 px-3 py-1"
          onClick={performPanelHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BrandPanel;
