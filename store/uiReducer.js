import { createSlice } from "@reduxjs/toolkit"

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    popupMenu: false,
  },
  // Actions
  reducers: {
    setPopupMenu: (state, action) => {
      state.popupMenu = action.payload
    },
  }
})

// Action creators
export const { setPopupMenu } = uiSlice.actions

export default uiSlice.reducer