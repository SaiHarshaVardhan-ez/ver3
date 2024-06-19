import React from "react";
import RenderBlocks from "./editorComponents/RenderBlocks";
const Editor = ({ content = [], setContent }) => {


  return (
    <div className="flex flex-col w-full h-full items-center justify-center border border-black">
      <h2>
        <b>Editor Area</b>
      </h2>
      <div className="w-full h-full bg-white p-2 shadow-lg border border-grey-200 overflow-auto rounded flex flex-col gap-4">
        <RenderBlocks  content={content} setContent={setContent} />
      </div>
    </div>
  );
};

export default Editor;
