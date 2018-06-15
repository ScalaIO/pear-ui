import React from 'react'
import ReactDOM from 'react-dom'
import Cfp from './Cfp'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Cfp />, div)
  ReactDOM.unmountComponentAtNode(div)
})
