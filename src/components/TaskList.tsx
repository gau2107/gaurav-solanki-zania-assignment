import { DataList } from "../App";

interface Props {
  data: DataList;
  doneCallback: any;
  deleteCallback: any;
}

export default function TaskList({
  data,
  doneCallback,
  deleteCallback,
}: Props) {
  return (
    <div className={data.status === 'pending' ? `desc pending` : `desc done`}>
      <h1>{data.title}</h1>
      <div>
        <p>{data.description}</p>
        <span>
          <button onClick={() => doneCallback(data.id)}>Done</button>
          <button onClick={() => deleteCallback(data.id)}>Delete</button>
        </span>
      </div>
    </div>
  );
}
