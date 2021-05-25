import "./App.css";

let handle = (event) => {
  document.body.style.backgroundColor = document.getElementById("color").value;
};

function App() {
  return (
    <div>
      <label for="color">Color: </label>
      <input type="text" name="color" size="20" id="color" />
      <button type="button" onClick={handle}>
        Submit
      </button>
    </div>
  );
}

export default App;
