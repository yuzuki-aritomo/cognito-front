import axios from "axios";
import { API_ENDPOINT } from "./config";

type FormData = {
  username: string;
  confirmation_code: string;
  password: string;
};

export const callConfirmForgotPasswordApi = async (
  formData: FormData
): Promise<void> => {
  try {
    // ここに実装を追加
    const response = await axios.post(
      `${API_ENDPOINT}/confirm_forgot_password`,
      formData
    );
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
