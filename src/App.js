import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
<div>

<Route exact path="/"/>
<Route  path="/About"/>
<Route  path="/Contact"/>

    <Navigation />
</div>
  
  
  
  );


export default App;
