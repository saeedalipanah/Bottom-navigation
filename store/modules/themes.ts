import { ref } from "vue";
import { defineStore } from "pinia";

import { themeE } from "~/types/themes";
export const ThemesStore = defineStore("themes", () => {
  const currentTheme = ref<themeE>(themeE.Light);
  const setTheme = (theme: themeE) => {
    currentTheme.value = theme;
    localStorage.setItem("theme", currentTheme.value);
    const doc = document.documentElement;
    currentTheme.value === themeE.Dark
      ? doc.classList.add("dark-theme")
      : doc.classList.remove("dark-theme");
  };
  const toggleTheme = (isChecked: boolean) => {
    isChecked ? setTheme(themeE.Dark) : setTheme(themeE.Light);
  };

  return { toggleTheme, currentTheme, setTheme };
});
