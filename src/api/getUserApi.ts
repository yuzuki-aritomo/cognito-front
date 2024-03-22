import axios from "axios";
import { API_ENDPOINT } from "./config";

export const callGetUser = async () => {
  const token = localStorage.getItem("access_token");
  try {
    const response = await axios.get(`${API_ENDPOINT}/home`, {
      headers: {
        "access-token": token,
      },
    });
    return {
      user: response.data.user,
      error: null,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        return {
          user: null,
          error: "Unauthorized",
        };
      }
    }
  }
};
