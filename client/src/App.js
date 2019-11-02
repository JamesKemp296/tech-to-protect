import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Form from './pages/Form'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/form" component={Form} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
