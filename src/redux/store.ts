import { configureStore } from '@reduxjs/toolkit'
import cardsSlice from './cardsSlice'

export const store = configureStore({
  reducer: {
    heartStoneCards: cardsSlice
  },
})

// From documentation
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch