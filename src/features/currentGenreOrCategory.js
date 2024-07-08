import { createSlice } from "@reduxjs/toolkit";

export const genreOrCategory = createSlice({
  name: "genreOrCategory",
  initialState: {
    genreOrCategoryName: "",
    page: 1,
    searchQuery: "",
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
      // state.genreOrCategoryName =
    },
  },
});

export const { selectGenreOrCategory } = genreOrCategory;

export default genreOrCategory.reducer;
