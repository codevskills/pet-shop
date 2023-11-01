//  This is UserDataReducer.js

import * as types from "./UserDataActionType.js";
const setLoginUserImage = localStorage.getItem("loginUserImage");
const setLoginAdminName = localStorage.getItem("loginAdminName");
const setLoginAdminEmail = localStorage.getItem("loginAdminEmail");
const setLoginUserName = localStorage.getItem("loginUserName");
const setLoginUserEmail = localStorage.getItem("loginUserEmail");
const setLoginUserId = localStorage.getItem("loginUserId");

const init = {
  loading: false,
  error: "",
  userEmail: setLoginUserEmail ? JSON.parse(setLoginUserEmail) : null,
  adminEmail: setLoginAdminEmail ? JSON.parse(setLoginAdminEmail) : null,
  adminName: setLoginAdminName ? JSON.parse(setLoginAdminName) : null,
  userName: setLoginUserId ? JSON.parse(setLoginUserId) : null,
  userName: setLoginUserName ? JSON.parse(setLoginUserName) : null,
  userImage: setLoginUserImage ? JSON.parse(setLoginUserImage) : null,
  Alluser: []
};

export const UserDataReducer = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GETUSERID:
      return {
        ...state,
        userId: payload
      };

    case types.GETUSEREMAIL:
      return {
        ...state,
        userEmail: payload
      };

    case types.GETUSERNAME:
      return {
        ...state,
        userName: payload
      };

    case types.GETUSERIMAGE:
      return {
        ...state,
        userImage: payload
      };

    case types.LOGOUTUSER:
      return {
        ...state,
        userEmail: null,
        userName: null,
        adminName: null,
        adminEmail: null,
        userImage: null
      };
    case types.GETADMINEMAIL:
      return {
        ...state,
        adminEmail: payload,
        userEmail: null,
        userName: null
      };

    case types.GETADMINNAME:
      return {
        ...state,
        adminName: payload,
        userEmail: null,
        userName: null
      };

    case types.GET_ALL_USER_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: ""
      };
    case types.GET_ALL_USER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        Alluser: payload
      };
    case types.GET_ALL_USER_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};
