import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { Link } from "react-router-dom";
import { BeakerIcon} from '@heroicons/react/outline'

const drawerWidth = 240;

export default function SideNav() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor:'#242424',
            color: '#FFFFFF'
          },
        }}
        variant="permanent"
        anchor="left"
        className='hidden md:block'
      >
        <Toolbar className='my-4'>
        <div className="flex-shrink-0 flex items-center">
                    <Link to='/'>
                        <BeakerIcon className="h-8 w-8 text-accent" aria-hidden="true" />
                    </Link>
                    <Link to='/'>
                        <h1 className="text-2xl font-sans text-1text ml-2">
                            lab assistant
                        </h1>
                    </Link>
                </div>
        </Toolbar>

        <Divider className='bg-menu'/>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding className='hover:bg-card'>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider className='bg-card'/>
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding className='hover:bg-card'>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* <Toolbar /> */}
    </Box>
  );
}
