import { useEffect, useState } from "react"

type Theme = 'light' | 'dark';

export const useDarkMode = (): [Theme, () => void] => {
    const [theme, setTheme] = useState<Theme>('light')
  
    const setMode = (mode: Theme) => {
      window.localStorage.setItem('theme', mode)
      setTheme(mode)
    }
  
    const themeToggler = () => {
      theme === 'light' ? setMode('dark') : setMode('light')
    }
  
    useEffect(() => {
      const localTheme = window.localStorage.getItem('theme') as Theme | null
      localTheme && setTheme(localTheme)
    }, [])
  
    return [theme, themeToggler]
}