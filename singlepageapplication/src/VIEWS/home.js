import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class home extends Component {

  state = {
    email: "",
    pwd: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handle Submit");
    console.log(this.state);
    this.setState({
      email: "",
      pwd: "",
    });

    this.props.history.push("/home");
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h2 className="mt-3 text-center">Login</h2>
        <form className="px-4 py-3" onSubmit={this.handleSubmit}>
          <div className="col-md-6">
            <label for="loginEmail" className="form-label">
              Email address
            </label>
            <input
              id="loginEmail"
              placeholder="email@example.com"
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
            />
            <div className="invalid-feedback">invalid email id</div>
          </div>
          <div className="col-md-6">
            <label for="loginPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="loginPassword"
              placeholder="Password"
              value={this.state.pwd}
              onChange={this.handleChange}
              name="pwd"
            />
            <div className="invalid-feedback">invalid password</div>
          </div>
          <Link type="submit" className="btn btn-primary mt-3" to="/message">
            Sign in
          </Link>
        </form>
        <div className="dropdown-divider"></div>
        <Link className="dropdown-item" to="/register">
          New around here? Sign up
        </Link>
      </div>
    );
  }
}
