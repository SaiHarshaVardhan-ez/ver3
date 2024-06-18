import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";

const Editor = (props) => {
  const removeBlock = (blockIdToRemove) => {
    const indexToRemove = props.content.findIndex(
      (id) => id === blockIdToRemove
    );

    if (indexToRemove !== -1) {
      const updatedContent = [
        ...props.content.slice(0, indexToRemove),
        ...props.content.slice(indexToRemove + 1),
      ];
      props.setContent(updatedContent);
    }
  };

  const addInput = () => {
    // write a logic here so that we can select a input and place it in the function caller div.
  };

  const renderBlocks = () => {
    return props.content.map((blockId) => {
      switch (blockId) {
        case "full-width":
          return (
            <>
              <div
                key={blockId}
                className="h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
                id={blockId}
                onClick={addInput}
              >
                <CiCirclePlus size={32} />
                <button
                  className="ml-2 text-red-600"
                  onClick={() => removeBlock(blockId)}
                >
                  <CiCircleRemove size={32} />
                </button>
              </div>
            </>
          );
        case "half-width":
          return (
            <>
              <div className="flex space-x-4" key={blockId}>
                <div
                  onClick={addInput}
                  className="w-1/2 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
                >
                  <CiCirclePlus size={32} />
                </div>
                <div
                  onClick={addInput}
                  className="w-1/2 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
                >
                  <CiCirclePlus size={32} />
                  <button
                    className="ml-2 text-red-600"
                    onClick={() => removeBlock(blockId)}
                  >
                    <CiCircleRemove size={32} />
                  </button>
                </div>
              </div>
            </>
          );
        case "third-width":
          return (
            <>
              <div className="flex space-x-4" key={blockId}>
                <div
                  onClick={addInput}
                  className="w-1/3 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
                >
                  <CiCirclePlus size={32} />
                </div>
                <div
                  onClick={addInput}
                  className="w-1/3 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
                >
                  <CiCirclePlus size={32} />
                </div>
                <div
                  onClick={addInput}
                  className="w-1/3 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
                >
                  <CiCirclePlus size={32} />
                  <button
                    className="ml-2 text-red-600"
                    onClick={() => removeBlock(blockId)}
                  >
                    <CiCircleRemove size={32} />
                  </button>
                </div>
              </div>
            </>
          );
        case "quarter-width":
          return (
            <>
              <div className="flex space-x-4" key={blockId}>
                <div
                  onClick={addInput}
                  className="w-1/4 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
                >
                  <CiCirclePlus size={32} />
                </div>
                <div
                  onClick={addInput}
                  className="w-1/4 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
                >
                  <CiCirclePlus size={32} />
                </div>
                <div
                  onClick={addInput}
                  className="w-1/4 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
                >
                  <CiCirclePlus size={32} />
                </div>
                <div
                  onClick={addInput}
                  className="w-1/4 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
                >
                  <CiCirclePlus size={32} />
                  <button
                    className="ml-2 text-red-600"
                    onClick={() => removeBlock(blockId)}
                  >
                    <CiCircleRemove size={32} />
                  </button>
                </div>
              </div>
            </>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className="flex flex-col w-full h-full items-center justify-center border border-black">
      <h2>
        <b>Editor Area</b>
      </h2>
      <div
        // contentEditable
        className="w-full h-full text-center bg-white p-2 shadow-lg overflow-auto rounded flex flex-col gap-4"
      >
        {renderBlocks()}
      </div>
    </div>
  );
};

export default Editor;
