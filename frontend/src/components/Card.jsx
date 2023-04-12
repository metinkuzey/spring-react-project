import React from "react";

const Card = ({ car }) => {
  return (
    <div className=" w-64 h-52 text-left ">
      <p className="bg-black text-orange-600 absolute text-lg px-2">
        {car.brand} {car.name}
      </p>
      <br />
      <p className=" text-black mt-2 text-sm">
        {car.vehicleType} | {car.fuel}
      </p>
      <img
        className=" transition ease-in-out delay-75 hover:scale-110 duration-300"
        src={car.img}
        alt="car_picture"
      />
    </div>
  );
};

export default Card;
