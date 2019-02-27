import React, { Component } from 'react';
import { NavLoggedIn, NavNotLoggedIn } from "../Nav";
import DMLogoFB from '../../assets/images/DMLogoFB.png';
import { auth } from '../../firebase';
import AuthUserContext from '../Session/AuthUserContext';

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  };

  logOutHandler = (event) => {
    event.preventDefault();
    auth.doSignOut();
  };

  render() {
    return (
      <React.Fragment>
        <nav className='nav flex bg-flex p-3 justify-between'>
        <div className='border-solid border-2 border-leaf-green rounded boxShadow opacity-90'>
          <div className='inline-flex border-solid border-4 border-soft-black rounded'>
            <img className='rounded border-solid border-2 border-leaf-green' src={DMLogoFB} alt='Diet Matador'></img>
          </div>
          </div>
          {/* Will be switched to a ternary operator once auth is added */}
          <AuthUserContext.Consumer>
              {
                authUser =>
                  authUser
                    ? <NavLoggedIn {...this.props} logOutHandler={this.logOutHandler} />
                    : <NavNotLoggedIn {...this.props} />
              }
            </AuthUserContext.Consumer>
        </nav>
      </React.Fragment>
    )
  }
}