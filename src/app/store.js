import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import storesReducer from '../features/stores/storesSlice';
import themeReducer from '../features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    stores: storesReducer,
    theme: themeReducer
  }
});
