import { createSlice } from "@reduxjs/toolkit"

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    term: "",
  },
  // Actions
  reducers: {
    setTerm: (state, action) => {
      state.term = action.payload
    },
  }
})

// Action creators
export const { setTerm} = searchSlice.actions

export default searchSlice.reducer