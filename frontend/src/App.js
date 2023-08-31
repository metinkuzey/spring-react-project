import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Brand from "./carBrand/pages/Brand";
import Model from "./carModel/pages/Model";
import ModelUpdate from "./carModel/pages/ModelUpdate";
import Vehicle from "./vehicle/pages/Vehicle";
import VehicleUpdate from "./vehicle/pages/VehicleUpdate";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-stone-100 min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/vehicles/:paramId" Component={VehicleUpdate} />
            <Route path="/vehicles" Component={Vehicle} />
            <Route path="/brands" Component={Brand} />
            <Route path="/models/:paramId" Component={ModelUpdate} />
            <Route path="/models" Component={Model} />
            <Route path="/" Component={Home} exact />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;

/*
We can refer to below medium link for react-router-dom: 
https://medium.com/front-end-weekly/react-router-dom-the-essentials-f63dca64dc3e
*/
