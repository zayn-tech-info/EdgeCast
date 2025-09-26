import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,

  login: () => {
    set({
      isAuthenticated: true,
      user: { id: "1", name: "Demo", email: "demo@test.com" },
    });
  },

  signup: () => {
    set({
      isAuthenticated: true,
      user: { id: "1", name: "Demo", email: "demo@test.com" },
    });
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));
