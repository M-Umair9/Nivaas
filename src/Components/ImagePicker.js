import React, { useState } from "react";

const ImagePicker = ({ onImagesSelected }) => {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    // Convert FileList to Array
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file)); // Create URLs for preview
    setImages(imageUrls);
    // Pass files back to the parent
    onImagesSelected(files);
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Preview ${index + 1}`}
            className="w-32 h-32 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default ImagePicker;
