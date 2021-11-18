import { configureStore } from "@reduxjs/toolkit"

import uiReducer from './userSlice'

export default configureStore({
  reducer: {
    ui: uiReducer,
  }
})