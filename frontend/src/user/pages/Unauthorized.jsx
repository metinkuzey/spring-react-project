import React from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  return (
    <article style={{ padding: "100px" }}>
      <h1 className="text-red-600 text-6xl text-bold">Unauthorized</h1>
      <br />
      <p className="text-xl text underline underline-offset-2">
        You do not have access to the requested page.
      </p>
      <div className="flexGrow">
        <button
          className="border-2 border-orange-600 px-5 py-1 mt-2 hover:text-black hover:bg-gray-50 rounded"
          onClick={goBack}
        >
          Go Back
        </button>
      </div>
    </article>
  );
};

export default Unauthorized;
