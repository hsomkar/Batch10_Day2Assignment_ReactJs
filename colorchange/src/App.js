import "./App.css";
import Select from "react-select";
import { useState } from "react";

function App() {
  var colors = [
    {
      value: 1,
      label: "red",
    },
    {
      value: 2,
      label: "blue",
    },
    {
      value: 3,
      label: "orange",
    },
    {
      value: 4,
      label: "green",
    },
  ];

  var [setbgcolor,ddlvalue]=useState(colors.label)
  var handle=e=>{
    ddlvalue(e.label)
  }
  return (
    <div>
      <style>{'body {background-color:'+setbgcolor+'}'}</style>
      <Select options={colors}></Select>
      <center>
        <b>The background color is: {setbgcolor}</b>
      </center>
    </div>
  );
}

export default App;
