import { GET_ADMIN, GET_APPLICATIONS } from "../actions/types";

const initialState = {
  profile: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ADMIN:
      return {
        ...state,
        profile: action.payload
      };
      case GET_APPLICATIONS:
      return {
        ...state,
        profiles: action.payload
      };
    default:
      return state;
  }
}
