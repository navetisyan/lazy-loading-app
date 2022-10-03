import { DATA_ACTION_TYPES, post, dataItem } from './data.types';
import {
  createAction,
  Action,
  ActionWithPayload,
} from '../../utils/data.utils';

export type setData = ActionWithPayload<
  DATA_ACTION_TYPES.SET_LOADED_DATA,
  dataItem[]
>;

export type setIsImported = ActionWithPayload<
  DATA_ACTION_TYPES.SET_IS_IMPORTED_DATA,
  boolean
>;

export type dataActionType = setData | setIsImported;

export const setData = (data: dataItem[]): setData =>
  createAction(DATA_ACTION_TYPES.SET_LOADED_DATA, data);

export const setIsImported = (data: boolean): setIsImported =>
  createAction(DATA_ACTION_TYPES.SET_IS_IMPORTED_DATA, data);
