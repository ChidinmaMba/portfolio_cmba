import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComp from './component/navigation/NavbarComp';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="App">
        <div className="App">
          <NavbarComp />
        </div>
    </div>
  );
}

export default App;
