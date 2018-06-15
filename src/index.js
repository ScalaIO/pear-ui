import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import './index.css'
import Cfp from './cfp'

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
})
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Cfp name="Jean" />
  </MuiThemeProvider>,
  document.getElementById('root')
)
