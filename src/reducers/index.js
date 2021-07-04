import { combineReducers } from "redux";
import {
  ADD_MOVIES,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  SHOW_FAVOURITE,
  ADD_MOVIE_TO_LIST,
  ADD_SEARCH_RESULT,
} from "../actions";
// import { ADD_MOVIES } from "../actions";
const initialMovie = {
  list: [],
  favourites: [],
  showFavourites: false,
};
export function movies(state = initialMovie, action) {
  //   if (action.type === ADD_MOVIES) {
  //     return {
  //       ...state,
  //       list: action.movies,
  //     };
  //   }

  //   return state;
  // }

  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    case REMOVE_FAVOURITE:
      const filteredArray = state.favourites.filter(
        (movie) => movie.Title != action.movie.Title
      );
      return {
        ...state,
        favourites: filteredArray,
      };
    case SHOW_FAVOURITE:
      return {
        ...state,
        showFavourites: action.val,
      };
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };
    default:
      return state;
  }
}
const initialSearchState = {
  result: {},
  showSearchResult: false,
};
export function Search(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResult: true,   
      };
    case ADD_MOVIE_TO_LIST:
      return {
        ...state, 
      
        showSearchResult: false,
      };
    default:
      return state;
  }
}
const initialRootReducer = {
  movies: initialMovie,
  Search: initialSearchState,
};
// export default function rootReducer(state = initialRootReducer, action) {
//   return {
//     movies: movies(state.movies, action),

//     Search: Search(state.Search, action),
//   };
// }
export default combineReducers({
  movies,
  Search,
});
