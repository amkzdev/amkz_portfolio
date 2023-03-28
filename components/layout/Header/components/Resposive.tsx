import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from 'assets/logos/logoCircle.png'
import { Drawer, Box } from '@mui/material'


import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { WorkHistory, Task, MenuBook, Gamepad } from '@mui/icons-material';
import Image from 'next/image';


const Menu = ({ closeHandler }: { closeHandler: Function }) => (
    <Box
        sx={{ width: 250, borderRadius: 4 }}
        role="presentation"
        onClick={() => closeHandler()}
        onKeyDown={() => closeHandler()}
    >
        <List>

            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <Image alt='amkz-logo' src={logo} width={30} height={30} />
                    </ListItemIcon>
                    <ListItemText primary={'AMKZ Offical Portfolio'} />
                </ListItemButton>
            </ListItem>

            <Divider />

            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <WorkHistory />
                    </ListItemIcon>
                    <ListItemText primary={'Work Expereinces'} />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <Task />
                    </ListItemIcon>
                    <ListItemText primary={'Projects'} />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <MenuBook />
                    </ListItemIcon>
                    <ListItemText primary={'Education'} />
                </ListItemButton>
            </ListItem>


            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <Gamepad />
                    </ListItemIcon>
                    <ListItemText primary={'Hobbies'} />
                </ListItemButton>
            </ListItem>


        </List>
    </Box>
);



export const Resposive = () => {

    const [drawerVisiblity, setDrawerVisiblity] = useState(false)

    return (
        <>
            <AppBar position="fixed" sx={{ backgroundColor: '#003B95', display: { lg: 'none' } }} >
                <Toolbar sx={{ display: 'flex', justifyContent: "space-between" }}>
                    <Typography variant="h6" component="div">
                        AMKZ
                    </Typography>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        onClick={() => setDrawerVisiblity(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor={'right'}
                open={drawerVisiblity}
                onClose={() => setDrawerVisiblity(false)}
                sx={{ borderRadius: 4, overflow: 'hidden' }}
            >
                <Menu closeHandler={() => setDrawerVisiblity(true)} />
            </Drawer>
        </>
    )
}
