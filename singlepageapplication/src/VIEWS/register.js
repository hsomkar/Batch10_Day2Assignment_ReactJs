import React, { Component } from "react";

export default class login extends Component {

  state = {
    user: "",
    email: "",
    phoneno: "",
    nickname: "",
    pwd: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handle Submit");
    console.log(this.state);
    localStorage.setItem(this.state.user, JSON.stringify(this.state));
    this.setState({
      user: "",
      email: "",
      phoneno: "",
      scrname: "",
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
      <div className="container card mt-5">
         <form
          className="card-body"
          style={{ width: "600px", margin: "auto" }}
          onSubmit={this.handleSubmit}
        >
        <div className="form-group">
            <label htmlFor="exampleInputUser1">User name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputUser1"
              value={this.state.user}
              onChange={this.handleChange}
              name="user"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPhoneno1">Phone number</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPhoneno1"
              value={this.state.phoneno}
              onChange={this.handleChange}
              name="phoneno"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputNickname1">Screen name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputscrname"
              value={this.state.scrname}
              onChange={this.handleChange}
              name="scrname"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={this.state.pwd}
              onChange={this.handleChange}
              name="pwd"
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


//   render() {
//     return (
//       <div className="container card mt-5">
//         <form
//           className="card-body"
//           style={{ width: "600px", margin: "auto" }}
//           onsubmit=""
//    
//         >
//           <div className="form-group">
//             <label for="InputUserName">User name</label>
//             <input type="text" className="form-control" id="InputUserName" />
//           </div>
//           <div className="form-group">
//             <label for="InputEmail">Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               id="InputEmail"
//               aria-describedby="emailHelp"
//             />
//           </div>
//           <div className="form-group">
//             <label for="InputPhone">Phone number</label>
//             <input type="text" className="form-control" id="InputPhone" />
//           </div>
//           <div className="form-group">
//             <label for="InputScreenName">Screen name</label>
//             <input type="text" className="form-control" id="InputScreenName" />
//           </div>
//           <div className="form-group">
//             <label for="InputPassword">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="InputPassword"
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </form>
//       </div>
//     );
//   }
// }
