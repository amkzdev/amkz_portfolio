import React from 'react'
import { Typography } from '@mui/material'
import Link from 'next/link'


const CustomLink = ({ text, fontWeight, href, ...props }: { href: string, text?: string, fontWeight?: string | number }) => {
    return (
        <Link href={href} {...props} style={{ textDecoration: 'none' }} title={`Go To AMKZ's ${text}`}>
            <Typography fontWeight={fontWeight || 500} color={'yellow.main'} sx={{ '&:hover': { color: 'primary.light' } }}>
                {text}
            </Typography>
        </Link>
    )
}

export { CustomLink as Link } 