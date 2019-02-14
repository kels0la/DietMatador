import React from 'react';
import { firebase, auth } from '../../firebase';
// import axios from 'axios'
import { B } from '../Widgets';

import ModalWrapper from './ModalWrapper';

class JoinModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      passwordOne: '',
      passwordTwo: '',
      error: null,
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value, error: null })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    auth
      .doCreateUserWithEmailAndPassword(this.state.email, this.state.passwordTwo)
      .then(() => this.props.closeModal())
      .catch(error => {
        this.setState({ error })
      })
  }

  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   const { username, email, passwordOne, moneyBtnId } = this.state

  //   axios.get('/api/users/username/' + username)
  //     .then(response => {
  //       // console.log('join reponse', response)
  //       if (response.data) {
  //         throw new Error('Username is already taken')
  //       }
  //       return auth.doCreateUserWithEmailAndPassword(email, passwordOne)
  //     })
  //     .then(authUser => {
  //       let token = firebase.auth.currentUser.getIdToken()
  //       return Promise.all([authUser, token])
  //     })
  //     .then(([authUser, authToken]) => {
  //       // console.log(authUser)
  //       return axios({
  //         url: '/api/users',
  //         method: 'post',
  //         data: {
  //           username: username,
  //           uid: authUser.user.uid,
  //           email: email,
  //           moneyBtnId: moneyBtnId
  //         },
  //         headers: {
  //           'Authorization': 'Bearer ' + authToken
  //         }
  //       })
  //     })
  //     // .then(response => console.log(response))
  //     .then(() => this.props.closeModal())
  //     .catch(error => {
  //       this.setState({ error })
  //     })
  // }

  render() {

    const { username, email, passwordOne, passwordTwo, error } = this.state
    const passwordMismatch = passwordOne && passwordTwo && (passwordOne !== passwordTwo)

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '' ||
      username === '' || email === '' || error 

    return (
      <ModalWrapper
        {...this.props}
        width={'w-2/5'}
        showOk={false}
      >
        <div className="text-light-gray font-header text-2xl text-center">Create Account</div>
        <hr className="border-brand-green border hrModals"></hr>

        <div className=''>
          <form onSubmit={this.handleSubmit}>
          {/* <form> */}
            <div className='text-sm font-body text-light-gray'>
              <label htmlFor='username'>Username</label>
              <div className='-ml-2 mr-2'>
                <input
                  value={username}
                  name='username'
                  onChange={this.handleChange}
                  type='text'
                  className='text-light-gray border bg-input-background ml-2 outline-none focus:border-brand-green focus:border-0 mt-2 w-full'
                  placeholder='Username'
                />
              </div>
            </div>
            <div className='text-sm font-body text-light-gray'>
              <label htmlFor='email'>Email</label>
              <div className='-ml-2 mr-2'>
                <input
                  value={email}
                  name='email'
                  onChange={this.handleChange}
                  type='email'
                  className='text-light-gray border bg-input-background ml-2 outline-none focus:border-brand-green focus:border-0 mt-2 w-full'
                  placeholder='your@email.com'
                />
              </div>
            </div>
            <div className='text-sm font-body text-light-gray'>
              <label htmlFor='passwordOne'>Password</label>
              <div className='-ml-2 mr-2'>
                <input
                  value={passwordOne}
                  name='passwordOne'
                  onChange={this.handleChange}
                  type='password'
                  className='text-light-gray border bg-input-background ml-2 outline-none focus:border-brand-green focus:border-0 mt-2 w-full'
                  placeholder='Password'
                />
              </div>
            </div>
            <div className='text-sm font-body text-light-gray'>
              <label htmlFor='passwordTwo'>Confirm Password</label>
              <div className='-ml-2 mr-2'>
                <input
                  value={passwordTwo}
                  name='passwordTwo'
                  onChange={this.handleChange}
                  type='password'
                  className='text-light-gray border bg-input-background ml-2 outline-none focus:border-brand-green focus:border-0 mt-2 w-full'
                  placeholder='Confirm Password'
                />
                <div className='ml-2'>
                  {passwordMismatch && <p className='text-xs text-red'>Passwords do not match</p>}
                  {error ? <p className='text-xs text-red'>Error: {error.message}</p> : null}
                </div>
              </div>
            </div>
            <B disabled={isInvalid} btnType={'secondary'}>Sign Up</B>
          </form>
        </div>
      </ModalWrapper >
    )
  }
}
export default JoinModal;