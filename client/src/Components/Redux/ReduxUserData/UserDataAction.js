// This is UserDataAction.js

import axios from "axios";
import * as types from "./UserDataActionType.js";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

//---------- login user ----------

export const loginUserId = (loginUserId) => {
  localStorage.setItem("loginUserId", JSON.stringify(loginUserId));
  return {
    type: types.GETUSERID,
    payload: loginUserId
  };
};

export const loginUserName = (loginUserName) => {
  localStorage.setItem("loginUserName", JSON.stringify(loginUserName));
  return {
    type: types.GETUSERNAME,
    payload: loginUserName
  };
};

export const loginUserImage = (loginUserImage) => {
  localStorage.setItem("loginUserImage", JSON.stringify(loginUserImage));
  return {
    type: types.GETUSERIMAGE,
    payload: loginUserImage
  };
};

export const loginUserEmail = (loginUserEmail) => {
  localStorage.setItem("loginUserEmail", JSON.stringify(loginUserEmail));
  return {
    type: types.GETUSEREMAIL,
    payload: loginUserEmail
  };
};

export const loginAdminEmail = (loginAdminEmail) => {
  localStorage.setItem("loginAdminEmail", JSON.stringify(loginAdminEmail));
  return {
    type: types.GETADMINEMAIL,
    payload: loginAdminEmail
  };
};

export const loginAdminName = (loginAdminName) => {
  localStorage.setItem("loginAdminName", JSON.stringify(loginAdminName));
  return {
    type: types.GETADMINNAME,
    payload: loginAdminName
  };
};


export const Logouthandleraction = (payload) => {
  localStorage.removeItem("loginUserEmail");
  localStorage.removeItem("loginUserName");
  localStorage.removeItem("loginUserBatch");
  localStorage.removeItem("loginAdminEmail");
  localStorage.removeItem("loginAdminName");
  localStorage.removeItem("loginUserImage");
  localStorage.removeItem("loginScoreBoard");
  // console.log("Local Clear");
  return {
    type: types.LOGOUTUSER,
    payload
  };
};

// ----------------------- action creator function for  details of user  for admin page ---------------

const getAllUserDataRequest = (payload) => {
  return {
    type: types.GET_ALL_USER_DATA_REQUEST,
    payload
  };
};

const getAllUserDataSuccess = (payload) => {
  return {
    type: types.GET_ALL_USER_DATA_SUCCESS,
    payload
  };
};

const getAllUserDataFailure = (payload) => {
  return {
    type: types.GET_ALL_USER_DATA_FAILURE,
    payload
  };
};
// Add more user data-related action creators here

// Thunk action creator to fetch all user data from the backend
export const getAllUserDataFromBackends = () => (dispatch) => {
  dispatch(getAllUserDataRequest());
  axios
    .get(`${BACKEND_URL}/getuser`)
    .then((res) => {
      dispatch(getAllUserDataSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getAllUserDataFailure());
    });
};

// Thunk action creator to delete a user by admin
export const deleteUserByAdmin = (payload) => (dispatch) => {
  axios
    .delete(`${BACKEND_URL}/${payload}`)
    .then((response) => {
      dispatch(getAllUserDataFromBackends());
    })
    .catch((error) => {
      console.log("error");
    });
};
