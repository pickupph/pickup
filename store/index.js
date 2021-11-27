import { configureStore } from "@reduxjs/toolkit"

import uiReducer from './uiSlice'
import pricingReducer from './pricingSlice'

export default configureStore({
  reducer: {
    ui: uiReducer,
    pricing: pricingReducer
  }
})