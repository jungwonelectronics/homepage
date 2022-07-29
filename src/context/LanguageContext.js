import * as React from "react";
import { languageOptions, languages } from '../constant/language';

export const LanguageContext = React.createContext({
  language: languageOptions[0].id,
  lang: languages.kr
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = React.useState(languageOptions[0].id);
  const provider = {
    language,
    onChangeLanguage: id => setLanguage(id),
    lang: languages[language],
  };
  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
};