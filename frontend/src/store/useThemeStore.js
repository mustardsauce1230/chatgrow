import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chatgrow-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("chatgrow-theme", theme);
    set({ theme });
  },
}));
