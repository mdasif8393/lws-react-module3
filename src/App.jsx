import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TasksContextProvider from "./contexts/TasksContext";

export default function App() {
  return (
    <TasksContextProvider>
      <h1>Prague itinerary</h1>
      <AddTask />
      <TaskList />
    </TasksContextProvider>
  );
}
