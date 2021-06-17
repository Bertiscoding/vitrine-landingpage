import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'

const Form = () => {
 const [formState, setFormState] = useState({
  email: undefined,
  message: undefined,
  // gdpr: false
 })
 const [createUserInput] = useMutation(CREATE_USERINPUT);

 const CREATE_USERINPUT = gql`
  mutation CreateUserInput($type: String!) {
    createUserInput(type: $type) {
      email,
      message
    }
  }
 `;

 const handleChange = (event) => {
  const { name, value } = event.target;
  setFormState({...formState, [name]: value})
 }

 const handleSubmit = (event) => {
  event.preventDefault()
  console.log('formState', formState)
  createUserInput({variables: { user: formState} });
 }
 
 return (
  <form onSubmit={handleSubmit}>
  <div>
   <label htmlFor="email">Your email address</label>
   <input
    id="email"
    name="email"
    type="email"
    onChange={handleChange}
   />
  </div>
  <div>
   <label htmlFor="message">Your message for us</label>
   <textarea
    rows="10"
    cols="30"
    id="message"
    name="message"
    onChange={handleChange}
   ></textarea>
  </div>
  {/* <div>
   <input
    id="gdpr"
    name="gdpr"
    type="checkbox"
    onChange={handleChange}
   />
   <label htmlFor="gdpr">GDPR</label>
  </div> */}
  <button
    type="submit"
   >Submit</button>
 </form>
 )
}

export default Form
