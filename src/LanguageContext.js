import { createContext, useContext } from 'react';

export const LanguageContext = createContext({
    language: 'en',
    setLanguage: () => {},
});

export function useLanguage() {
    return useContext(LanguageContext);
}