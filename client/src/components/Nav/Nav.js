import React, { Component } from 'react';
import DMLogoFB from '../../assets/images/DMLogoFB.png';
import { NavNotLoggedIn } from "../Nav";

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render() {
    return (
      <React.Fragment>
        <nav className='flex bg-soft-black p-3 justify-center'>
          <div className='border-solid border-2 border-leaf-green rounded boxShadow opacity-90'>
            <div className='inline-flex border-solid border-4 border-soft-black rounded'>
              <img className='rounded border-solid border-2 border-leaf-green' src={DMLogoFB} alt='Diet Matador'></img>
            </div>
          </div>
          {/* Will be switched to a ternary operator once auth is added */}
          <NavNotLoggedIn {...this.props} />
        </nav>
      </React.Fragment>
    )
  }
}