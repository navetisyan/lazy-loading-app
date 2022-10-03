export enum DATA_ACTION_TYPES {
  SET_LOADED_DATA = 'SET_LOADED_DATA',
  SET_IS_IMPORTED_DATA = 'SET_IS_IMPORTED_DATA',
}

export type post = {
  id: number;
  title: string;
  body: string;
};

export type dataItem = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: any;
  phone: string;
  website: string;
  company: any;
  posts: post[];
};
