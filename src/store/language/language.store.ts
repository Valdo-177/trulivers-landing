import { create } from "zustand";
import Cookies from 'js-cookie';

interface LanguageState {
  language: string;
  setLanguage: (lang: "es" | "en") => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: Cookies.get("language") || "es", // Leer desde las cookies o usar 'es' por defecto
  setLanguage: (lang) => {
    Cookies.set("language", lang, { expires: 365 }); // Guardar idioma en cookies por un año
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    set({ language: lang });
  },
}));
