import axios from "axios";
import { API_ENDPOINT } from "./config";

type FormData = {
  username: string;
  phone_number: string;
  password: string;
  user_type: string[];
};

export const callSignUpApi = async (formData: FormData): Promise<void> => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/signup`, formData);
    console.log("Response:", response.data);
    // 成功時の処理を追加
  } catch (error) {
    console.error("Error:", error);
    // エラー時の処理を追加
    throw error; // エラーを再スロー
  }
};
