import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../slices/userSlice';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { alertSlice } from '../slices/alertSlice';
import { uiSlice } from '../slices/uiSlice';
import { api } from './api';
import { apiErrorLogger } from './apiErrorLogger';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    alert: alertSlice.reducer,
    ui: uiSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat([api.middleware, apiErrorLogger]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
