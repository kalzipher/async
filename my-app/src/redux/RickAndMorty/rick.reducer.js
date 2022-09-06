import { FETCHING, ERROR, SUCCESS, FETCHING_CHAR, ERROR_CHAR, SUCCESS_CHAR } from "./rick.types";

const INITIAL_STATE = {
  characters: [],
  isFetchingCharacters: false,
  hasErrorFecthing: false,

  isFetchingCharacter: false,
  hasErrorFecthingCharacter: false,
  character: null
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) { 
    case FETCHING:
      return {
        ...state,
        hasErrorFecthing: false,
        isFetchingCharacters: true,
      };

    case SUCCESS:
      return {
        ...state,
        isFetchingCharacters: false,
        characters: action.payload,
      };
    case ERROR: 
      return {
        ...state,
        isFetchingCharacters: false,
        hasErrorFecthing: true
      }
    case FETCHING_CHAR:
        return {
            ...state, 
            isFetchingCharacter: true
        }
    case ERROR_CHAR:
        return {
            ...state, 
            isFetchingCharacter: false, 
            hasErrorFecthingCharacter: true,
        }
    case SUCCESS_CHAR:
    return {
        ...state, 
        isFetchingCharacter: false,
        hasErrorFecthingCharacter: false,
        character: action.payload
    }
    default:
      return state;
  }
};

export default reducer;