import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './App.css';

function App() {
  const [member, useMember] = useState({firstName: "", lastName: "", role: "", email: "", id: "" });
  const team = [];
  const history = useHistory();
  const routeToForm = event => {
    history.push("/Form");
  }

  return (
    <div className="App">
      <header className="App-header">
      {/* <Link to = '/Form'>   */}
      <button onClick ={routeToForm} className="md-button shop-button">Add a Team member</button>
      {/* </Link> */}
      
        Welcome to my Team!<br> 
      </br>
        Role      Last        First       Email       ID

      </header>

      
    </div>
  );
}

export default App;
