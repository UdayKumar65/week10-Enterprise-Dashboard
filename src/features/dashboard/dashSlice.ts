import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DashboardState {
  data: number[];
}

const initialState: DashboardState = {
  data: [],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<number[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = dashboardSlice.actions;
export default dashboardSlice.reducer;