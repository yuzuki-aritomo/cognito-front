import axios from "axios";
import { API_ENDPOINT } from "./config";

export const callForgotPasswordApi = async (formData: {
  username: string;
}): Promise<void> => {
  try {
    // ここに実装を追加
    const response = await axios.post(`${API_ENDPOINT}/forgot_password`, {
      username: formData.username,
    });
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
