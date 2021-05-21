import { ADD_MOVIES } from "../actions";
const initialMovie = {
  list: [],
  favourites: [],
};
export default function movies(state = initialMovie, action) {
  if (action.type === ADD_MOVIES) {
    return {
      ...state,
      list: action.movies,
    };
  }
  return state;
}
