import axios from "axios";

import config from "../../config";
import {
  PROFILE_LOADING,
  GET_PROFILE,
  GET_ERRORS,
  CLEAR_CURRENT_PROFILE
} from "../action_types";
import history from "../../routes/history";

const profileURL = `${config.BASE_URL}/user`;
const token = localStorage.getItem("token");

export const setProfileLoading = () => ({
  type: PROFILE_LOADING
});

export const getCurrentProfile = () => async dispatch => {
  dispatch(setProfileLoading());
  try {
    const res = await axios.get(profileURL, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE,
      payload: error
    });
  }
};

export const updateProfile = profileData => async dispatch => {
  try {
    await axios.put(profileURL, profileData, {
      headers: { Authorization: `Bearer ${token}` }
    });
    history.push("/dashboard");
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const clearCurrentProfile = () => ({
  type: CLEAR_CURRENT_PROFILE
});
