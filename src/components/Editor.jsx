import React from "react";
import RenderBlocks from "./editorComponents/RenderBlocks";
import { Link } from "react-router-dom";
const Editor = ({ content = [], setContent }) => {
  return (
    <div className="p-4 flex flex-col w-full h-full items-center justify-center border border-black">
      <h2>
        <b>Editor Area</b>
      </h2>
      <div className="w-full h-full bg-white p-2 shadow-lg border border-grey-200 overflow-auto rounded flex flex-col gap-4">
        <RenderBlocks content={content} setContent={setContent} />
      </div>
      <div className="flex flex-row gap-2 p-4 rounded">
        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Save
        </button>
        <button className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Preview
        </button>
        <Link to={"/"}>
          <button className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Cancel
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Editor;
