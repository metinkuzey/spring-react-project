import React from "react";

import VehicleComponent from "../components/VehicleComponent";

const Home = () => {
  return (
    <div className="bg-orange-600">
      <div className="bg-stone-200 h-20 pl-10 flex items-center">
        <p className="text-2xl font-semibold text-black">
          OUR MOST PREFERRED VEHICLES
        </p>
      </div>
      <div className="flex flex-wrap gap-20 m-10">
        <VehicleComponent />
      </div>
    </div>
  );
};

export default Home;
