import { configureStore } from '@reduxjs/toolkit';
import auth from './slices/auth/authSlice';
import ui from './slices/ui/uiSlice';

export const store = configureStore({
    reducer:{
        auth,
        ui
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;