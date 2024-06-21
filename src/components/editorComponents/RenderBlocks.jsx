import React, { useState } from "react";
import { CiCirclePlus, CiCircleRemove } from "react-icons/ci";
import DropZone from "../dropzone/DropZone";

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
    alert("drag and drop from inputs");
  };

  const handleDrop = (blockIndex, positionIndex, droppedItem) => {
    const updatedData = [...data];
    if (!updatedData[blockIndex]) {
      updatedData[blockIndex] = [];
    }
    if (droppedItem.type.startsWith("file:")) {
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

  const RenderInput = ({ type, blockIndex, positionIndex }) => {
    const [textInput, setTextInput] = useState("");

    const handleTextSubmit = (event) => {
      event.preventDefault();
      handleFileChange(blockIndex, positionIndex, textInput);
      setTextInput("");
    };

    if (type instanceof File) {
      const fileURL = URL.createObjectURL(type);
      if (type.type.startsWith("image/")) {
        return <img src={fileURL} alt="preview" className="h-full w-full" />;
      } else if (type.type === "application/pdf") {
        return (
          <embed
            src={fileURL}
            type="application/pdf"
            className="h-full w-full"
          />
        );
      } else if (type.type.startsWith("video/")) {
        console.log("ji");
        return <video src={fileURL} controls className="h-full w-full" />;
      }
      // else if(type){
      //   console.log(type);
      //   return <h5>{type}</h5>;
      // }
    }

    switch (type) {
      case "text":
        return (
          <form onSubmit={handleTextSubmit}>
            <textarea
              id="txtArea"
              className="p-1 h-full w-full"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        );
      case "image":
        return (
          <input
            type="file"
            accept="image/*"
            className="border p-1 rounded w-full"
            onChange={(e) =>
              handleFileChange(blockIndex, positionIndex, e.target.files[0])
            }
          />
        );
      case "pdf":
        return (
          <input
            type="file"
            accept="application/pdf"
            className="border p-1 rounded w-full"
            onChange={(e) =>
              handleFileChange(blockIndex, positionIndex, e.target.files[0])
            }
          />
        );
      case "video":
        return (
          <input
            type="file"
            accept="video/*"
            className="border p-1 rounded w-full"
            onChange={(e) =>
              handleFileChange(blockIndex, positionIndex, e.target.files[0])
            }
          />
        );
      case "heading":
        return (
          <input
            type="text"
            placeholder="Heading"
            className="border p-1 rounded w-full font-bold text-xl"
          />
        );
      default:
        console.log(type);
        return <h5>{type}</h5>;
    }
  };

  return content.map((blockId, index) => {
    switch (blockId) {
      case "full-width":
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
      case "half-width":
        if (!data[index]) {
          setData((prevData) => [...prevData, [null, null]]);
        }
        return (
          <div className="flex space-x-4" key={`half-width-${index}`}>
            {[0, 1].map((pos) => (
              <DropZone
                height={100}
                width={300}
                key={`half-width-${index}-${pos}`}
                onDrop={(item) => handleDrop(index, pos, item)}
                className="w-1/2 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
              >
                <div>
                  {data[index] && data[index][pos] !== undefined && (
                    <RenderInput
                      type={data[index][pos]}
                      blockIndex={index}
                      positionIndex={pos}
                    />
                  )}
                </div>
                <CiCirclePlus size={32} onClick={addInput} />
              </DropZone>
            ))}
            <button
              className="ml-2 text-red-600"
              onClick={() => removeBlock(index)}
            >
              <CiCircleRemove size={32} />
            </button>
          </div>
        );
      case "third-width":
        if (!data[index]) {
          setData((prevData) => [...prevData, [null, null, null]]);
        }
        return (
          <div className="flex space-x-4" key={`third-width-${index}`}>
            {[0, 1, 2].map((pos) => (
              <DropZone
                height={100}
                width={200}
                key={`third-width-${index}-${pos}`}
                onDrop={(item) => handleDrop(index, pos, item)}
                className="w-1/3 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
              >
                <div>
                  {data[index] && data[index][pos] !== undefined && (
                    <RenderInput
                      type={data[index][pos]}
                      blockIndex={index}
                      positionIndex={pos}
                    />
                  )}
                </div>
                <CiCirclePlus size={32} onClick={addInput} />
              </DropZone>
            ))}
            <button
              className="ml-2 text-red-600"
              onClick={() => removeBlock(index)}
            >
              <CiCircleRemove size={32} />
            </button>
          </div>
        );
      case "quarter-width":
        if (!data[index]) {
          setData((prevData) => [...prevData, [null, null, null, null]]);
        }
        return (
          <div className="flex space-x-4" key={`quarter-width-${index}`}>
            {[0, 1, 2, 3].map((pos) => (
              <DropZone
                height={100}
                width={100}
                key={`quarter-width-${index}-${pos}`}
                onDrop={(item) => handleDrop(index, pos, item)}
                className="w-1/4 h-20 bg-gray-200 border border-gray-400 rounded flex items-center justify-center"
              >
                <div>
                  {data[index] && data[index][pos] !== undefined && (
                    <RenderInput
                      type={data[index][pos]}
                      blockIndex={index}
                      positionIndex={pos}
                    />
                  )}
                </div>
                <CiCirclePlus size={32} onClick={addInput} />
              </DropZone>
            ))}
            <button
              className="ml-2 text-red-600"
              onClick={() => removeBlock(index)}
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

export default RenderBlocks;
