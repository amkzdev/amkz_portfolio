'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import lightLogo from 'assets/logos/yellow.png'
import { Call } from '@mui/icons-material'
import { Link } from '@components'
import Image from 'next/image'

export const Desktop = () => {
    const [mode, setMode] = useState<'sticky' | 'normal' | undefined>()

    const headerRef = useRef<HTMLInputElement>()
    const menuItems = [
        { name: 'Projects', url: '/projects' },
        { name: 'Work Experince', url: '#' },
        { name: 'Skills', url: '#' },
        { name: 'Education', url: '#' },
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
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, justifyContent: 'space-between', px: 2, py: 1.5, position: mode == 'sticky' ? 'fixed' : 'fixed', top: 0, width: '100%', maxWidth: '1440px', transition: 'all ease 0.4s', backgroundColor: '#020202', boxSizing: 'border-box', zIndex: 1000, boxShadow: mode == 'sticky' ? '0px  1px #F6E71D' : '' }} ref={headerRef}>
                <Box sx={{ '& img': { width: '50px', height: '45px', mr: 1 }, display: 'flex', alignItems: "center", flex: 0.5 }}>
                    <Image alt='amkz-light-logo' src={lightLogo} />
                    <Typography fontWeight={'500'} color={'yellow.main'} fontSize={18}>Amir Mahdi Keshan Zare (AMKZ) </Typography>
                </Box>

                <Box component={'nav'} sx={{ display: 'flex', flexDirection: "row", justifyContent: 'space-evenly', flex: 0.55, alignItems: 'center' }}>
                    {menuItems.map((item, index) => <>
                        {!!index && <Typography color={'yellow.main'}>|</Typography>}
                        <Link text={item.name} href={item.url} />
                    </>)}
                </Box>

                <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: 'flex-end', alignItems: 'center', flex: 0.5 }}>

                    {/* <IconButton>
                    <LinkedIn color='primary' />
                </IconButton>

                <IconButton sx={{ color: '#fff' }}>
                    <GitHub />
                </IconButton> */}

                    {/* <Button variant='outlined' color='info' startIcon={<Download />} disabled>
                    <Typography fontWeight='bold'>Download</Typography>
                </Button> */}

                    <Button variant='contained' color='yellow' startIcon={<Call />} sx={{ ml: 2 }}>
                        <Typography fontWeight='bold'>Contact</Typography>
                    </Button>


                </Box>
            </Box>

            <Box height={'60px'} sx={{ transition: 'all ease 0.2s' }} />
        </>
    )
}
