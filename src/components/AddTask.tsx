import { useState } from "react";

export default function AddTask({handleSaveCallback}: any) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  function handleSave() {
    if(title && description && category) {
      handleSaveCallback(title, description, category)
    } else {
      alert('please add details')
    }
  }
  return (
    <div>
      <h1>Add new task</h1>

      <div>
        <label>Title</label>
        <input
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        ></input>
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        ></textarea>
      </div>
      <div>
        <label>Category</label>
        <input
          value={category}
          onChange={(ev) => setCategory(ev.target.value)}
        ></input>
      </div>

      <button onClick={() => handleSave()}>Save</button>
    </div>
  );
}
