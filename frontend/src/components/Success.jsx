import React, { useState } from "react";

const Success = ({ message }) => {
  const [isSuccessVisible, setIsSuccessVisible] = useState(true);

  const handleVisibility = () => {
    setIsSuccessVisible((prev) => !prev);
  };

  return (
    <>
      {isSuccessVisible ? (
        <div className="bg-green-500 py-2 px-10 flex justify-between">
          <p>{message}</p>
          <button
            className="text-black hover:text-gray-300"
            onClick={handleVisibility}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Success;
