import React from 'react'
import Navbar from "./components/Navbar";
import {Route} from "react-router-dom";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
// import Login from "./components/Login";
// import Register from "./components/Register";

const App = () => {
  return (
    <>
    <Navbar/>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route exact path="/Home">
      <Home/>
    </Route>
    <Route path="/Aboutus">
      <Aboutus/>
    </Route>
    {/* <Route path="/Login">
      <Login/>
    </Route>
    <Route path="/Register">
      <Register/>
    </Route> */}
    
    </>
  )
}

export default App
