import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    console.log(event.target.value);
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    console.log(event.target.value);
    this.setState({ password: event.target.value });
  }
  handleSubmit(event) {
    console.log('Email and pword submitted ' + this.state.email + this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <h2 >Please login</h2>
          <h3>E-mail</h3>
          <input type="text" name="username" placeholder="Email Address" onChange={this.handleEmailChange} />
          <h3>Password</h3>
          <input type="password" name="password" placeholder="Password" onChange={this.handlePasswordChange} />
          <input type="submit" value="Login"/>
        </form>
      </div>);
  }
}

export default Login;
