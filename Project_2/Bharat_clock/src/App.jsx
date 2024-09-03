import React from "react";
import Clock_Title from "./Componrnts/Clock_Title.jsx";
import Clock_line from "./Componrnts/Clock_line.jsx";
import Clock_time from "./Componrnts/Clock_time.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <center>
      <Clock_Title></Clock_Title>
      <Clock_line></Clock_line>
      <Clock_time></Clock_time>
    </center>
  );
}

export default App;