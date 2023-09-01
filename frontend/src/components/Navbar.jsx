import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="md:h-24 w-full bg-slate-50 flex justify-between items-center shadow-md">
      <div className="ml-5 text-4xl text-gray-900 font-semibold">
        <Link to="/">
          <p>
            Rent<span className="text-orange-600 font-extralight ">*2M</span>
          </p>
        </Link>
      </div>
      <div className="md:flex md:flex-row md:gap-20 md:pr-10 text-right">
        <div className="md:flex md:gap-5">
          <Link to="/brands">
            <button className="btn">MANAGE BRAND</button>
          </Link>
          <Link to="/models">
            <button className="btn">MANAGE MODEL</button>
          </Link>
          <Link to="/vehicles">
            <button className="btn">MANAGE VEHICLE</button>
          </Link>
          <button className="btn">CAR RENTAL</button>
          <button className="btn">MONTHLY CAR RENTAL</button>
        </div>
        <div className="md:flex md:gap-3 flex gap-3 justify-end">
          <button className="btn">LOG IN</button>
          <p>|</p>
          <button className="btn">REGISTER</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
