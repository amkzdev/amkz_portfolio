import { ThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'

export const ClientLayout = ({children}:{children:ReactNode}) => {
  return (
    <ThemeProvider>
        {children}
    </ThemeProvider>
  )
}
