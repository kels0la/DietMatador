import React from "react";
import API from '../../utils/API';
import { auth } from '../../firebase';
import AccountPage from '../Account/AccountPage'
import withAuthorization from '../../components/Session/withAuthorization';

class AccountContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: this.props.authUser.dbUser._id,
      bio: '',
      showBio: true
    }
  }

  componentDidMount() {
    console.log(this.props)
    let promises = [
      this.getPostsAndBio(this.state.id)
    ]

    Promise.all(promises)
      .then(results => {
        console.log(results);
        this.setState({
          bio: results[0].user.bio,
          userName: results[0].user.username
        });
      })
  };

  // TODO: Figure out a better API route so we don't have to grab posts here..
  getPostsAndBio = (id) => {
    return API.getPostsAndBio(id).then(results => results.data)
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handlePassReset = (event, email) => {
    // const { email } = this.state
    event.preventDefault()
    console.log('e-mail: ', email)
    auth
      .doPasswordReset(email)
      .then(() => {
        console.log('Email sent')
      })
      .catch(error => {
        console.log(error)
      })
  }


  handleFormSubmit = (event) => {
    console.log('handleFormSubmit this.state:', this.state);
    event.preventDefault();
    const data = {
      bio: this.state.bio
    };
    if (this.state.bio.length > 4) {

      API.updateProfile(this.state.id, data)
        .then(res => console.log(res.data), this.setState({ showBio: true }), API.getPostsAndBio(this.state.id))
        .catch(err => console.log(err))
    };
  };

  editBio = () => { this.setState(prevState => ({ showBio: !prevState.showBio })) }

  render() {
    return (
      <AccountPage
        {...this.state}
        // userId={this.props.authUser.dbUser._id}
        editBio={this.editBio}
        onChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
        handlePassReset={this.handlePassReset}
        email={this.email}
      />
    )
  }
}

const authCondition = (authUser) => !!authUser

export default withAuthorization(authCondition)(AccountContainer);