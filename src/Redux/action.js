import { GET_DIRECTIONS, GET_FILTER } from "./types";
import directions from "../directions"
import filter from "../filter"

export const getDirections = () => ({
  type: GET_DIRECTIONS, payload: directions
})
export const getFilter = () => ({
  type: GET_FILTER, payload: filter
})
