import {
  GET_TASK,
  GET_REVIEWED_TASK,
  POST_TASK,
  GET_TASKS,
  GET_ERRORS
} from "./types";

const fetch = require("node-fetch");

// Post Task
export const postTask = (taskData, history) => async dispatch => {
  const body = JSON.stringify(taskData);
  const res = await fetch(
    "http://localhost:5000/api/tasks/partner/${taskData.ID}/${taskData.application}",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("jwtToken")
      },
      body: body
    }
  );
  const json = await res.json();
  if (json.data) {
    history.push("/dashboard");
  }
};

// Get Task
export const getTask = taskID => async dispatch => {
  const res = await fetch(`http://localhost:5000/api/tasks/member/${taskID}`, {
    headers: {
      Authorization: localStorage.getItem("jwtToken")
    }
  });

  const json = await res.json();
  dispatch({
    type: GET_TASK,
    payload: json.data
  });
};

// Get Reviewed Task
export const getReviewedTask = (id, taskID) => async dispatch => {
  const res = await fetch(
    `http://localhost:5000/api/tasks/member/${id}/${taskID}`,
    {
      headers: {
        Authorization: localStorage.getItem("jwtToken")
      }
    }
  );

  const json = await res.json();
  dispatch({
    type: GET_REVIEWED_TASK,
    payload: json.data
  });
};

// Get all Tasks
export const getTasks = () => async dispatch => {
  const res = await fetch("http://localhost:5000/api/tasks/all");

  const json = await res.json();
  if (json.data) {
    dispatch({
      type: GET_TASKS,
      payload: json.data
    });
  } else {
    dispatch({
      type: GET_TASKS,
      payload: null
    });
  }
};

// Get My Tasks
export const getMyTasks = id => async dispatch => {
  const res = await fetch(`http://localhost:5000/api/tasks/me/${id}`);

  const json = await res.json();
  if (json.data) {
    dispatch({
      type: GET_TASKS,
      payload: json.data
    });
  } else {
    dispatch({
      type: GET_TASKS,
      payload: null
    });
  }
};

// Apply For Task
export const applyTask = (history, id, taskID) => async dispatch => {
  const res = await fetch(
    `http://localhost:5000/api/tasks/apply/${id}/${taskID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("jwtToken")
      }
    }
  );

  const json = await res.json();
  if (json.data) {
    history.push("/dashboard");
  } else {
    dispatch({
      type: GET_ERRORS,
      payload: json
    });
  }
};
