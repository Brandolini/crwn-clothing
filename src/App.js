import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)
const HatsDetailPage = (props) => (
  <div>
    <h1>HATS DETAIL PAGE</h1>
    <Link to='/'>Back To Home</Link>
    <button onClick={() => props.history.push('/')}>Home</button>
  </div>
)
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/shop/hats' component={HatsPage}></Route>
        <Route path='/hats/:hatsId' component={HatsDetailPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
