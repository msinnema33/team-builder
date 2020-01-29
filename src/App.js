import React, { useState } from 'react';



import './App.css';


const [team, useTeam] = useState({firstName: "", lastName: "", role: "", email: "" });

function App() {


  return (
    <div className="App">
      <header className="App-header">
        Welcome to my Team!
      </header>
    </div>
  );
}

export default App;
