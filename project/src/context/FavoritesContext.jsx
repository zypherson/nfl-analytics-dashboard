import {
  createContext,
  useContext,
  useEffect,
  useReducer
} from "react";

const FavoritesContext = createContext();

const initialState = {
  favorites: JSON.parse(
    localStorage.getItem("favorites")
  ) || []
};

function favoritesReducer(state, action) {
  switch(action.type) {

    case "ADD_FAVORITE":
      if (
        state.favorites.find(
          player => player.id === action.payload.id
        )
      ) {
        return state;
      }

      return {
        ...state,
        favorites: [
          ...state.favorites,
          action.payload
        ]
      };

    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter(
          player => player.id !== action.payload
        )
      };

    default:
      return state;
  }
}

export const FavoritesProvider = ({ children }) => {

  const [state, dispatch] = useReducer(
    favoritesReducer,
    initialState
  );

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(state.favorites)
    );
  }, [state.favorites]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites: state.favorites,
        dispatch
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFavorites = () =>
  useContext(FavoritesContext);