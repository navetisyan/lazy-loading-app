import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

export interface RootState {
  data: {
    dataItems: any[] | null;
    isLoaded: boolean;
    isImported: boolean;
  };
}

const middlewares = [logger];
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middlewares),
});
