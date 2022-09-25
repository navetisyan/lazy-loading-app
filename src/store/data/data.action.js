import { DATA_ACTION_TYPES } from './data.types';

const createAction = (type, payload) => ({ type, payload });

export const setData = (data) =>
  createAction(DATA_ACTION_TYPES.SET_LOADED_DATA, data);

export const setIsImported = (data) =>
  createAction(DATA_ACTION_TYPES.SET_IS_IMPORTED_DATA, data);
