import React from "react";

const StepperControl = ({handleClick, currentStep, steps}) => {
  return (
    <div className="container flex justify-around mt-6 mb-8">
      {/* Previous Button  */}
      <div className="hover:scale-105 duration-300">
        <button onClick={()=>handleClick("previous")}
          className={`bg-white text-slate-400 uppercase py-2 px-4
            rounded-xl font-semibold cursor-pointer border-2 border-slate-300
             drop-shadow-md transition duration-200
             ease-in-out ${currentStep===1?"opacity-50 cursor-not-allowed":" hover:bg-slate-800 hover:text-white"}`}
        >
          Previous
        </button>
        </div>
        {/* Next Button  */}
        <div className="hover:scale-105 duration-300">
        <button onClick={()=>handleClick("next")}
          className="bg-green-500 text-slate-100 uppercase py-2 px-5
            rounded-xl font-semibold cursor-pointer border-2 border-slate-300
             hover:bg-slate-800 hover:text-white drop-shadow-md transition duration-200
             ease-in-out"
        >
          {currentStep === steps.length ? "Confirm" :" Next"}
        </button>
      </div>
    </div>
  );
};

export default StepperControl;
