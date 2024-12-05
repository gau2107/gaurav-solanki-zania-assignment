import React, { useEffect, useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import SearchBar from "./components/SearchBar";

export interface DataList {
  id: number;
  category: string;
  title: string;
  status: string;
  description: string;
}

function App() {
  const [search, setSearch] = useState<string>("");
  const [list, setList] = useState<DataList[]>([
    {
      id: 1,
      category: "Shopping",
      title: "Shopping",
      status: "pending",
      description: "Get essentials from Trader Joe's",
    },
    {
      id: 2,
      category: "Shopping",
      title: "Shopping 2",
      status: "pending",
      description: "Get essentials from Trader Joe's",
    },
  ]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const response = fetch("https://example.com/data");
    // const list = response.json();
    setList([...list]);
  };

  const deleteCallback = (id: number) => {
    let tempList = [...list];
    const index = tempList.findIndex((obj) => obj.id === id);
    tempList.splice(index, 1);
    setList([...tempList]);
  };

  const doneCallback = (id: number) => {
    let tempList = [...list];
    const index = tempList.findIndex((obj) => obj.id === id);
    tempList[index].status = "done";
    setList([...tempList]);
  };

  const handleSaveCallback = (
    title: string,
    description: string,
    category: string
  ) => {
    setList([
      ...list,
      { title, description, category, status: "pending", id: list.length + 1 },
    ]);
  };

  const setSearchCallback = (value: string) => {
    setSearch(value);
    let tempList = [...list];
    tempList.filter((obj) => obj.title == "value" || obj.description == value);
    setList([...tempList]);
  };
  return (
    <div className="app">
      {/* <SearchBar /> */}
      {list.map((data: DataList) => {
        return (
          <div key={data.id}>
            <TaskList
              data={data}
              deleteCallback={deleteCallback}
              doneCallback={doneCallback}
            />
          </div>
        );
      })}

      <AddTask handleSaveCallback={handleSaveCallback} />
    </div>
  );
}

export default App;
