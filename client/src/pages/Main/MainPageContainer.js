import React from 'react';
import MainPage from './MainPage';

class MainPageContainer extends React.Component {
  // Any data fetching would go here on ComponentDidMount
  constructor(props) {
    super(props);
    this.state = {
      
    };
  };

  render() {
    return <MainPage {...this.state} />
  }
}

export default MainPageContainer;