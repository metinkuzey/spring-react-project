import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Brand from "./carBrand/pages/Brand";
import Model from "./carModel/pages/Model";
import ModelUpdate from "./carModel/pages/ModelUpdate";
import Vehicle from "./vehicle/pages/Vehicle";
import VehicleUpdate from "./vehicle/pages/VehicleUpdate";
import Login from "./user/pages/Login";
import AuthProvider from "./context/AuthProvider";
import RequireAuth from "./user/pages/RequireAuth";
import Missing from "./pages/Missing";
import Unauthorized from "./user/pages/Unauthorized";
import Register from "./user/pages/Register";
import PersistLogin from "./user/components/PersistLogin";

const ROLES = {
  USER: "USER",
  ADMIN: "ADMIN",
};

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="bg-stone-100 min-h-screen">
          <Navbar />
          <main>
            <Routes>
              {/* we want to protect these routes */}
              <Route element={<PersistLogin />}>
                <Route
                  element={
                    <RequireAuth allowedRoles={[ROLES.USER, ROLES.ADMIN]} />
                  }
                >
                  <Route path="/models" element={<Model />} />
                  <Route path="/vehicles/:paramId" Component={VehicleUpdate} />
                  <Route path="/vehicles" Component={Vehicle} />
                  <Route path="/brands" Component={Brand} />
                  <Route path="/models/:paramId" Component={ModelUpdate} />
                </Route>
                <Route path="/" Component={Home} exact />
              </Route>

              <Route path="/unauthorized" element={<Unauthorized />} />
              <Route path="register" Component={Register} />
              <Route path="login" Component={Login} />

              {/* catch all */}
              <Route path="*" element={<Missing />} />
            </Routes>
          </main>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;

/*
We can refer to below medium link for react-router-dom: 
https://medium.com/front-end-weekly/react-router-dom-the-essentials-f63dca64dc3e
*/
