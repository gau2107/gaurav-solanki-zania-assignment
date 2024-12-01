import { listItem } from "./App";

export const sortByPosition = (data: listItem[]) => data.sort((a: listItem, b: listItem) => a.position - b.position);