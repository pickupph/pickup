import { configureStore } from "@reduxjs/toolkit"

import uiReducer from './uiSlice'
import pricingReducer from './pricingSlice'
import searchReducer from "./searchSlice"

export default configureStore({
  reducer: {
    ui: uiReducer,
    pricing: pricingReducer,
    search: searchReducer
  }
})