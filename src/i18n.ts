import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import translationEN from './translations/en.json'
import translationES from './translations/es.json'
import translationFR from './translations/fr.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      es: { translation: translationES },
      fr: { translation: translationFR }
    },
    fallbackLng: 'es',
    interpolation: { escapeValue: false }
  })

export default i18n
