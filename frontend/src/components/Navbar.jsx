import React from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../hooks/useAuth";

const Navbar = () => {
  const { auth, setAuth } = useAuthContext();

  const logoutHandler = () => {
    setAuth({});
  };

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
        {auth?.access_token && (
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
          </div>
        )}
        <div className="md:flex md:gap-3 flex gap-3 justify-end">
          {auth?.access_token ? (
            <button className="btn" onClick={logoutHandler}>
              LOG OUT
            </button>
          ) : (
            <>
              <Link to="/login">
                <button className="btn">LOG IN</button>
              </Link>
              <p>|</p>
              <Link to="/register">
                <button className="btn">REGISTER</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
