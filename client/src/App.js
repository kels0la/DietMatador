import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPageContainer from './pages/Main/MainPageContainer';
import { Nav } from './components/Nav';

// Higher Order Components
import withModals from './components/Modals/withModals'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  };

  render() {
    return (
      <Router>
        <Nav openModal={this.openModal}/>
        <Route exact path="/" component={MainPageContainer} />
        
      </Router>
    );
  }
}

export default (withModals(App));
