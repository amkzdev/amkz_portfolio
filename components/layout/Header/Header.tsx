'use client';
import React from 'react'
import { Box } from '@mui/material'
import { Resposive } from './components/Resposive'
import { Desktop } from './components/Desktop'

export const Header = () => {
    return (
        <Box component={'header'}>
            <Desktop />
            <Resposive />
        </Box>
    )
}
