import { API_BASE_URL } from "../../utils/envVars";
import axios from "axios";

interface AuthCredentials {
  username: string;
  password: string;
}

export const authPost = async (credentials: AuthCredentials) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/login`,
      credentials
    );
    return response.data;
  } catch (error) {
    console.error("Error during authentication:", error);
    throw error;
  }
};
