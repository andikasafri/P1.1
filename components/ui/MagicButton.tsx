import React from "react";

const MagicButton = () => {
  return (
    <button className="px-8 py-2 rounded-full relative bg-black text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
      <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
      <span className="relative z-20">Show My Work</span>
    </button>
  );
};

export default MagicButton;
