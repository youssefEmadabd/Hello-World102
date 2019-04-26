import { GET_MASTERCLASS } from "./types";
const fetch = require("node-fetch");

export const getMASTERCLASS = id => async dispatch => {
  const res = await fetch(`http://localhost:5000/api/masterclasses/all/${id}`, {
    headers: {
      Authorization: localStorage.getItem("jwtToken")
    }
  });

  const json = await res.json();
  dispatch({
    type: GET_MASTERCLASS,
    payload: json.data
  });
};
