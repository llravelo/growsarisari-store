import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './api';

export default configureStore({
  reducer: rootReducer
});
