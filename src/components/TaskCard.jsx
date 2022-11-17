import React, { useContext } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-2xl">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-400 text-sm">{task.description}</p>
      <button
        className="bg-red-500 p-2 rounded-xl mt-2 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        <MdOutlineDelete />
      </button>
    </div>
  );
}

export default TaskCard;
