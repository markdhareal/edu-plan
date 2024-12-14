import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const OutputComponents = ({ lessonPlan }) => {
  console.log("Lesson Plan in OutputComponents:", lessonPlan);

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(lessonPlan)
      .then(() => {
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  return (
    <>
      <h1 className="head_text text-black">
        Get the <span className="text-[#9667e0]">Output</span> here
      </h1>
      <div className="bg-[#9667e0] w-full h-1 mt-6" />
      <div className="m-5 h-[72vh]  overflow-y-auto">
        {lessonPlan ? (
          <ReactMarkdown>{lessonPlan}</ReactMarkdown>
        ) : (
          <ReactMarkdown>
            **Your Generated Lesson Plan will appear here.**
          </ReactMarkdown>
        )}
      </div>
      <div className="flex flex-col">
        <button
          onClick={handleCopy}
          className="font-bold px-6 py-4 mx-auto text-white rounded-full max-w-[250px] bg-[#9667e0] transition-all duration-200 shadow-md hover:ring-[#b590f1] hover:ring-4 active:scale-95 active:bg-[#b590f1]"
        >
          {copied ? "Copied!" : "Copy to Clipboard"}
        </button>
      </div>
    </>
  );
};

export default OutputComponents;
