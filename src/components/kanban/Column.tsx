import TaskList from "./TaskList";
import Task from "./Task";

export default function Column({ column, tasks }) {
  return (
    <div className=" m-3 h-fit w-96 flex-col justify-center rounded bg-white p-3 text-gray-700 duration-200 ease-in-out hover:bg-gray-100 dark:bg-gray-600 dark:text-gray-200">
      <div className="flex justify-center p-1 text-xl">{column.title}</div>
      <TaskList tasks={tasks}></TaskList>
    </div>
  );
}
