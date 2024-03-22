import axios from "axios";
import { API_ENDPOINT } from "./config";

export const callGetUser = async () => {
  const token = localStorage.getItem("access_token");
  try {
    const response = await axios.get(`${API_ENDPOINT}/home`, {
      headers: {
        'access-token': token,
      },
    });
    return response.data;
  } catch (error) {}
};
