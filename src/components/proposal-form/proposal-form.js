import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './proposal-form.css'

const maxLength = count => value => value.length <= 125
const required = value => value.trim() !== ''

const validators = {
  title: [required, maxLength(125)],
  description: [required, maxLength(1200)],
  motivation: [required, maxLength(3500)]
}

let autoSaveId = null

const cancelAutoSave = () => {
  clearTimeout(autoSaveId)
}

const autoSave = self => () => {
  autoSaveId = setTimeout(save(self), 1000)
}

const save = self => () => {
  console.log('save')
}

const inputChanged = (self, name) => e => {
  cancelAutoSave()
  const { value } = e.target
  self.setState(
    state => ({
      [name]: { ...state[name], value, validable: true }
    }),
    autoSave(self)
  )
}

const hasErrors = (name, field) =>
  Boolean(field.validable) && !isFieldValid(name, field)

const isFieldValid = (name, field) =>
  validators[name].reduce(
    (acc, validator) => acc && validator(field.value),
    true
  )

class ProposalForm extends Component {
  state = {
    title: { value: this.props.title },
    description: { value: '' },
    motivation: { value: '' }
  }
  showErrors() {
    this.setState(state =>
      Object.keys(validators).reduce((acc, name) => {
        return { ...acc, [name]: { ...state[name], validable: true } }
      }, {})
    )
  }
  isValid() {
    return Object.keys(validators).reduce((acc, name) => {
      return acc && isFieldValid(name, this.state[name])
    }, true)
  }
  submit = () => {
    if (!this.isValid()) {
      this.showErrors()
    }

    // fetch
  }
  render() {
    const { title, description, motivation } = this.state
    return (
      <div className="proposal-form">
        <h2>Proposal</h2>
        <TextField
          label="proposal.title"
          value={title.value}
          onChange={inputChanged(this, 'title')}
          helperText={`${title.value.length}/125 characters`}
          error={hasErrors('title', title)}
          fullWidth
          required
          placeholder="Describe your proposal as it will appear on our website and mobile apps. You can use Markdown syntax."
        />
        <TextField
          label="proposal.description"
          value={description.value}
          onChange={inputChanged(this, 'description')}
          helperText="0/1200 characters"
          error={hasErrors('description', description)}
          fullWidth
          multiline
          rows={5}
          required
          placeholder="Describe your proposal as it will appear on our website and mobile apps. You can use Markdown syntax."
        />
        <TextField
          label="proposal.motivation "
          value={motivation.value}
          onChange={inputChanged(this, 'motivation')}
          helperText="0/3500 characters"
          error={hasErrors('motivation', motivation)}
          fullWidth
          multiline
          rows={5}
          required
          placeholder="Describe your proposal as it will appear on our website and mobile apps. You can use Markdown syntax."
        />
        <Button variant="contained" color="primary" onClick={this.submit}>
          Submit
        </Button>
      </div>
    )
  }
}

export default ProposalForm
