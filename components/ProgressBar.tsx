import React, { useEffect, useState } from "react";

interface ProgressBarPorps {
  range?: number;
  text?: string;
}

const ProgressBar: React.FC<ProgressBarPorps> = ({ range, text }) => {
  return (
    <div className="flex flex-col justify-center items-center px-4 py-2 text-gray-200 w-[100%]">
      <div className="flex w-full justify-between mb-2 px-1">
        <span className="text-xs">{text}</span>
        <span className="text-xs">{range}%</span>
      </div>
      <div className="w-full rounded-md">
        <progress className="progress w-full" max="100" value={range} />
      </div>
    </div>
  );
};

export default ProgressBar;
