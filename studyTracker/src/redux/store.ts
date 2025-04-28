import { configureStore } from '@reduxjs/toolkit'
import subjectsSlice from './subjectsSlice'

export const store = configureStore({
  reducer: {
    subject: subjectsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch