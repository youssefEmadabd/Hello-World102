import { GET_MEMBER, GET_MEMBERS, GET_ERRORS } from "./types";
const fetch = require("node-fetch");

// Get Member
export const getMember = id => async dispatch => {
  const res = await fetch(`http://localhost:5000/api/profiles/member/${id}`);

  const json = await res.json();
  if (json.data) {
    dispatch({
      type: GET_MEMBER,
      payload: json.data
    });
  } else {
    dispatch({
      type: GET_MEMBER,
      payload: {}
    });
  }
};

// Get Current Member
export const getCurrentMember = id => async dispatch => {
  const res = await fetch(`http://localhost:5000/api/profiles/member`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken")
    }
  });

  const json = await res.json();
  if (json.data) {
    dispatch({
      type: GET_MEMBER,
      payload: json.data
    });
  } else {
    dispatch({
      type: GET_MEMBER,
      payload: {}
    });
  }
};

// Get all members
export const getMembers = () => async dispatch => {
  const res = await fetch("http://localhost:5000/api/profiles/member/all");

  const json = await res.json();
  if (json.data) {
    dispatch({
      type: GET_MEMBERS,
      payload: json.data
    });
  } else {
    dispatch({
      type: GET_MEMBERS,
      payload: null
    });
  }
};

// Create Member
export const createMember = (memberData, history) => async dispatch => {
  const body = JSON.stringify(memberData);
  const res = await fetch("http://localhost:5000/api/profiles/member", {
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

// Edit Member
export const editMember = (memberData, history) => async dispatch => {
  const body = JSON.stringify(memberData);
  const res = await fetch("http://localhost:5000/api/profiles/member", {
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
// add skilsMember
export const addSkillMember = (memberData, history) => async dispatch => {
  const body = JSON.stringify(memberData);
  const res = await fetch("http://localhost:5000/api/profiles/member/skills", {
    method: "POST",
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
// add past-events
export const addpastevents = (memberData, history) => async dispatch => {
  const body = JSON.stringify(memberData);
  const res = await fetch("http://localhost:5000/api/profiles/member/past-event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken")
    },
    body: body
  });
  const json = await res.json();
  console.log(json)
  if (json.msg) {
    history.push("/dashboard");
  } else {
    dispatch({
      type: GET_ERRORS,
      payload: json
    });
  }
};