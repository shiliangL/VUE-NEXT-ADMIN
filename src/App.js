import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '@/views/Layout';
// import LoginApp from '@/views/login';
// import AppLayout from '@/views/Layout';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Layout} />
          {/* <Route path="/login" component={AppLayout} /> */}
        </Switch>
      </Router>
    )
  }
}

export default App;
