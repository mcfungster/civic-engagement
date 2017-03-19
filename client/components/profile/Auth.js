import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProfileEdit from './ProfileEdit';
import { setLoggedIn } from '../../actions/loggingActions';

function mapStateToProps(state) {
  return {
    LoggedIn: state.LoggedIn.userData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setLoggedIn }, dispatch);
}

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promise: false,
      info: 'empty info state'
    };
    this.setLoggedState = this.setLoggedState.bind(this);
  }

  componentWillMount() {
    axios.get('/api/users/checkAuth')
      .then((res) => {
        console.log('req in will mounTT', res, 'res.status', res.status);;
        if (res.status !== 401) {
          this.setState({ promise: true, info: res.data });
        } else {
          console.log('7373res.status not equal to number 200; look at type of res status');
        }
      })
      .catch((err) => { console.log(err); });
  }

  setLoggedState(info) {
    this.props.setLoggedIn(info);
  }
  render() {
    console.log('rendering, this.state.promise', this.state.promise);
    console.log('this.state.info from auth', this.state.info);
    return (
      <div>
        {
           this.state.promise ? (this.setLoggedState(this.state.info), <ProfileEdit />) : null
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
