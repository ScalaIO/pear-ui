import React from 'react'
import classNames from 'classnames'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import './header.css'

const Header = ({ classes, theme, children, open, toggleDrawer }) => (
  <AppBar
    position="absolute"
    className={classNames(classes.appBar, open && classes.appBarShift)}
  >
    <Toolbar disableGutters={!open}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer}
        className={classNames(classes.menuButton, open && classes.hide)}
      >

        <MenuIcon />
      </IconButton>
      <Typography variant="title" color="inherit" noWrap>
        Mini variant drawer
      </Typography>
    </Toolbar>
  </AppBar>
)

export default Header
