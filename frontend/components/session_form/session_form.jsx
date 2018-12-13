import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemoLogin(e) {
    e.preventDefault();

    this.props.processForm({
      email:"demo@user.com",
      password: "password"
    })
  }

  componentDidMount(){
    this.props.clearErrors()
  }


  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }



  render() {

    const firstName = (this.props.formType === "Login" ? null :
    <label>
      <input type="text"
        value={this.state.first_name}
        onChange={this.update('first_name')}
        className="login-input"
        placeholder="First Name"
      />
    </label>);

    const lastName = (this.props.formType === "Login" ? null :
      <label>
        <input type="text"
          value={this.state.last_name}
          onChange={this.update('last_name')}
          className="login-input"
          placeholder="Last Name"
        />
      </label>);

      const demoLogin = (this.props.formType === "Signup" ? null :
      <input className="session-submit" onClick={this.handleDemoLogin} type="submit" value="Demo Login" />
      )
      return (
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} >
            <p className="signup-logo">e</p>
            <p className="signup-text">Let's get started</p>
            <br/>
              <p className="prompt">Please {this.props.formType.toLowerCase()}&nbsp;or&nbsp;{this.props.navLink} </p>
            {this.renderErrors()}
            <div className="login-form">
              <br/>

              <label>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                  placeholder="Email"
                />
              </label>
              <br/>

              <label>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  placeholder="Password"
                />
              </label>
              {firstName}
              {lastName}
              <br/>
              <input className="session-submit" type="submit" value={this.props.formType} />
              {demoLogin}
            </div>
          </form>
        </div>

      )

  }
}

export default SessionForm;
