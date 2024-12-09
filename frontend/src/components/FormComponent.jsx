import React from "react";
const FormComponent = () => {
  return (
    <>
      <h1 className="head_text bg-[#9667e0]">Form Component</h1>
      <form className="space-y-7" action="/generate" method="POST">
        <input
          className="px-4 py-2 border text-[#9667e0] rounded-md w-full"
          type="text"
          placeholder="Subject"
        />
        <input
          className="px-4 py-2 border text-[#9667e0] rounded-md w-full"
          type="text"
          placeholder="Lesson"
        />
        <div className="flex space-x-4">
          <input
            className="px-4 py-2 border text-[#9667e0] rounded-md w-1/2"
            type="text"
            placeholder="Duration"
          />
          <input
            className="px-4 py-2 border text-[#9667e0] rounded-md w-1/2"
            type="text"
            placeholder="Grade Level"
          />
        </div>
        <select className="px-4 py-2 border rounded-md w-full" name="gradeType">
          <option value="elementary">Elementary</option>
          <option value="highschool">High School</option>
        </select>
        <button
          className="font-bold px-6 py-4 text-white rounded w-full bg-[#9667e0] hover:bg-[#d4bbfc] hover:text-[#2C2C2C]"
          type="submit"
        >
          Generate
        </button>
      </form>
    </>
  );
};

export default FormComponent;
