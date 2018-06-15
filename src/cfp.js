import React, { Component } from 'react'

import Header from './components/header/header'
import Drawer from './components/drawer/drawer'
import ProposalForm from './components/proposal-form/proposal-form'
import { withStyles } from '@material-ui/core/styles'

import './cfp.css'

const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    position: 'fixed'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    paddingTop: 64 + 24
  }
})

class Cfp extends Component {
  state = { open: false }

  toggleDrawer = () => {
    this.setState(state => ({
      open: !state.open
    }))
  }

  render() {
    const { open } = this.state
    const { classes, theme } = this.props

    return (
      <div className={classes.root}>
        <Header
          classes={classes}
          theme={theme}
          open={open}
          toggleDrawer={this.toggleDrawer}
        />
        <Drawer
          classes={classes}
          theme={theme}
          open={open}
          toggleDrawer={this.toggleDrawer}
        />
        <main className={classes.content}>
          <ProposalForm title="hgfhgfg" />
        </main>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Cfp)
