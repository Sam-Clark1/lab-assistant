import React, {useState, useEffect} from 'react'
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material'
import { Link } from 'react-router-dom';
import AuthService from '../api/auth.service';

export default function Favorites(props) {
  const [currentUser, setCurrentUser] = useState(undefined);
  const {userFavorites} = props;

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

const drawerWidth = 240;
  return (
    <>
      {currentUser &&
        <Box sx={{ display: 'flex'}}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor:'#242424',
              color: '#FFFFFF',
              mt:'6rem'
            },
          }}
          variant="permanent"
          anchor="right"
          className='hidden lg:block '
        >

          <List>
            <ListItem className='text-xl'>
                Favorites
            </ListItem>
            <Divider className='bg-card'/>
            {userFavorites.map((item) => (
              <Link to={`${item}`} key={item}>
                <ListItem disablePadding className='hover:bg-card'>
                    <ListItemButton disableRipple>
                      <ListItemText primary={item} />
                    </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
      </Box>}
    </>
  )
}
