import React from 'react';
import { Link, Route, Router, Switch } from 'react-router-dom'
import './App.css';
import history from './history'
import { Anatomy } from './Pages/Anatomy'
import { Classification } from './Pages/Classification'
import { Diet } from './Pages/Diet'
import { Habitat } from './Pages/Habitat'
import { Home } from './Pages/Home'
import { Images } from './Pages/Images'

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/habitat">Animal Habitat</Link>
          <Link to="/classification">Classification</Link>
          <Link to="/diet">Diet</Link>
          <Link to="/anatomy">Anatomy</Link>
          <Link to="/images">Image Gallery</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/habitat" component={Habitat} />
          <Route path="/classification" component={Classification} />
          <Route path="/diet" component={Diet} />
          <Route path="/images" component={Images} />
          <Route path="/anatomy" component={Anatomy} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
