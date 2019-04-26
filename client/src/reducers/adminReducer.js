import { GET_ADMIN } from "../actions/types";

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
    default:
      return state;
  }
}
