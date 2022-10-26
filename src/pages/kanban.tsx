import { useState } from "react";
import initialData from "../data/initial-data";
import Column from "../components/kanban/Column";

export default function Kanban() {
  const [data, setData] = useState(initialData);
  return (
    <div className="ml-5 mr-5 flex min-w-fit">
      {data.columnOrder.map((columnId) => {
        const column = data.columns[columnId];
        const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);
        console.log(tasks);
        return <Column key={column.id} column={column} tasks={tasks}></Column>;
      })}
    </div>
  );
}
