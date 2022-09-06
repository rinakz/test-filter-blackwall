import { GET_FILTER } from '../types';

export const filterReducer = (state =[], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_FILTER:
      return payload;
    default:
      return state;
  }
};
