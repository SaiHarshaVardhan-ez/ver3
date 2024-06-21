// RenderBlocks.js
import React, { useState } from 'react';
import { CiCirclePlus, CiCircleRemove } from 'react-icons/ci';
import DropZone from '../dropzone/DropZone';
import RenderInput from './RenderInput'; // Assuming it's in the same folder

const RenderBlocks = ({ content, setContent }) => {
  const [data, setData] = useState([]);
  console.log(data);

  const removeBlock = (blockIndexToRemove) => {
    const updatedContent = content.filter(
      (_, index) => index !== blockIndexToRemove
    );
    setContent(updatedContent);

    const updatedData = data.filter((_, index) => index !== blockIndexToRemove);
    setData(updatedData);
  };

  const addInput = () => {
    alert('drag and drop from inputs');
  };

  const handleDrop = (blockIndex, positionIndex, droppedItem) => {
    const updatedData = [...data];
    if (!updatedData[blockIndex]) {
      updatedData[blockIndex] = [];
    }
    if (droppedItem.type.startsWith('file:')) {
      updatedData[blockIndex][positionIndex] = droppedItem.file;
    } else {
      updatedData[blockIndex][positionIndex] = droppedItem.type;
    }
    setData(updatedData);
    setContent([...content, droppedItem]);
  };

  const handleFileChange = (blockIndex, positionIndex, file) => {
    const updatedData = [...data];
    if (!updatedData[blockIndex]) {
      updatedData[blockIndex] = [];
    }
    updatedData[blockIndex][positionIndex] = file;
    setData(updatedData);
  };

  return content.map((blockId, index) => {
    switch (blockId) {
      case 'full-width':
        if (!data[index]) {
          setData((prevData) => [...prevData, [null]]);
        }
        return (
          <div className="flex space-x-4" key={`full-width-${index}`}>
            <DropZone
              height={100}
              width={700}
              key={`full-width-${index}`}
              onDrop={(item) => handleDrop(index, 0, item)}
            >
              <div
                className="h-full w-full bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
                id={blockId}
              >
                {data[index] && data[index][0] !== undefined && (
                  <RenderInput
                    type={data[index][0]}
                    blockIndex={index}
                    positionIndex={0}
                    handleFileChange={handleFileChange}
                  />
                )}
                <CiCirclePlus size={32} onClick={addInput} />
              </div>
            </DropZone>
            <button
              className="ml-2 text-red-600"
              onClick={() => removeBlock(index)}
            >
              <CiCircleRemove size={32} />
            </button>
          </div>
        );
      // Other cases (half-width, third-width, quarter-width) can be similarly refactored
      default:
        return null;
    }
  });
};

export default RenderBlocks;
