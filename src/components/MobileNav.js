import React, { useState, Fragment } from 'react';
import { Box, 
        Drawer, 
        Button, 
        List, 
        ListItem, 
        ListItemButton, 
        ListItemText,
        Divider} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'

export default function MobileNav() {
    const [state, setState] = useState({
        left: false
      });

    const menuArray = [
        {route:'/',text: 'Home'},
        {route:'about',text: 'About'},
        {route:'calculations/RVA Endpoint Viscosity', text:'RVA Endpoint Viscosity'},
        {route:'calculations/Grams', text:'Grams'},
        {route:'calculations/Liters', text:'Liters'},
        {route:'calculations/Enzyme Amount', text:'Enzyme Amount'},
        {route:'calculations/Dilution', text:'Dilution'}
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
                <Link to={'login'} className='drawer-nav-link'>
                    <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText sx={{color: '#FFFFFF'}} primary={'Login'} />
                            </ListItemButton>
                    </ListItem>
                </Link>
                <Link to={'signup'} className='drawer-nav-link'>
                    <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText sx={{color: '#FFFFFF'}} primary={'Sign Up'} />
                            </ListItemButton>
                    </ListItem>
                </Link>
                <button className='w-full'>
                    <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText sx={{color: '#FFFFFF'}} primary={'Log Out'} />
                            </ListItemButton>
                    </ListItem>
                </button>
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