import React from "react";

const Social = ({
  icon,
  link,
  buttonText = "Listen",
  height = "h-auto",
  width = "w-2/6",
}) => {
  const imageScaling = `${height} ${width} object-scale-down`;

  return (
    <div className="flex items-center justify-between w-full border-b border-slate-200 p-4 hover:bg-slate-100 transition ease-in-out duration-300">
      <img
        className={`${imageScaling} w-1/5`}
        src={icon}
        alt="Social Icon"
        onError={(e) => (e.target.src = "https://via.placeholder.com/64")}
      />
      <a href={link} target="_blank" rel="noreferrer">
        <button className="bg-transparent flex justify-center items-center h-10 w-28 hover:bg-slate-500 hover:text-white text-slate-700 py-2 px-4 border border-slate-300 hover:border-transparent rounded-full transition ease-in-out duration-300">
          {buttonText}
        </button>
      </a>
    </div>
  );
};

export default Social;
