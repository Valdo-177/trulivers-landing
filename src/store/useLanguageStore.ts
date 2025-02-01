import { create } from "zustand";

interface LanguageState {
  language: string;
  setLanguage: (lang: string) => void;
}

const useLanguageStore = create<LanguageState>((set) => ({
  language: "en", // Idioma por defecto
  setLanguage: (lang) => set({ language: lang }),
}));

export default useLanguageStore;
