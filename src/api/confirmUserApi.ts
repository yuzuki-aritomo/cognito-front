import axios from "axios";
import { API_ENDPOINT } from "./config";

type ConfirmUserData = {
  username: string;
  confirmation_code: string;
};

export const callConfirmUserApi = async (formData: ConfirmUserData) => {
  try {
    const response = await axios.post(
      `${API_ENDPOINT}/signup/confirm`,
      formData
    );
    console.log("Response:", response.data);
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
