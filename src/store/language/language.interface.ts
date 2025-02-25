export interface ILanguageState {
    language: ILanguageOption
}

export interface ILanguageAction {
    setLanguage: (lang: ILanguageOption) => void
}

export type ILanguageOption = "en" | "es";