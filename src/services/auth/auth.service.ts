import apiClient from "../axiosConfig";
import { AuthCredentials } from "@/types";

export const authPost = async (credentials: AuthCredentials) => {
  try {
    const response = await apiClient.post("/auth/login", credentials);
    return response.data;
  } catch (error) {
    console.error("Error during authentication:", error);
    throw error;
  }
};
