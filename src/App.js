import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Registration" component={Registration} />
      </Switch>
    </Router>
  );
};

export default App;
