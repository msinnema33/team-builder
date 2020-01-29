import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Members from './Members';
import './App.css';
import Form from './Form.js';

function App() {
  const [members, setMembers] =useState({
    firstName: 'Mike',
    lastName: 'Sinnema',
    role: 'Project Manager',
    email: 'mjs@mail.com',
    id: 1
    });  
  
  const history = useHistory();
  const routeToForm = event => {
    history.push("/Form");
  }
  const addNewTeam = member => {
    const newTeam = {
      firstName: member.firstName,
      lastName: member.lastName,
      role: member.role,
      email: member.email,
      ID: Date.now(),
    };
    setMembers([...members, newTeam]);
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path='/Form'>
           <Form addNewTeam = {addNewTeam}/>
        </Route>
      </Switch>
      <header className="App-header">
        <button onClick ={routeToForm} className="md-button shop-button">Add a Team member</button>
            
        Welcome to my Team!<br> 
      </br>
        Role      Last        First       Email      
       <Members members = {members} />
      </header> 
    </div>
  );
}

export default App;
