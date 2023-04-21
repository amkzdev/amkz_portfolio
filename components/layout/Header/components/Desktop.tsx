'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import lightLogo from 'assets/logos/yellow.png'
import { Call } from '@mui/icons-material'
import { Link } from '@components'
import Image from 'next/image'
import NextLink from 'next/link'

export const Desktop = () => {
    const [mode, setMode] = useState<'sticky' | 'normal' | undefined>()

    const headerRef = useRef<HTMLInputElement>()
    const menuItems = [
        { name: 'Projects', url: '#projects' },
        { name: 'Work Experince', url: '#workexperince' },
        { name: 'Skills', url: '#skills' },
        { name: 'Education', url: '#education' },
    ]

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });


    const isSticky = () => {
        const scrollTop = window.scrollY;
        scrollTop >= 10 ? setMode('sticky') : setMode('normal');
    };

    useEffect(() => isSticky(), [])

    return (
        <>
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, justifyContent: 'space-between', px: 2, py: 1.5, position: mode == 'sticky' ? 'fixed' : 'fixed', top: 0, width: '100%', maxWidth: '1488px', transition: 'all ease 0.4s', backgroundColor: '#020202', boxSizing: 'border-box', zIndex: 1000, boxShadow: mode == 'sticky' ? '0px  1px #F6E71D' : '' }} ref={headerRef}>
                <NextLink href={'/'} title='Back to Home Page'>
                    <Box sx={{ '& img': { width: '50px', height: '45px', mr: 1 }, display: 'flex', alignItems: "center"  , flexBasis:'20%'}}>
                        <Image alt='Amir Mahdi Keshan Zare Logo' src={lightLogo} />
                        <Typography fontWeight={'500'} color={'yellow.main'} fontSize={18} component={'h3'} title='Amir Mahdi Keshan Zare (AMKZ) Portfolio'> Amir Mahdi Keshan Zare (AMKZ)</Typography>
                    </Box>
                </NextLink>

                <Box component={'nav'} sx={{ display: 'flex', flexDirection: "row", justifyContent: 'space-evenly', alignItems: 'center' }}>
                    {menuItems.map((item, index) => <Box key={item.url} sx={{display:'flex',alignItems:'center'}}>
                        {!!index && <Typography color={'yellow.main'} sx={{ mx: 2.5 }}>|</Typography>}
                        <Link text={item.name}  href={item.url} />
                    </Box>)}
                </Box>

                <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: 'flex-end', alignItems: 'center' , flexBasis:'20%' }}>

                    {/* <IconButton>
                    <LinkedIn color='primary' />
                </IconButton>

                <IconButton sx={{ color: '#fff' }}>
                    <GitHub />
                </IconButton> */}

                    {/* <Button variant='outlined' color='info' startIcon={<Download />} disabled>
                    <Typography fontWeight='bold'>Download</Typography>
                </Button> */}

                    <Button variant='contained' color='yellow' title='Contact To Amir Mahdi Keshan Zare' startIcon={<Call />} sx={{ ml: 2 }}>
                        <Typography fontWeight='bold'>Contact</Typography>
                    </Button>


                </Box>
            </Box >

            <Box height={'60px'} sx={{ transition: 'all ease 0.2s' }} />
        </>
    )
}
