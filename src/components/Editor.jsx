import React from "react";
import { CiCirclePlus, CiCircleRemove } from "react-icons/ci";
import DropZone from "./dropzone/DropZone";

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
    // write a logic here so that we can select an input and place it in the function caller div.
  };

  const handleDrop = () => {
    console.log("dropped");
  };

  const renderBlocks = () => {
    return props.content.map((blockId, index) => {
      switch (blockId) {
        case "full-width":
          return (
            <DropZone key={`full-width-${index}`} onDrop={handleDrop}>
              <div
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
            </DropZone>
          );
        case "half-width":
          return (
            <div className="flex space-x-4" key={`half-width-${index}`}>
              <DropZone
                onDrop={handleDrop}
                className="w-1/2 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
              >
                <div onClick={addInput}>
                  <CiCirclePlus size={32} />
                </div>
              </DropZone>
              <DropZone
                onDrop={handleDrop}
                className="w-1/2 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
              >
                <div onClick={addInput}>
                  <CiCirclePlus size={32} />
                </div>
                  <button
                    className="ml-2 text-red-600"
                    onClick={() => removeBlock(blockId)}
                  >
                    <CiCircleRemove size={32} />
                  </button>
              </DropZone>
            </div>
          );
        case "third-width":
          return (
            <div className="flex space-x-4" key={`third-width-${index}`}>
              <DropZone
                onDrop={handleDrop}
                className="w-1/3 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
              >
                <div onClick={addInput}>
                  <CiCirclePlus size={32} />
                </div>
              </DropZone>
              <DropZone
                onDrop={handleDrop}
                className="w-1/3 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
              >
                <div onClick={addInput}>
                  <CiCirclePlus size={32} />
                </div>
              </DropZone>
              <DropZone
                onDrop={handleDrop}
                className="w-1/3 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
              >
                <div onClick={addInput}>
                  <CiCirclePlus size={32} />
                </div>
                  <button
                    className="ml-2 text-red-600"
                    onClick={() => removeBlock(blockId)}
                  >
                    <CiCircleRemove size={32} />
                  </button>
              </DropZone>
            </div>
          );
        case "quarter-width":
          return (
            <div className="flex space-x-4" key={`quarter-width-${index}`}>
              <DropZone
                onDrop={handleDrop}
                className="w-1/4 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
              >
                <div onClick={addInput}>
                  <CiCirclePlus size={32} />
                </div>
              </DropZone>
              <DropZone
                onDrop={handleDrop}
                className="w-1/4 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
              >
                <div onClick={addInput}>
                  <CiCirclePlus size={32} />
                </div>
              </DropZone>
              <DropZone
                onDrop={handleDrop}
                className="w-1/4 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
              >
                <div onClick={addInput}>
                  <CiCirclePlus size={32} />
                </div>
              </DropZone>
              <DropZone
                onDrop={handleDrop}
                className="w-1/4 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
              >
                <div onClick={addInput}>
                  <CiCirclePlus size={32} />
                </div>
              <button
                className="ml-2 text-red-600"
                onClick={() => removeBlock(blockId)}
              >
                <CiCircleRemove size={32} />
              </button>
              </DropZone>
            </div>
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
