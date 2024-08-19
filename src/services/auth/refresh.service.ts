import axios from "axios";
import { API_BASE_URL } from "../../utils/envVars";
import { useAuthStore } from "../../store/authStore";

export const refreshAuthToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) {
    throw new Error("No refresh token available");
  }

  try {
    const response = await axios.post(`${API_BASE_URL}/auth/refresh`, {
      refreshToken: refreshToken,
      expiresInMins: 30,
    });

    const { token, refreshToken: newRefreshToken } = response.data;

    localStorage.setItem("token", token);
    localStorage.setItem("refreshToken", newRefreshToken);

    useAuthStore.setState({ token, refreshToken: newRefreshToken });

    return token;
  } catch (error) {
    console.error("Error refreshing token:", error);
    throw error;
  }
};
