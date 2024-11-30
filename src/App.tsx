import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("https://example.com/data");
    const data = await response.json();
    console.log(data);
  };

  return <div className="App"></div>;
}

export default App;
