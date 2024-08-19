import { API_BASE_URL } from "../../utils/envVars";
import axios from "axios";

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users?limit=30`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getUserSingle = async (id: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
