import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Brand from "./brand/pages/Brand";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-stone-100 min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/create-brands" Component={Brand} />
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
