import axios from "axios";
import { API_ENDPOINT } from "./config";

export const callGetUser = async () => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/home`, {
      withCredentials: true,
    });
    return {
      user: response.data.user,
      groups: response.data.groups,
      error: null,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        return {
          user: null,
          groups: [],
          error: "Unauthorized",
        };
      }
    }
  }
};
