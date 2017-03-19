import React from 'react';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import LoginForm from 'grommet/components/LoginForm';
import Header from '../../containers/headerContainer';

const style = { minWidth: '600px', minHeight: '200' };

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: false,
      loggedIn: this.props.isLoggedIn
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(user) {
    Axios.post('/api/users/signin', {
      username: user.username,
      password: user.password
    }).then((resp) => {
      if (resp.status === 200) {
        Cookies.set('com.CivicsPortal', resp.data.token, { expires: 7 });
      } else {
        console.log('did not receive "200" status');
      }
    })
      .then(() => {
        this.setState({ valid: true });
      })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <Header />
          <div style={{ height: '100%', width: '100%', paddingLeft: '33%', paddingRight: '33%' , paddingTop: '80px'}}>
            <LoginForm
              onSubmit={(user) => {
                console.log('username', user.username);
                this.handleSubmit(user);
              }}
              title="Civics Portal"
              secondaryText="let's make local politics sexy."
            />
            {
               this.state.valid || this.state.loggedIn === true ? <Redirect to={{ pathname: '/auth' }} /> : (null)
            }
          </div>
      </div>
    );
  }

}


function mapStateToProps(state) {
  console.log('console.log state.loggedIn', state.LoggedIn);
  return {
    isLoggedIn: state.LoggedIn.loggedIn
  };
}

export default connect(mapStateToProps)(Login);
