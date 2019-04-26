import { GET_APPLICATION } from "./types";
import { GET_REVIEWED_APPLICATION } from "./types";
import {GET_ERRORS} from "./types";
const fetch = require("node-fetch");

// Get Application
export const getApplication = (id, appID) => async dispatch => {
  const res = await fetch(
    `http://localhost:5000/api/applications/admin/${id}/${appID}`
  );

  const json = await res.json();
  dispatch({
    type: GET_APPLICATION,
    payload: json.data
  });
};

// Get Reviewed Application
export const getReviewedApplication = (id, appID) => async dispatch => {
  const res = await fetch(
    `http://localhost:5000/api/applications/consultant/${id}/${appID}`
  );

  const json = await res.json();
  dispatch({
    type: GET_REVIEWED_APPLICATION,
    payload: json.data
  });
};
export const postApplication = (ApplicationData, history) => async dispatch => {
  const body = JSON.stringify(ApplicationData);
  const res = await fetch("http://localhost:5000/api/applications/:id", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken")
    },
    body: body
  });
  const json = await res.json();
  if (json.data) {
    history.push("/dashboardforPartner");
  } else {
    dispatch({
      type: GET_ERRORS,
      payload: json
    });
  }
};
export const editApp = (appData, history,appID) => async dispatch => {
  const body = JSON.stringify(appData);
  const res = await fetch(`http://localhost:5000/api/applications/${appID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken")
    },
    body: body
  });
  const json = await res.json();
  if (json.msg) {
    history.push("/dashboardforPartner");
  } else {
    dispatch({
      type: GET_ERRORS,
      payload: json
    });
  }
};