import fetch from "node-fetch";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import jwt_decode from "jwt-decode";

// Register User
export const registerUser = (userData, history) => async dispatch => {
  const body = JSON.stringify(userData);
  const res = await fetch("http://localhost:5000/api/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: body
  });
  const json = await res.json();
  if (json.error) {
    dispatch({
      type: GET_ERRORS,
      payload: json
    });
  } else {
    history.push("/login");
  }
};

// Login User
export const loginUser = userData => async dispatch => {
  const body = JSON.stringify(userData);
  const res = await fetch("http://localhost:5000/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: body
  });
  const json = await res.json();
  if (json.error) {
    dispatch({
      type: GET_ERRORS,
      payload: json
    });
  } else {
    const { token } = json;
    localStorage.setItem("jwtToken", token);
    const decoded = jwt_decode(token);
    dispatch(setCurrentUser(decoded));
  }
};

// Set Current user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Logout User
export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwtToken");
  dispatch(setCurrentUser({}));
};
