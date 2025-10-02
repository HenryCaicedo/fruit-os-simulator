import { configureStore } from '@reduxjs/toolkit';
import HomeScreenReducer from './slices/homeScreenSlice';

export const store = configureStore({
  reducer: {
    homeScreen: HomeScreenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
