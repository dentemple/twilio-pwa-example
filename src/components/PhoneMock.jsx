import React, { Component } from 'react'
import styled from 'styled-components'

class PhoneMock extends Component {
  state = {
    tel: ''
  }

  ACTIONS = {
    CALL: 'call',
    CLEAR: 'clear'
  }

  handleChange = e => {
    const { value } = e.target

    this.setState({ tel: value })
  }

  handleClick = e => {
    const { name, value } = e.target
    console.log({ name, value })

    const {
      // CALL,
      CLEAR
    } = this.ACTIONS

    if (name === CLEAR) {
      this.setState({ tel: '' })
    }
    // else if (value === CALL) {

    // }
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    const { tel } = this.state
    const { CALL, CLEAR } = this.ACTIONS

    const phoneProps = {
      onChange: this.handleChange,
      pattern: '[1-9]{1}[0-9]{9}',
      placeholder: '555-555-5555',
      type: 'tel',
      value: tel
    }

    const buttonProps = {
      onClick: this.handleClick,
      type: 'submit'
    }

    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <div>{tel ? <label>{tel}</label> : <label />}</div>
        <div>
          <input name='tel' {...phoneProps} />
          <input name='clear' {...buttonProps} value={CLEAR} />
          <input name='call' {...buttonProps} value={CALL} />
        </div>
      </StyledForm>
    )
  }
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`

export default PhoneMock
