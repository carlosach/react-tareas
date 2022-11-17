import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { MdOutlineAddCircle } from "react-icons/md";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  function handleSubmit(event) {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      description,
    };
    createTask(newTask);
    setTitle("");
    event.preventDefault();
  }

  return (
    <div className="max-w-md mx-auto">
      <form
        className="bg-slate-800 p-7 mb-4 rounded-3xl"
        onSubmit={handleSubmit}
        action=""
      >
        <h1 className="text-2xl font-bold text-white mb-3 capitalize">
          Crea tu tarea
        </h1>
        <input
          className="bg-slate-300 p-3 w-full mb-4 rounded-2xl"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Escribe tu tarea:"
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2 rounded-2xl"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Escribe una descripción:"
        ></textarea>
        <button className="bg-indigo-500 p-3 text-white rounded-xl hover:bg-indigo-400">
          <MdOutlineAddCircle />
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
