export const ADD_MOVIES = "ADD_MOVIES";
// action type
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
