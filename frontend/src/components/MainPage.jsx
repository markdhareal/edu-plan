import React from "react";

import FormComponent from "./FormComponent";
import OutputComponents from "./OutputComponents";
import "./MainPage.css";
import "../App.css";
import NavBar from "./NavBar";

const MainPage = () => {
  return (
    <>
      <NavBar />
      <main>
        <div className="main">
          <div className="gradient" />
        </div>
        <div className="app">
          <div className="w-1/2 p-4">
            <FormComponent />
          </div>
          <div className="w-1/2 p-4">
            <OutputComponents />
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;
