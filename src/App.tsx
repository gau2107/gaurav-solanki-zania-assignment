import React, { useEffect, useState } from "react";
import "./App.css";
import CardItem from "./components/CardItem";

interface listItem {
  type: string;
  title: string;
  position: number;
}
function App() {
  const [list, setList] = useState<listItem[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("https://example.com/data");
    const data = await response.json();
    setList([...data]);
  };

  return (
    <div className="app">
      <div className="grid-container">
        {list.map((data) => {
          return <CardItem heading={data.title} />;
        })}
      </div>
    </div>
  );
}

export default App;
