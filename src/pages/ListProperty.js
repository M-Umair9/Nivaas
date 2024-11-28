import React, { useState } from "react";
import Button from "../Components/Button";
import PriceInput from "../Components/PriceInput";
import TypeSelector from "../Components/TypeSelector";
import Dropdown from "../Components/DropDown";
import ImagePicker from "../Components/ImagePicker";
import axios from "axios";

const ListProperty = () => {
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [petPolicy, setPetPolicy] = useState("");
  const [details, setDetails] = useState("");
  const [error, setError] = useState("");
  const [images, setImages] = useState([]);

  // Function to validate input
  const validatePrice = (value) => {
    // Only allow integers
    const regex = /^[0-9]*$/;
    if (regex.test(value)) {
      setError("");
      setPrice(value); // Update state if valid
    } else {
      setError("Price must be an integer!");
    }
  };

  // Handle image uploads
  const handleImageUpload = (uploadedImages) => {
    setImages(uploadedImages); // Store the uploaded image URLs or base64
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!price || !type || !bedrooms || !bathrooms || !petPolicy) {
      setError("Please fill out all fields!");
      return;
    }

    const formData = new FormData();
    formData.append("price", parseInt(price, 10));
    formData.append("type", type);
    formData.append("bedrooms", bedrooms);
    formData.append("bathrooms", bathrooms);
    formData.append("petPolicy", petPolicy);
    formData.append("details", details);

    images.forEach((image) => {
      formData.append("images", image); // Ensure images are File objects
    });

    try {
      const response = await axios.post(
        "http://localhost:8000/properties", // Corrected URL
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Property submitted successfully:", response.data);
        setError("");
        // Reset form fields
        setPrice("");
        setType("");
        setBedrooms("");
        setBathrooms("");
        setPetPolicy("");
        setDetails("");
        setImages([]);
      } else {
        setError("Failed to submit property. Please try again.");
      }
    } catch (err) {
      if (err.response) {
        setError(
          `Server Error: ${err.response.data.message || "Unknown error"}`
        );
        console.error("Error Response:", err.response.data);
      } else {
        setError("An error occurred while submitting the property.");
        console.error(err.message);
      }
    }
  };

  return (
    <div className="bg-dark-grey p-6 text-white min-h-screen flex items-center justify-center ">
      <form
        className="w-full max-w-lg bg-customDark p-6 rounded-lg shadow-lg md:w-3/4 lg:w-1/2 max-w-lg "
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl mb-6 text-center font-bold">Add Details</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {/*Price Field */}
        <PriceInput
          label="Price"
          placeholder="Enter rent per month"
          onChange={validatePrice}
          value={price}
        />
        {/*type Field */}
        <TypeSelector
          label="Type"
          options={["Apartment", "House", "Townhouse", "Duplex", "Room"]}
          selectedOption={type}
          onSelect={setType}
        />
        {/*bedrooms Field */}
        <TypeSelector
          label="Bedrooms"
          options={["Studio", "1", "2", "3", "4", "5+"]}
          selectedOption={bedrooms}
          onSelect={setBedrooms}
        />
        {/*bathrooms Field */}
        <TypeSelector
          label="Bathrooms"
          options={["1", "2", "3"]}
          selectedOption={bathrooms}
          onSelect={setBathrooms}
        />
        {/*dropdown menu */}
        <Dropdown
          label="Pet Policy"
          options={[
            "Pets Allowed",
            "Dogs Allowed",
            "Cats Allowed",
            "Not Allowed",
          ]}
          // selectedOption={petPolicy}
          onSelect={setPetPolicy}
        />

        <PriceInput
          label="Details"
          placeholder="Enter Details"
          onChange={setDetails}
          value={details}
        />
        <ImagePicker onImagesSelected={handleImageUpload} />

        <Button type="submit" text="List Property" />
      </form>
    </div>
  );
};

export default ListProperty;
