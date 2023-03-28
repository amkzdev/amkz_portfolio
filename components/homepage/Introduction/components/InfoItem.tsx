"use client"

import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const InfoItem = ({ title, value }: { title: string, value: string | number }) => {
    return (
            <Box sx={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                <Typography fontSize={36} color={'grey.400'} sx={{ mr: 2 }} fontWeight={'bold'}>
                    {value}
                </Typography>
                <Typography fontSize={20} color={'GrayText'}>
                    {title}
                </Typography>

            </Box>
    )
}
