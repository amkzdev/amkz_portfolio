"use client"
import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

export const HeroSection = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: "100%", justifyContent: 'center' , background:'ra dial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)'}}>
            <Box sx={{ background: '#161616', display: 'flex', flexDirection: 'column', alignItems: 'center', width: "100%",BoxSizing:'border-Box', justifyContent: 'center', p: 3 }}>
                <Typography fontSize={24} color={'white'} gutterBottom>Are you looking for a experinced front end developer ?</Typography>
                <Typography fontSize={24} color={'white'} gutterBottom>Do you need front end applications to achieve your business goals?</Typography>
                <Typography fontSize={28} color={'success.light'}>So you are in a right Place</Typography>
                <Typography fontSize={40} color={'yellow.main'}>I am Here To Develop!</Typography>
            </Box>
        </Box>
    )
}
