import { EO } from "../actions/types";

const initialState = {
  profile: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case EO:
      return {
        ...state,
        profile: action.payload
      };
    default:
      return state;
  }
}
