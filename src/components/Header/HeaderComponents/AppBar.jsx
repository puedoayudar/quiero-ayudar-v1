import React from 'react'

import { AppBar, Toolbar, IconButton, Avatar, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 10,
  },
  avatar: {
    margin: 5,
    width: 60,
    height: 60,
  },
};

export default props => 
  <div style={styles.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton style={styles.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Avatar
        alt="Logo Quiero Ayudar"
        src="http://designjrc.com/qa/logo.jpg"
        style={styles.avatar}
        />
        <div style={styles.grow}></div>
        <Button color="inherit">Lista</Button>
      </Toolbar>
    </AppBar>
  </div>