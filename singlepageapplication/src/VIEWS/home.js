import { Link, Route, Switch } from "react-router-dom";
import register from "./register";
import message from "./message";

export const page = (
  <>
    <div>
      <h2 className="mt-3 text-center">Login</h2>
      <form
        className="px-4 py-3"
        onsubmit="handleSubmit = event => {
            event.preventDefault();
            alert('You have submitted the form.')
          }"
        action="/message"
      >
        <div className="col-md-6">
          <label for="loginEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="loginEmail"
            placeholder="email@example.com"
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
          />
          <div className="invalid-feedback">invalid password</div>
        </div>
        <Link type="submit" className="btn btn-primary mt-3" to='/message'>
          Sign in
        </Link>
      </form>
      <div className="dropdown-divider"></div>
      <Link className="dropdown-item" to="/register">
        New around here? Sign up
      </Link>
    </div>
    <Switch>
      <Route path="/register" component={register} />
      <Route path="/message" component={message} />
    </Switch>
  </>
);
