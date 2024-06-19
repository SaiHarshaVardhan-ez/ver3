import React, { useState } from "react";
import { CiCirclePlus, CiCircleRemove } from "react-icons/ci";
import DropZone from "./dropzone/DropZone";

const Editor = (props) => {
  const [data, setData] = useState({});

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
    alert("drag and drop from inputs");
  };

  const handleDrop = (blockIndex, positionIndex, droppedItem) => {
    const updatedData = { ...data };
    if (!updatedData[blockIndex]) {
      updatedData[blockIndex] = [];
    }
    updatedData[blockIndex][positionIndex] = droppedItem.type;
    setData(updatedData);
  };

  setTimeout(()=>{console.log("Updated Data:", data);},3000)

  const renderBlocks = () => {
    return props.content.map((blockId, index) => {
      switch (blockId) {
        case "full-width":
          if (!data[index]) {
            setData((prevData) => ({ ...prevData, [index]: [null] }));
          }
          return (
            <DropZone key={`full-width-${index}`} onDrop={(item) => handleDrop(index, 0, item)}>
              <div
                className="h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
                id={blockId}
              >
                <CiCirclePlus size={32} onClick={addInput} />
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
          if (!data[index]) {
            setData((prevData) => ({ ...prevData, [index]: [null, null] }));
          }
          return (
            <div className="flex space-x-4" key={`half-width-${index}`}>
              {[0, 1].map((pos) => (
                <DropZone
                  key={`half-width-${index}-${pos}`}
                  onDrop={(item) => handleDrop(index, pos, item)}
                  className="w-1/2 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
                >
                  <div>
                    <CiCirclePlus size={32} onClick={addInput} />
                  </div>
                </DropZone>
              ))}
              <button
                className="ml-2 text-red-600"
                onClick={() => removeBlock(blockId)}
              >
                <CiCircleRemove size={32} />
              </button>
            </div>
          );
        case "third-width":
          if (!data[index]) {
            setData((prevData) => ({ ...prevData, [index]: [null, null, null] }));
          }
          return (
            <div className="flex space-x-4" key={`third-width-${index}`}>
              {[0, 1, 2].map((pos) => (
                <DropZone
                  key={`third-width-${index}-${pos}`}
                  onDrop={(item) => handleDrop(index, pos, item)}
                  className="w-1/3 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
                >
                  <div>
                    <CiCirclePlus size={32} onClick={addInput} />
                  </div>
                </DropZone>
              ))}
              <button
                className="ml-2 text-red-600"
                onClick={() => removeBlock(blockId)}
              >
                <CiCircleRemove size={32} />
              </button>
            </div>
          );
        case "quarter-width":
          if (!data[index]) {
            setData((prevData) => ({ ...prevData, [index]: [null, null, null, null] }));
          }
          return (
            <div className="flex space-x-4" key={`quarter-width-${index}`}>
              {[0, 1, 2, 3].map((pos) => (
                <DropZone
                  key={`quarter-width-${index}-${pos}`}
                  onDrop={(item) => handleDrop(index, pos, item)}
                  className="w-1/4 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
                >
                  <div>
                    <CiCirclePlus size={32} onClick={addInput} />
                  </div>
                </DropZone>
              ))}
              <button
                className="ml-2 text-red-600"
                onClick={() => removeBlock(blockId)}
              >
                <CiCircleRemove size={32} />
              </button>
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
