import React from "react";
import axios from '../../utils/authAxios';

import AuthUserContext from "./AuthUserContext";
import { firebase } from "../../firebase";

const withAuthentication = (Component) =>
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
        dbUser: null,
        authToken: null,
        email: null
      };
    };

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          axios.get('/api/users/uid/' + authUser.uid)
            .then(result => this.setState({ authUser: authUser, dbUser: result.data }, console.log(result)))
            .catch(err => console.log('withAuthentication ERROR: ', err))
        } else {
          this.setState({ authUser: null, dbUser: null })
        }

        // if (authUser) {
        //   axios({
        //     method: "get",
        //     url: "/api/users/uid/" + authUser.uid
        //   })
        //     .then(dbUser => {
        //       console.log(dbUser)
        //       this.setState({
        //         authUser: authUser,
        //         dbUser: dbUser.data,
        //         email: dbUser.data.email
        //       });
        //     })
        //     .then(() => firebase.auth.currentUser.getIdToken())
        //     .then(authToken => this.setState({ authToken }))
        //     .catch(err => console.log(err));
        // } else {
        //   this.setState({
        //     authUser: null,
        //     dbUser: null
        //   });
        // };
      });
    };

    // requestWithAuth = (method, url, data) => {
    //   const { authToken } = this.state
    //   return axios({
    //     method: method,
    //     url: url,
    //     data: data,
    //     headers: {
    //       "Authorization": "Bearer " + authToken
    //     }
    //   });
    // };

    // getWithAuth = (url) => {
    //   return this.requestWithAuth("get", url, null);
    // };

    // postWithAuth = (url, data) => {
    //   return this.requestWithAuth("post", url, data);
    // };

    // serverVerifyToken() {
    //   firebase.auth.currentUser.getIdToken(/* force refresh */ true)
    //     .then(idToken => {
    //       axios({
    //         method: "post",
    //         url: "/api/secret",
    //         data: { idToken }
    //       }).then(result => {
    //         // console.log("result: ", result)
    //         return;
    //       });
    //     });
    // };

    render() {
      const { authUser, dbUser } = this.state;

      if (authUser) {
        authUser.dbUser = dbUser;
        // authUser.requestWithAuth = this.requestWithAuth;
      };

      return (
        <AuthUserContext.Provider value={authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    };
  };

export default withAuthentication;