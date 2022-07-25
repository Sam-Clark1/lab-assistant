import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText'

const drawerWidth = 240;
const navArry = [
  {name:'RVA Endpoint Viscosity'},
  {name: 'Grams'},
  {name: 'Liters'}
]

export default function SideNav() {
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
          anchor="left"
          className='hidden md:block '
        >

          <List>
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
  );
}
