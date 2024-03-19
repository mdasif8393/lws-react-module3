import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import { initialTasks } from "../data/tasks";
import taskReducer from "../reducers/taskReducer";

export const TaskContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export default function TasksContextProvider({ children }) {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);
  return (
    <TaskContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}
