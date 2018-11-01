import axios from "axios";
import jwtDecode from "jwt-decode";
import { toaster } from "evergreen-ui";
import {
  FOLLOW_SUCCESS,
  UNFOLLOW_SUCCESS,
  NOT_FOLLOWING,
  FOLLOWING
} from "../action_types";
import { serverError } from "./common";
import config from "../../config";

const baseUrl = config.BASE_URL;
const token = localStorage.getItem("token");

export const followStatus = author => async dispatch => {
  const following = () => {
    dispatch({ type: FOLLOWING });
  };

  const notFollowing = () => {
    dispatch({ type: NOT_FOLLOWING });
  };
  const allFollowers = await axios.get(
    `${baseUrl}/profiles/${author}/followers/`,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );
  const currentUser = jwtDecode(token).username;
  if (allFollowers.data !== undefined || allFollowers.data.length !== 0) {
    const profiles = allFollowers.data.find(
      profile => profile.username === currentUser
    );
    if (profiles) {
      following();
    } else {
      notFollowing();
    }
  } else {
    notFollowing();
  }
};

const FollowUser = (username, follow) => async dispatch => {
  const onFollowSuccess = message => {
    dispatch({ type: FOLLOW_SUCCESS, payload: message });
    return message;
  };
  const OnFollowError = error => {
    dispatch(serverError());
    return error;
  };
  const unFollowSuccess = message => {
    dispatch({ type: UNFOLLOW_SUCCESS, payload: message });
    return message;
  };

  let message;
  if (!follow) {
    try {
      const response = await axios.post(
        `${baseUrl}/profiles/${username}/follow/`,
        { username },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      message = `You have followed ${username}`;
      onFollowSuccess(response.data);
      toaster.success(message, { duration: 3 });
    } catch (error) {
      OnFollowError(error);
    }
  } else {
    try {
      const response = await axios.delete(
        `${baseUrl}/profiles/${username}/follow/`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      message = `You have unfollowed ${username}`;
      unFollowSuccess(response.data);
      toaster.success(message, { duration: 3 });
    } catch (error) {
      OnFollowError(error);
    }
  }
};

export default FollowUser;
