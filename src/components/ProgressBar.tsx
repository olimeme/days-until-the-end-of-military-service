import React from "react";

interface ProgressBarProps {
  value: number;
  color?: string;
}

const ProgressBar = ({
  value = 0,
  color = "bg-blue-500",
}: ProgressBarProps) => {
  return (
    <div className="pt-1 w-2/5 mx-auto text-center">
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
        <div
          style={{ width: `${value}%` }}
          className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center rounded transition-all duration-500 ease-in-out ${color}`}
        ></div>
      </div>
      <p className="text-lg">{value}% пройдено</p>
    </div>
  );
};

export default ProgressBar;
