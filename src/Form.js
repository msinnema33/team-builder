import React, { useState } from 'react';

function Form = props => {
const [formData, setFormData] =useState({
  firstName: '',
  lastName: '',
  role: '',
  email: '',
  ID: '',
})

const onInputChange = event => {
  setFormData({
    ...formData,
    [event.target.name]: event.target.value,
  });
}

const submitForm = event => {
  event.preventDefault
  addNewTeam
}

    return (
      <div className="Form">
        <form>
          <label>
            First Name:
            <input name = 'firstName' onChange ={onInputChange} type = 'text'
            placeholder = 'First Name'/>
          </label><br></br>
          <label>
            Last Name:
            <input name = 'lastName' onChange ={onInputChange} type = 'text'
            placeholder = 'Last Name' />
          </label><br></br>
          <label>
            Role:
            <input name = 'role' onChange ={onInputChange} type = 'text'
            placeholder = 'role'/>
          </label><br></br>
          <label>
            Email address:
            <input name = 'email' onChange ={onInputChange} type = 'email'
            placeholder = 'valid email'/>
          </label><br></br>
          <label>
            ID Number:
            <input name = 'ID' onChange ={onInputChange} type = 'number'
            placeholder = 'Badge number'/>
          </label>
        </form>
      </div>
    );
  }
  
  export default Form;