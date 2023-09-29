import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <article style={{ padding: "100px" }}>
      <h1 className="text-5xl">Oops!</h1>
      <p className="text-3xl text-orange-600">Page Not Found</p>
      <div className=" text-7xl md:text-9xl hover:text-orange-600">
        <Link to="/">Visit Our Homepage</Link>
      </div>
    </article>
  );
};

export default Missing;
