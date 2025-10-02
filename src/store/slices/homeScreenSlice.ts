import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { HomeScreenLayout } from '../../models/HomeScreenLayout';
import { RootState } from '../store';


export interface HomeScreenState {
  layout: HomeScreenLayout;
}

const initialState: HomeScreenState = {
  layout: { pages: [[]], dock: [] },
};

const homeScreenSlice = createSlice({
  name: 'homeScreen',
  initialState,
  reducers: {
    setHomeScreenLayout(state, action: PayloadAction<HomeScreenLayout>) {
      state.layout = action.payload;
    },
  },
});

export const { setHomeScreenLayout } = homeScreenSlice.actions;
export default homeScreenSlice.reducer;

// --- Selector ---
export const selectAllApps = createSelector(
  (state: RootState) => state.homeScreen.layout.pages,
  (state: RootState) => state.homeScreen.layout.dock,
  (pages, dock) => {
    return [...pages.flat(), ...dock];
  }
);
