import React, { useState } from 'react';

function Form() {
const [formData, setFormData] =useState({
  firstName: '',
  lastName: '',
  role: '',
  email: '',
})

const onInputChange = event => {
  setFormData({
    ...formData,
    [event.target.name]: event.target.value,
  });
}

    return (
      <div className="Form">
        <form>
          <label>
            First Name:
            <input name = 'firstName' onChange ={onInputChange} />
          </label><br></br>
          <label>
            Last Name:
            <input name = 'lastName' onChange ={onInputChange} />
          </label><br></br>
          <label>
            Role:
            <input name = 'role' onChange ={onInputChange} />
          </label><br></br>
          <label>
            Email address:
            <input name = 'email' onChange ={onInputChange} />
          </label>
        </form>
      </div>
    );
  }
  
  export default Form;