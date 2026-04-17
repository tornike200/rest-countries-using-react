import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTheme = create(
  persist(
    (update) => ({
      isDark: false,

      toggle: () => update((prev) => ({ isDark: !prev.isDark })),
    }),
    { name: "isDark" },
  ),
);
