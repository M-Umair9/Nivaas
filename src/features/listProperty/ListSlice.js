import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  price: "",
  type: "",
  bedrooms: "",
  bathrooms: "",
  petpolicy: "",
  details: "",
  images: [],
  error: "",
};
const listSlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    setPrice(state, action) {
      state.price = action.payload;
    },
    setType(state, action) {
      state.type = action.payload;
    },
    setBedrooms(state, action) {
      state.bedrooms = action.payload;
    },
    setBathrooms(state, action) {
      state.bathrooms = action.payload;
    },
    setPetPolicy(state, action) {
      state.petPolicy = action.payload;
    },
    setDetails(state, action) {
      state.details = action.payload;
    },
    setImages(state, action) {
      state.images = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    resetForm(state) {
      return initialState;
    },
  },
});
export const {
  setPrice,
  setType,
  setBedrooms,
  setBathrooms,
  setPetPolicy,
  setDetails,
  setImages,
  setError,
  resetForm,
} = listSlice.actions;
export default listSlice.reducer;
