import { GET_EO } from "./types";
const fetch = require("node-fetch");

export const getEO = id => async dispatch => {
  const res = await fetch(
    `http://localhost:5000/api/profiles/education/${id}`,
    {
      headers: {
        Authorization: localStorage.getItem("jwtToken")
      }
    }
  );

  const json = await res.json();
  dispatch({
    type: GET_EO,
    payload: json.data
  });
};
