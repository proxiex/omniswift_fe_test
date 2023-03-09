import { configureStore } from "@reduxjs/toolkit"

import Levels from './levels/slice'



export const store = configureStore({
  reducer: {
   levels: Levels
  },
})
