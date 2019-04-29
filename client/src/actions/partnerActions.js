import { GET_PARTNER } from "./types";
import { GET_ERRORS } from "./types";
const fetch = require("node-fetch");

// Get Partner
export const getPartner = id => async dispatch => {
  const res = await fetch(`http://localhost:5000/api/profiles/partner/${id}`, {
    headers: {
      Authorization: localStorage.getItem("jwtToken")
    }
  });

  const json = await res.json();
  dispatch({
    type: GET_PARTNER,
    payload: json.data
  });
};
// create partner
export const createPartner = (partnerData, history,id) => async dispatch => {
  const body = JSON.stringify(partnerData);
  const res = await fetch(`http://localhost:5000/api/profiles/partner/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken")
    },
    body: body
  });
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
export const editPartner = (partnerData, history) => async dispatch => {
  const body = JSON.stringify(partnerData);
  const res = await fetch("http://localhost:5000/api/profiles/partner/", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken")
    },
    body: body
  });
  const json = await res.json();
  if (json.msg) {
    history.push("/dashboard");
  } else {
    dispatch({
      type: GET_ERRORS,
      payload: json
    });
  }
};
export const getCurrentPartner = id => async dispatch => {
  const res = await fetch(`http://localhost:5000/api/profiles/partner`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken")
    }
  });

  const json = await res.json();
  if (json.data) {
    dispatch({
      type: GET_PARTNER,
      payload: json.data
    });
  } else {
    dispatch({
      type: GET_PARTNER,
      payload: {}
    });
  }
};
export const deletepartner = (history) => async dispatch => {
  const res = await fetch("http://localhost:5000/api/profiles/partner/delete",{
  method:"DELETE",
  headers:{
"Content-Type": "application/json",
Authorization: localStorage.getItem("jwtToken")

  }
  });
  const json = await res.json();
  if (json.data) {
    history.push("/App");
  } else {
    dispatch({
      type: GET_ERRORS,
      payload: json
    });
  }
};