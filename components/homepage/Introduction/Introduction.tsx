"use client"
import React, { ReactNode, lazy, use } from 'react'

import { Divider, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import photo from '@assets/images/photo.jpg'
import { InfoItem } from './components/InfoItem'
import Image from 'next/image'

export const Introduction = () => {

    return (
        <Box sx={{ '& img': { borderRadius: '50%', width: '250px', height: '250px', borderColor: 'yellow.main', borderWidth: '2px', borderStyle: 'solid' }, display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', p: 5, boxSizing: 'border-box' }}>

            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent:'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* <Typography fontSize={32} color={'white'} display={'inline'}>Hi!&nbsp;I Am&nbsp;</Typography> */}
                    <Typography color={'yellow.main'} fontSize={40} display={'inline'} sx={{ verticalAlign: 'middle' }} gutterBottom variant='h3'>  Amir Mahdi Keshan Zare </Typography>
                    <Typography color={'grey.200'} display={'inline'} fontSize={20} component='sub'>&nbsp;(Known as AMKZ)</Typography>
                </Box>
                <Typography color={'grey.300'} fontSize={32} sx={{ mb: 3 }} variant='h4' gutterBottom>Front End Developer</Typography>
                <Grid container alignItems={'center'} spacing={4}>
                    <Grid item xs={3}>
                        <InfoItem title='YEARS OF EXPERIENCE' value={'2+'} />
                    </Grid>

                    <Grid item xs={4}>
                        <InfoItem title='PROEJCTS AROUND THE WORLD' value={'7+'} />
                    </Grid>

                    <Grid item xs={4}>
                        <InfoItem title='CONTRIBUTES IN CAREAR' value={'2.5K+'} />
                    </Grid>

                </Grid>
            </Box>
            <Image alt='Amir Mahdi Keshan Zare Photo' src={photo} />
        </Box>
    )
}

