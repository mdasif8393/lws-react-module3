import { useState } from "react";
import { useTasks, useTasksDispatch } from "../contexts/TasksContext";
import { getNextId } from "../utlis/getNextId";

export default function AddTask() {
  const dispatch = useTasksDispatch();
  const tasks = useTasks();
  const [text, setText] = useState("");

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input placeholder="Add task" value={text} onChange={handleChangeText} />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            text,
            id: getNextId(tasks),
          });
        }}
      >
        Add
      </button>
    </>
  );
}
