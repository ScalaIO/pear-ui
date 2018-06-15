import React from 'react'
import classNames from 'classnames'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import HistoryIcon from '@material-ui/icons/History'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'

const Menu = ({ classes, theme, open, toggleDrawer }) => (
  <Drawer
    variant="permanent"
    classes={{
      paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose)
    }}
    open={open}
  >
    <div className={classes.toolbar}>
      <IconButton onClick={toggleDrawer}>
        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </div>
    <Divider />
    <List>
      <ListItem>
        <HistoryIcon />
      </ListItem>
    </List>
  </Drawer>
)

export default Menu
