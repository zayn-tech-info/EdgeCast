import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,

  login: (userData) => {
    set({
      isAuthenticated: true,
      user: userData,
    });
  },

  signup: (userData) => {
    set({
      isAuthenticated: true,
      user: userData,
    });
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));
