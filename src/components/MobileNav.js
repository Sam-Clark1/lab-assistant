import React, { useState, Fragment, useEffect } from 'react';
import { Box, 
        Drawer, 
        Button, 
        List, 
        ListItem, 
        ListItemButton, 
        ListItemText,
        Divider} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import AuthService from '../api/auth.service';
import event from "../api/event";

export default function MobileNav() {
    const [state, setState] = useState({
        left: false
      });
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setCurrentUser(user)
        }
        event.on("logout", () => {
            logOut();
          });
      
        return () => {
        event.remove("logout");
        };
    },[]);

    const logOut = () => {
        AuthService.logout();
        setCurrentUser(undefined);
      };

    const menuArray = [
        {route:'lab-assistant/calculations/RVA Endpoint Viscosity', text:'RVA Endpoint Viscosity'},
        {route:'lab-assistant/calculations/Grams', text:'Grams'},
        {route:'lab-assistant/calculations/Liters', text:'Liters'},
        {route:'lab-assistant/calculations/Enzyme Amount', text:'Enzyme Amount'},
        {route:'lab-assistant/calculations/Dilution', text:'Dilution'}
    ]; 

    const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }
    setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
    <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, height:'100%'}}
        className='bg-menu'
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
    >
        <List>
            {currentUser ? 
            <a href='lab-assistant/' className='w-full' onClick={logOut}>
                <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText sx={{color: '#FFFFFF'}} primary={'Log Out'} />
                        </ListItemButton>
                </ListItem>
            </a>
            :
            <>
                <Link to={'lab-assistant/login'} className='drawer-nav-link'>
                    <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText sx={{color: '#FFFFFF'}} primary={'Login'} />
                            </ListItemButton>
                    </ListItem>
                </Link>
                <Link to={'lab-assistant/signup'} className='drawer-nav-link'>
                    <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText sx={{color: '#FFFFFF'}} primary={'Sign Up'} />
                            </ListItemButton>
                    </ListItem>
                </Link>
            </>
            }
            <Divider className='bg-card'/>
            <Link to={'/'} className='drawer-nav-link'>
                <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText sx={{color: '#FFFFFF'}} primary={'Home'} />
                        </ListItemButton>
                </ListItem>
            </Link>
            <Link to={'lab-assistant/about'} className='drawer-nav-link'>
                <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText sx={{color: '#FFFFFF'}} primary={'About'} />
                        </ListItemButton>
                </ListItem>
            </Link>
            <a href="https://github.com/Sam-Clark1/lab-assistant" className="text-1text hover:text-accent" target="_blank" rel='noreferrer'>
                    <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText sx={{color: '#FFFFFF'}} primary={'GitHub'} />
                            </ListItemButton>
                    </ListItem>
                </a>
            <Divider className='bg-card'/>
            {menuArray.map(({route, text}) => (
            <Link to={route} className='drawer-nav-link' key={text}>
                <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText sx={{color: '#FFFFFF'}} primary={text} />
                        </ListItemButton>
                </ListItem>
            </Link>
            ))}
        </List>
    </Box>
    );

    return(
        <div>
        {['left'].map((anchor) => (
            <Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                    <MenuIcon className='text-1text active:bg-card' sx={{fontSize:'2.5rem'}}/>
                </Button>
                <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                >
                    {list(anchor)}
                </Drawer>
            </Fragment>
        ))}
        </div>
    );
};