import { GET_APPLICATIONS, GET_ADMIN,ADMIN_REVIEW } from "./types";
const fetch = require("node-fetch");

export const getApplications = id => async dispatch => {
  const res = await fetch(
    `http://localhost:5000/api/applications/notreviewed`,
    {
      headers: {
        Authorization: localStorage.getItem("jwtToken")
      }
    }
  );

  const json = await res.json();
  dispatch({
    type: GET_APPLICATIONS,
    payload: json.data
  });
};

//admin review
export const reviewApplications = (
  id,
  appID,
  history

)=> async dispatch => {
  const body = JSON.stringify();
  const res = await fetch(
    ` http://localhost:5000/api/applications/admin/${id}/${appID}`,
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

// Get Current Admin
export const getCurrentAdmin = id => async dispatch => {
  const res = await fetch(`http://localhost:5000/api/users/admin`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken")
    }
  });

  const json = await res.json();
  if (json.data) {
    dispatch({
      type: GET_ADMIN,
      payload: json.data
    });
  } else {
    dispatch({
      type: GET_ADMIN,
      payload: {}
    });
  }
};
export const AdminViewApp = id => async dispatch => {
  const res = await fetch(`http://localhost:5000/api/applications/notreviewed`, {
    method:"POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken")
    }
  });

  const json = await res.json();
  if (json.data) {
    dispatch({
      type: GET_ADMIN,
      payload: json.data
    });
  } else {
    dispatch({
      type: GET_ADMIN,
      payload: {}
    });
  }
};
export const AdminReviewApp = id => async dispatch => {
  const res = await fetch(`http://localhost:5000/api/applications/${id}`, {
    method:"POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken")
    }
  });

  const json = await res.json();
  if (json.data) {
    dispatch({
      type: GET_ADMIN,
      payload: json.data
    });
  } else {
    dispatch({
      type: GET_ADMIN,
      payload: {}
    });
  }
};