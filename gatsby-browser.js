import React from 'react'

import ThemeProvider from './src/context/themeProvider'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
