import React from "react";

const Editor = () => {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <h2>
        <b>Editor Area</b>
      </h2>
      <div
        className="w-full h-full text-center font-bold bg-white p-2 rounded shadow-lg overflow-auto border border-black rounded"
        contentEditable="true"
      ></div>
    </div>
  );
};

export default Editor;
