import { useState } from "react";
import TaskList from "./TaskList";
import AddTask from "./components/AddTask";
import { initialTasks } from "./data/tasks";

export default function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask />
      <TaskList tasks={tasks} />
    </>
  );
}
