import React from "react";

const Card = ({ model }) => {
  return (
    <div className=" w-64 h-52 text-left ">
      <p className="bg-black text-orange-600 absolute text-lg px-2">
        {model.modelName}
      </p>
      <br />
      <p className=" text-black mt-2 text-sm">{model.modelYear}</p>
      <img
        className=" transition ease-in-out delay-75 hover:scale-110 duration-300"
        src={model.modelPicture}
        alt="car_picture"
      />
    </div>
  );
};

export default Card;
