import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPageContainer from './pages/Main/MainPageContainer';
import { Nav } from './components/Nav';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  };

  render() {
    return (
      <Router>
        <Nav/>
        <Route exact path="/" component={MainPageContainer} />
        
      </Router>
    );
  }
}

export default App;
