import axios from "axios";
import { API_ENDPOINT } from "./config";

type loginData = {
  id: string;
  password: string;
};

export const callLoginApi = async (formData: loginData) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/login`, formData);
    console.log("Response:", response.data);
    if (response.data.token.access_token === undefined) {
      throw new Error("Access token is not found");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
