import { createSlice } from '@reduxjs/toolkit';
interface SideMenuState {
  isOpen: boolean;
}
const initialState: SideMenuState = {
  isOpen: false,
};
const sideMenuSlice = createSlice({
  name: 'sideMenu',
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isOpen = true;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openMenu, closeMenu, toggleMenu } = sideMenuSlice.actions;
export default sideMenuSlice.reducer;
