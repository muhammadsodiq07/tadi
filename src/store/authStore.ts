import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserInfo {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  image: string | null;
}

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  refreshToken: string | null;
  user: UserInfo | null;
  login: (token: string, refreshToken: string, userInfo: UserInfo) => void;
  logout: () => void;
}

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      isAuthenticated: !!localStorage.getItem("token"),
      token: localStorage.getItem("token"),
      refreshToken: localStorage.getItem("refreshToken"),
      user: null,

      login: (token: string, refreshToken: string, userInfo: UserInfo) => {
        set({
          isAuthenticated: true,
          token,
          refreshToken,
          user: userInfo,
        });
      },

      logout: () => {
        set({
          isAuthenticated: false,
          token: null,
          refreshToken: null,
          user: null,
        });
      },
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    }
  )
);
