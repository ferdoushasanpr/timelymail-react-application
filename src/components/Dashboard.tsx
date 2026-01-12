import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import MainComponent from "./MainComponent";

interface Task {
  id: number;
  title: string;
  deadline: string;
}

function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Review project proposal", deadline: "2024-05-20" },
  ]);
  const [newTask, setNewTask] = useState({ title: "", deadline: "" });
  const [editingId, setEditingId] = useState<number | null>(null);

  // --- Handlers ---
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  const addTask = (e: FormEvent) => {
    e.preventDefault();
    if (!newTask.title || !newTask.deadline) return;

    if (editingId !== null) {
      setTasks(tasks.map(t =>
        t.id === editingId ? { ...newTask, id: editingId } : t
      ));
      setEditingId(null);
    } else {
      setTasks([...tasks, { ...newTask, id: Date.now() }]);
    }

    setNewTask({ title: "", deadline: "" });
  };

  const deleteTask = (id: number) =>
    setTasks(tasks.filter((t) => t.id !== id));

  const startEdit = (task: Task) => {
    setNewTask({ title: task.title, deadline: task.deadline });
    setEditingId(task.id);
  };

  return (
    <MainComponent><main className="flex-1 p-10 max-w-3xl mx-auto">
    <header className="mb-8">
      <h1 className="text-2xl font-bold">Task Overview</h1>
      <p className="text-gray-400">Manage your pending activities</p>
    </header>

    {/* Add / Edit Task */}
    <section className="bg-[#1e1e1e] p-5 rounded-lg shadow-lg mb-8">
      <h3 className="mb-4 text-lg font-semibold">
        {editingId ? "Edit Task" : "Add New Task"}
      </h3>

      <form onSubmit={addTask} className="flex flex-col gap-3">
        <input
          name="title"
          placeholder="What needs to be done?"
          value={newTask.title}
          onChange={handleInputChange}
          required
          className="w-full p-2 rounded bg-[#2c2c2c] border border-[#333] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          name="deadline"
          type="date"
          value={newTask.deadline}
          onChange={handleInputChange}
          required
          className="w-full p-2 rounded bg-[#2c2c2c] border border-[#333] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition"
        >
          {editingId ? "Update Task" : "Add Task"}
        </button>
      </form>
    </section>

    {/* Task List */}
    <section>
      <h3 className="mb-4 text-lg font-semibold">Pending Tasks</h3>

      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-[#1e1e1e] p-5 rounded-lg shadow-md mb-4 flex justify-between items-center"
        >
          <div>
            <div className="font-bold text-lg">{task.title}</div>
            <div className="text-sm text-gray-400">
              Due: {task.deadline}
            </div>

            <div className="mt-3 flex gap-4">
              <button
                onClick={() => startEdit(task)}
                className="text-blue-500 text-sm underline hover:text-blue-400"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-400 text-sm underline hover:text-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}

      {tasks.length === 0 && (
        <p className="text-gray-600">No pending tasks. Relax!</p>
      )}
    </section>
  </main></MainComponent>
  );
}

export default Dashboard;
