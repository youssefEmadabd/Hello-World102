import { GET_MEMBER, GET_MEMBERS } from "../actions/types";

const initialState = {
  profile: null,
  profiles: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MEMBER:
      return {
        ...state,
        profile: action.payload
      };
    case GET_MEMBERS:
      return {
        ...state,
        profiles: action.payload
      };
    default:
      return state;
  }
}
