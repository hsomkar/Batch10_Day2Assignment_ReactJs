import { BrowserRouter } from "react-router-dom";
import { Link, Route, Switch } from "react-router-dom";
import register from "./VIEWS/register";
import message from "./VIEWS/message";
import home from "./VIEWS/home";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand">
            <strong>Single Page Application</strong>
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
                Login
              </Link>
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/login" component={home} />
        <Route path="/register" component={register} />
        <Route path="/message" component={message} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
