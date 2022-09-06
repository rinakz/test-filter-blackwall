import { GET_DIRECTIONS } from '../types';

export const directionReducer = (state =[], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_DIRECTIONS:
      return payload;
    default:
      return state;
  }
};
