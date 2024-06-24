import React, { useState, useRef } from "react";
import RenderBlocks from "./editorComponents/RenderBlocks";
import { useNavigate } from "react-router-dom";
import * as htmlToImage from "html-to-image";
import PreviewPopup from "./PreviewPopup";

const Editor = ({ content = [], setContent }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const previewRef = useRef();
  const navigate = useNavigate();

  const handlePreview = () => {
    const element = previewRef.current;

    // Remember current scroll position
    const scrollY = window.scrollY;

    // Set temporary styles to ensure all content is visible
    element.style.height = `${element.scrollHeight}px`;
    element.style.overflow = "visible";

    // Capture the image
    htmlToImage
      .toPng(element)
      .then(function (dataUrl) {
        setShowPreview(true);
        setPreviewImage(dataUrl);
      })
      .catch(function (error) {
        console.error("Preview generation failed: ", error);
      })
      .finally(() => {
        // Reset styles after capture
        element.style.height = "auto";
        element.style.overflow = "auto";

        // Restore scroll position
        window.scrollTo(0, scrollY);
      });
  };

  const handleSave = () => {
    console.log(previewRef.current);
  };

  const closePreview = () => {
    setShowPreview(false);
    setPreviewImage(null);
  };

  return (
    <div
      className={`p-4 flex flex-col w-full h-full items-center justify-center border border-black ${
        showPreview ? "blur-bg" : ""
      }`}
    >
      <h2>
        <b>Editor Area</b>
      </h2>
      <div
        ref={previewRef}
        className="w-full h-full bg-white p-2 shadow-lg border border-gray-200 overflow-auto rounded flex flex-col gap-4"
      >
        <RenderBlocks content={content} setContent={setContent} />
      </div>
      <div className="flex flex-row gap-2 p-4 rounded">
        <button
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={handlePreview}
        >
          Preview
        </button>
        <button
          className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
      </div>
      {showPreview && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-gray-500 backdrop-filter backdrop-blur-lg">
          <div className="relative w-full max-w-screen-lg h-full">
            <PreviewPopup imageSrc={previewImage} onClose={closePreview} />
            <button
              className="absolute top-2 right-2 bg-white text-gray-800 rounded-full p-2 shadow-md hover:bg-gray-200"
              onClick={closePreview}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Editor;
