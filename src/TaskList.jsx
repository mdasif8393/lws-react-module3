/* eslint-disable react/prop-types */
import Task from "./components/Task";

export default function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} />
      ))}
    </ul>
  );
}
