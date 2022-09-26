import { DATA_ACTION_TYPES } from './data.types';
const INITIAL_STATE = {
  dataItems: null,
  isLoaded: false,
  isImported: false,
};

export const dataReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case DATA_ACTION_TYPES.SET_LOADED_DATA:
      return {
        ...state,
        dataItems: payload,
        isLoaded: true,
      };
    case DATA_ACTION_TYPES.SET_IS_IMPORTED_DATA:
      return {
        ...state,
        isImported: payload,
      };
    default:
      return state;
  }
};
