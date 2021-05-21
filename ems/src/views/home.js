import { Link, Route, Switch } from "react-router-dom";
import login from "./login";
import details from "./details";

export const page = (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand">
          <strong>Employee management system</strong>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/login">
              Create account
            </Link>
            <Link className="nav-link" to="/details">
              Show accounts
            </Link>
          </div>
        </div>
      </div>
    </nav>
    <Switch>
      <Route path="/login" component={login} />
      <Route path="/details" component={details} />
    </Switch>
  </>
);
