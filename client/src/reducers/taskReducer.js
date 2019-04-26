import {
  GET_TASK,
  GET_TASKS,
  GET_REVIEWED_TASK,
  POST_TASK,
  CONSULTANT_RESPOND,
  PARTNER_RESPOND
} from "../actions/types";

const initialState = {
  task: null,
  tasks: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TASK:
      return {
        ...state,
        task: action.payload
      };
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload
      };
    case GET_REVIEWED_TASK:
      return {
        ...state,
        task: action.payload
      };
    case POST_TASK:
      return {
        ...state,
        task: action.payload
      };
    case CONSULTANT_RESPOND:
      return {
        ...state,
        task: action.payload
      };
    case PARTNER_RESPOND:
      return {
        ...state,
        task: action.payload
      };

    default:
      return state;
  }
}
