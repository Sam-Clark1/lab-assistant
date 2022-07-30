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

export default function MobileFavorites() {
    const [state, setState] = useState({
        right: false
      });

    const menuArray = []; 

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
                <a href="https://github.com/Sam-Clark1/lab-assistant" className="text-1text hover:text-accent" target="_blank" rel='noreferrer'>
                    <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText sx={{color: '#FFFFFF'}} primary={'GitHub'} />
                            </ListItemButton>
                    </ListItem>
                </a>
                <Divider className='bg-card'/>
                <ListItem className='text-xl text-1text'>
                    Favorites
                </ListItem>
                <Divider className='bg-card'/>
                {menuArray.map(({route, text}) => (
                <ListItem key={text} disablePadding>
                    <Link to={route} className='drawer-nav-link'>
                        <ListItemButton>
                            <ListItemText sx={{color: '#FFFFFF'}} primary={text} />
                        </ListItemButton>
                    </Link>
                </ListItem>
                ))}
            </List>
        </Box>
      );

    return(
        <div>
        {['right'].map((anchor) => (
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
}
