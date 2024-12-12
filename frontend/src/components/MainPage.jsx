import React, { useState, useEffect } from "react";

import FormComponent from "./FormComponent";
import OutputComponents from "./OutputComponents";
import "./MainPage.css";
import "../App.css";
import NavBar from "./NavBar";

const MainPage = () => {
  const [lessonPlan, setLessonPlan] = useState(null);

  const handleGeneratedLessonPlan = (lessonPlan) => {
    console.log("Received lesson plan in MainPage:", lessonPlan);
    setLessonPlan(lessonPlan);
  };

  return (
    <>
      <NavBar />
      <main>
        <div className="main">
          <div className="gradient" />
        </div>
        <div className="app">
          <div className="w-1/2 p-4">
            <FormComponent onLessonPlanGenerated={handleGeneratedLessonPlan} />
          </div>
          <div className="w-1/2 p-4">
            <OutputComponents lessonPlan={lessonPlan} />
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;
