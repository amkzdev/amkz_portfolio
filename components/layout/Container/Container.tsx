 'use client'
import { firstTheme } from '@/theme/first'
import { ThemeProvider, Container } from '@mui/material'
import React, { ReactNode } from 'react'

const AppContainer = ({ children }: { children: ReactNode }) => {
    return (
        <main className='container mx-auto px-4'>
            <ThemeProvider theme={firstTheme}>
                <Container maxWidth='xl'>
                    {children}
                </Container>
            </ThemeProvider>
        </main >
    )
}
export { AppContainer as Container } 