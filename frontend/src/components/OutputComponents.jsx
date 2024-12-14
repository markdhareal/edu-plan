import React from "react";
import ReactMarkdown from "react-markdown";

const OutputComponents = ({ lessonPlan }) => {
  console.log("Lesson Plan in OutputComponents:", lessonPlan);

  return (
    <>
      <h1 className="head_text text-black">
        Get the <span className="text-[#9667e0]">Output</span> here
      </h1>
      <div className="bg-[#9667e0] w-full h-1 mt-6" />
      <div className="m-5 h-[78vh]  overflow-y-auto">
        {lessonPlan ? (
          <ReactMarkdown>{lessonPlan}</ReactMarkdown>
        ) : (
          <ReactMarkdown>
            **Your Generated Lesson Plan will appear here.**
          </ReactMarkdown>
        )}
      </div>
    </>
  );
};

export default OutputComponents;
