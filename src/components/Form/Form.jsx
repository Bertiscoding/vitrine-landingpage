import React, { useState } from 'react'
import {
  gql,
  useMutation,
 } from '@apollo/client'

const Form = () => {
  const CREATE_USERINPUT = gql`
    mutation UserInputMutation(
      $email: String!,
      $message: String,
      $gdpr: Boolean!,
    ) {
      createUserInput(email:$email, message:$message, gdpr:$gdpr) {
        email
        message
        gdpr
      }
    }
  `
  const [formState, setFormState] = useState({
    email: '',
    message: '',
    gdpr: false
  })

  const [createUserInput] = useMutation(CREATE_USERINPUT, {
    variables: { 
      email: formState.email,
      message: formState.message,
      gdpr: formState.gdpr,
    }
  });

  const handleChangeString = (event) => {
    const { name, value } = event.target;
    setFormState({...formState, [name]: value})
  }

  const handleChangeBoolean = (event) => {
    const { name, checked } = event.target;
    setFormState({...formState, [name]: checked})
  }

  const handleSubmit = () => {
    createUserInput();
  }

  return (
    <form className="margin-y-xxl">
      <div className="margin-y-sm">
        <label htmlFor="email">Your email address</label>
        <input
          required
          id="email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChangeString}
        />
      </div>
      <div className="margin-y-sm">
        <label htmlFor="message">Your message for us</label>
        <textarea
          rows="10"
          cols="40"
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChangeString}
        ></textarea>
      </div>
      <div className="margin-y-sm">
        <input
          required
          id="gdpr"
          name="gdpr"
          type="checkbox"
          value={formState.gdpr}
          checked={formState.gdpr}
          onChange={handleChangeBoolean}
        />
        <label htmlFor="gdpr">GDPR</label>
      </div>
      <button
        type="submit"
        className="button-style"
        onClick={handleSubmit}
      >Submit</button>
    </form>
  )
}

export default Form
