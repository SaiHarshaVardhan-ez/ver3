import React from "react";

const PreviewPopup = ({ imageSrc, onClose }) => {
  return (
    <div className="preview-popup">
      <div className="preview-content">
        <img src={imageSrc} alt="Preview" />
      </div>
    </div>
  );
};

export default PreviewPopup;
