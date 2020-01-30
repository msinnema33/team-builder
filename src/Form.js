import React, { useState } from 'react';

const Form = props => {
const [member, setMember] = useState([{firstName: "", lastName: "", role: "", email: ""}]);  

const onInputChange = event => {
  setMember({
    ...member,
    [event.target.name]: event.target.value,
  });
}

const submitForm = event => {
  event.preventDefault();
  props.addNewTeam(member);
  setMember({ 
  firstName: '',
  lastName: '',
  role: '',
  email: '',
 });
}
    return (
      <div className="Form">
        <form onSubmit={submitForm}>
          <label>
            First Name:
            <input name = 'firstName' onChange ={onInputChange} type = 'text'
            placeholder = 'First Name'
            value = {member.firstName}/>
          </label><br></br>
          <label>
            Last Name:
            <input name = 'lastName' onChange ={onInputChange} type = 'text'
            placeholder = 'Last Name' 
            value = {member.lastName}/>
          </label><br></br>
          <label>
            Role:
            <input name = 'role' onChange ={onInputChange} type = 'text'
            placeholder = 'role'
            value = {member.role}/>
          </label><br></br>
          <label>
            Email address:
            <input name = 'email' onChange ={onInputChange} type = 'email'
            placeholder = 'valid email'
            value = {member.email}/>
          </label><br></br>
          <button type = 'submit'>Add Team Member</button>
          {/* <label>
            ID Number:
            <input name = 'ID' onChange ={onInputChange} type = 'number'
            placeholder = 'Badge number'/>
          </label> */}
        </form>
      </div>
    );
  }
  
  export default Form;