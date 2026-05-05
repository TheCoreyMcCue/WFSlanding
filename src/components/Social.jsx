import React from "react";

const Social = ({
  icon,
  link,
  label,
  buttonText = "Listen",
  height = "h-8",
  width = "w-8",
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-between w-full border-b border-white/10 px-5 py-3 hover:bg-white/10 transition-all duration-300 group"
    >
      <div className="flex items-center gap-4">
        <div className="bg-white rounded-xl p-1.5 flex items-center justify-center h-12 w-12 shrink-0">
          <img
            className={`${height} ${width} object-contain`}
            src={icon}
            alt={label || "Social Icon"}
            onError={(e) => (e.target.src = "https://via.placeholder.com/64")}
          />
        </div>
        {label && (
          <span className="text-white/70 text-sm font-medium tracking-wide group-hover:text-white transition-colors duration-300">
            {label}
          </span>
        )}
      </div>
      <span className="text-xs text-white/30 font-medium uppercase tracking-widest group-hover:text-white/60 transition-colors duration-300">
        {buttonText} ›
      </span>
    </a>
  );
};

export default Social;
