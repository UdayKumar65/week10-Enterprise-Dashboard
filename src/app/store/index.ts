import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import loggerMiddleware from './middleware/loggerMiddleware';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;