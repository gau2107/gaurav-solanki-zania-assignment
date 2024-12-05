import { useState } from "react";

interface Props {
  search: string,
  setSearchCallback: any
}

export default function SearchBar({search, setSearchCallback}: Props) {
  return (
    <input value={search} onChange={(ev) => setSearchCallback(ev.target.value)}></input>
  );
}
