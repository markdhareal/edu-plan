import React from "react";
import "./App.css";
import FormComponent from "./components/FormComponent";
import OutputComponents from "./components/OutputComponents";

const App = () => {
  return (
    <>
      <main>
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

export default App;
