import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import plp from './components/plp';

function App() {
  return (
    <Router>
      <div>
          <Route exact path="/" component={Home} />
          <Route path="/plp" component={plp} />
          <Route path="/login" component={Login} />
          <Route path="/Register" component={Register} />
      </div>
    </Router>
  );
}

export default App;
