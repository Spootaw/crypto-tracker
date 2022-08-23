import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { cryptoApi } from './features/cryptoSlice';

const reducer = combineReducers({
  [cryptoApi.reducerPath]: cryptoApi.reducer,
});

const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(cryptoApi.middleware),
});

export default store;
