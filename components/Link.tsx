import React from 'react'
import { Link, LinkProps, Typography } from '@mui/material'


const CustomLink = ({ text, fontWeight, ...props }: LinkProps & { text?: string, fontWeight?: string | number }) => {
    return (
        <Link underline={'none'} sx={{ '& :hover': { color: 'primary.light' } }} {...props}  >
            <Typography fontWeight={fontWeight || 500} color={'yellow.main'}>
                {text}
            </Typography>
        </Link>
    )
}

export { CustomLink as Link } 