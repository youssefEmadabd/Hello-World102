import { GET_ERRORS } from "./types";
const fetch = require("node-fetch");

export const createOrganization = (
  organizationData,
  history,
  value
) => async dispatch => {
  const body = JSON.stringify(organizationData);
  const res = await fetch("http://localhost:5000/api/profiles/organization/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken")
    },
    body: body
  });
  const json = await res.json();
  const part = "Partner";
  switch (value) {
    case part:
      history.push("/cp/" + json.data._id);
      break;
    default:
      dispatch({
        type: GET_ERRORS,
        payload: json
      });
      break;
  }
};
