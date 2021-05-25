import "./App.css";

class temp
{
   state = {
    color: ""
  };
  
   handleSubmit = (event) => {
    event.preventDefault();
    console.log("handle Submit");
    console.log(this.state);
    document.body.style.backgroundColor = event.target.value;
    this.setState({
      color: ""
    });
  };
  
   handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
}

function App() {
  return (
    <div>
      <form onSubmit={temp.handleSubmit}>
      <label for="color">Color: </label
    ><input type="text" name="color" size="20" id="color"/>
    <button type="submit" onChange={temp.handleChange}>Submit</button></form>
    </div>
  );
}

export default App;
