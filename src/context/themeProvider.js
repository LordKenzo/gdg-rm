import React, { useState } from 'react'
import { useLocalStorage } from '../hooks'

export const ThemeContext = React.createContext([])

const ThemeProvider = ({ children }) => {
  const [theme] = useLocalStorage('theme', true)
  const [darkTheme, setDarkTheme] = useState(theme)

  return (
    <ThemeContext.Provider value={[darkTheme, setDarkTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
