import React, { Component } from "react";

export default class login extends Component {
  componentWillUnmount() {}
  render() {
    return (
      <div className="container card mt-5">
        <form className="card-body" style={{width:"600px",margin:"auto"}}>
        <div className="form-group">
            <label for="InputUserName">User name</label>
            <input
              type="text"
              className="form-control"
              id="InputUserName"
            />
          </div>
          <div className="form-group">
            <label for="InputEmail">Email address</label>
            <input
              type="email"
              className="form-control"
              id="InputEmail"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label for="InputPhone">Phone number</label>
            <input
              type="text"
              className="form-control"
              id="InputPhone"
            />
          </div>
          <div className="form-group">
            <label for="InputScreenName">Screen name</label>
            <input
              type="text"
              className="form-control"
              id="InputScreenName"
            />
          </div>
          <div className="form-group">
            <label for="InputPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="InputPassword"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
