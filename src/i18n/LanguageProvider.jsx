import { useEffect, useMemo, useState } from 'react'
import { LanguageContext } from './context'
import { translations } from './translations'

const STORAGE_KEY = 'kirkas-lang'
const DEFAULT_LANG = 'fi'

function readStoredLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored && translations[stored] ? stored : DEFAULT_LANG
  } catch {
    return DEFAULT_LANG
  }
}

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readStoredLang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = translations[lang].meta.title
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Storage unavailable (private mode) – language still works for this visit.
    }
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: translations[lang] }), [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
