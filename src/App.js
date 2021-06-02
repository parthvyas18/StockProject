import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login'
import Register from './components/register'
function App() {
  return (
    <div className="App">
       <Login buttonLabel="Login"/>
       <Register />
    </div>
  );
}

export default App;
