import { configureStore } from "@reduxjs/toolkit"

import Levels from './levels/slice'
import Ages from './ages/slice'
import States from './states/slice'
import Gender from './gender/slice'
import AllData from './allData/slice'



export const store = configureStore({
  reducer: {
   levels: Levels,
   ages: Ages,
   states: States,
   gender: Gender,
   allData: AllData,
  },
})
