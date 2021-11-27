import { createSlice } from "@reduxjs/toolkit"

import dataPricing from '../fakeData/pricing.json'

export const pricingSlice = createSlice({
  name: "pricing",
  initialState: {
    pricing: dataPricing
  },
  // Actions
  reducers: {
    setActiveTier: (state, action) => [
      state.map(p => {

        if(action.payload==p.name) {
          return {
            ...p,
            "active": true
          }
        }

        return {
          ...p,
          "active": false
        }

      })
      
    ],
  }
})

// Action creators
export const { setActiveTier } = pricingSlice.actions

export default pricingSlice.reducer