import React from 'react';
import { Route, Router, Switch } from 'react-router-dom'
import './App.css';
import history from './history'
import { Anatomy } from './Pages/Anatomy'
import Behavior from './Pages/Behavior'
import { Classification } from './Pages/Classification'
import { Diet } from './Pages/Diet'
import { Habitat } from './Pages/Habitat'
import { Home } from './Pages/Home'
import { Images } from './Pages/Images'
import Mating from './Pages/Mating'
import TopNav from './Components/TopNav'

function App() {
  return (
    <div className="App">
      <Router history={history}>
      <TopNav />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/habitat" component={Habitat} />
            <Route path="/classification" component={Classification} />
            <Route path="/diet" component={Diet} />
            <Route path="/images" component={Images} />
            <Route path="/anatomy" component={Anatomy} />
            <Route path="/behavior" component={Behavior} />
            <Route path="/mating" component={Mating} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
