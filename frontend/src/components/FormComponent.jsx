import React, { useState } from "react";
import axios from "axios";
const FormComponent = ({ onLessonPlanGenerated }) => {
  const [buttonState, setButtonState] = useState(true);
  const [formData, setFormData] = useState({
    subject: "",
    lesson: "",
    duration: "",
    gradeLevel: "",
    gradeType: "elementary",
  });

  const [error, setError] = useState({
    subject: "",
    lesson: "",
    duration: "",
    gradeLevel: "",
  });

  const validateForm = () => {
    let valid = true;
    const errorState = {};

    Object.keys(formData).forEach((field) => {
      if (!formData[field].trim()) {
        errorState[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required.`;
        valid = false;
      } else {
        errorState[field] = "";
      }
    });

    setError(errorState);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonState(!buttonState);

    if (!validateForm()) {
      setButtonState(buttonState);
      return;
    }

    try {
      const response = await axios.post(
        "https://edu-plan.onrender.com/send-data",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);

      if (response.data && response.data.lesson_plan) {
        onLessonPlanGenerated(response.data.lesson_plan);
      } else {
        console.log("No Lesson Plan found in response");
      }

      setFormData({
        subject: "",
        lesson: "",
        duration: "",
        gradeLevel: "",
        gradeType: "elementary",
      });

      setError({});

      setButtonState(buttonState);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
      <h1 className="head_text text-black">
        Generate <span className="text-[#9667e0]">Lesson Plan</span>
      </h1>

      <div className="bg-[#9667e0] w-full h-1 mt-6" />
      {/* <h3 className="head_text text-black">
        <span className="text-[#9667e0]">Plan</span> in Seconds
      </h3> */}

      <div className="flex items-center justify-center mt-14 max-w-md mx-auto bg-white p-4 rounded-lg shadow-2xl">
        <form onSubmit={handleSubmit} method="POST">
          <p className="text-black mt-4">Subject</p>
          <input
            className={`px-4 py-2 mb-7 border text-black rounded-md w-full ${
              error.subject
                ? "border-[#c52d34]"
                : "focus:border-[#9667e0] focus:outline-none"
            }`}
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Science"
          />

          <p className="text-black">Lesson</p>
          <input
            className={`px-4 py-2 mb-7 border text-black rounded-md w-full ${
              error.lesson
                ? "border-[#c52d34]"
                : "focus:border-[#9667e0] focus:outline-none"
            }`}
            type="text"
            name="lesson"
            value={formData.lesson}
            onChange={handleChange}
            placeholder="Solar System"
          />

          <div className="flex space-x-4 w-full mb-7">
            <div className="w-1/2">
              <p className="text-black">Duration</p>
              <input
                className={`px-4 py-2 mb-7 border text-black rounded-md w-full ${
                  error.duration
                    ? "border-[#c52d34]"
                    : "focus:border-[#9667e0] focus:outline-none"
                }`}
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="1 hour"
              />
            </div>

            <div className="w-1/2">
              <p className="text-black">Grade Level</p>
              <input
                className={`px-4 py-2 mb-7 border text-black rounded-md w-full ${
                  error.gradeLevel
                    ? "border-[#c52d34]"
                    : "focus:border-[#9667e0] focus:outline-none"
                }`}
                type="text"
                name="gradeLevel"
                value={formData.gradeLevel}
                onChange={handleChange}
                placeholder="Grade 4 or 4th Grade"
              />
            </div>
          </div>

          <p className="text-black">Type</p>
          <select
            className="px-4 py-2 text-black border rounded-md w-full mb-7 focus:border-[#9667e0] focus:outline-none"
            name="gradeType"
            value={formData.gradeType}
            onChange={handleChange}
          >
            <option className="text-black" value="elementary">
              Elementary
            </option>
            <option className="text-black" value="highschool">
              High School
            </option>
          </select>
          {buttonState ? (
            <button
              className="font-bold px-6 py-4 text-white rounded w-full bg-[#9667e0] transition-all duration-200 shadow-md hover:ring-[#b590f1] hover:ring-4 active:scale-95 active:bg-[#b590f1]"
              type="submit"
            >
              Generate
            </button>
          ) : (
            <div className="flex flex-col w-full m-auto">
              <p className="flex justify-center text-black font-bold ">
                Generating Lesson Plan
              </p>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default FormComponent;
