import axios from "axios";
import { toaster } from "evergreen-ui";
import config from "../../config";

const url = `${config.BASE_URL}/notifications/`;

export const optNotification = () => async () => {
  try {
    const response = await axios.post(`${url}switch_app/`, null, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    });
    toaster.success(response.data.message, { duration: 2 });
  } catch (error) {
    const responseErrors =
      error.response.data.message || error.response.data.detail;
    toaster.warning(responseErrors, { duration: 2 });
  }
};

export default { optNotification };
