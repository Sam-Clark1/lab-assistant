import React from 'react'
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material'
import { Link } from 'react-router-dom';

export default function Favorites() {
const drawerWidth = 240;
const navArry = []
  return (
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
          className='hidden md:block '
        >

          <List>
            <ListItem className='text-xl'>
                Favorites
            </ListItem>
            <Divider className='bg-card'/>
            {navArry.map((item, index) => (
              <Link to={`${item.name}`} key={item.name}>
                <ListItem disablePadding className='hover:bg-card'>
                    <ListItemButton disableRipple>
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
      </Box>
  )
}
