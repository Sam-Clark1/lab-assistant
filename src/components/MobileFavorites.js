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
import axios from '../api/axios';

export default function MobileFavorites() {
    const [state, setState] = useState({
        right: false
      });
    
    const [currentUser, setCurrentUser] = useState(undefined);
    const [userFavorites, setUserFavorites] = useState([]);

    useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
        setCurrentUser(user);
        axios.get(`users/${user.id}`).then(
        response => {
            setUserFavorites(response.data.calculations)
        })
        }
      }, []);

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
                <ListItem className='text-xl text-1text'>
                    Favorites
                </ListItem>
                <Divider className='bg-card'/>
                {userFavorites.map((item) => (
                    <Link to={`calculations/${item}`} key={item} className='drawer-nav-link'>
                        <ListItem disablePadding>
                                <ListItemButton disableRipple>
                                    <ListItemText sx={{color: '#FFFFFF'}} primary={item} />
                                </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
      );

    return(
        <>
            {currentUser &&
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
            }
        </>
    );
}
