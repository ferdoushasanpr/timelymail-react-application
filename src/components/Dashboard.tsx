import type { CSSProperties, ChangeEvent, FormEvent } from "react";
import { useState } from "react";

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
      setTasks(tasks.map(t => t.id === editingId ? { ...newTask, id: editingId } : t));
      setEditingId(null);
    } else {
      setTasks([...tasks, { ...newTask, id: Date.now() }]);
    }
    setNewTask({ title: "", deadline: "" });
  };

  const deleteTask = (id: number) => setTasks(tasks.filter((t) => t.id !== id));

  const startEdit = (task: Task) => {
    setNewTask({ title: task.title, deadline: task.deadline });
    setEditingId(task.id);
  };

  // --- Styles (Matching your Login Theme) ---
  const layoutStyle: CSSProperties = {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#121212",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
  };

  const sidebarStyle: CSSProperties = {
    width: "240px",
    backgroundColor: "#1e1e1e",
    borderRight: "1px solid #333",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const mainContentStyle: CSSProperties = {
    flex: 1,
    padding: "40px",
    maxWidth: "800px",
    margin: "0 auto",
  };

  const cardStyle: CSSProperties = {
    backgroundColor: "#1e1e1e",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
    marginBottom: "30px",
  };

  const inputStyle: CSSProperties = {
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #333",
    backgroundColor: "#2c2c2c",
    color: "white",
    marginBottom: "10px",
    width: "100%",
  };

  const buttonStyle: CSSProperties = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const actionButtonStyle = (color: string): CSSProperties => ({
    background: "none",
    border: "none",
    color: color,
    cursor: "pointer",
    marginRight: "15px",
    fontSize: "0.85rem",
    textDecoration: "underline",
  });

  return (
    <div style={layoutStyle}>
      {/* Sidebar */}
      <aside style={sidebarStyle}>
        <h2 style={{ color: "#007bff", fontSize: "1.2rem" }}>TimelyMail</h2>
        <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ cursor: "pointer", color: "#bbb" }}>Dashboard</div>
          <div style={{ cursor: "pointer", color: "#bbb" }}>Settings</div>
          <div style={{ cursor: "pointer", color: "#ff4d4d", marginTop: "20px" }}>Logout</div>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={mainContentStyle}>
        <header style={{ marginBottom: "30px" }}>
          <h1>Task Overview</h1>
          <p style={{ color: "#bbb" }}>Manage your pending activities</p>
        </header>

        {/* Add Task Form */}
        <section style={cardStyle}>
          <h3 style={{ marginBottom: "15px" }}>{editingId ? "Edit Task" : "Add New Task"}</h3>
          <form onSubmit={addTask} style={{ display: "flex", flexDirection: "column" }}>
            <input
              style={inputStyle}
              name="title"
              placeholder="What needs to be done?"
              value={newTask.title}
              onChange={handleInputChange}
              required
            />
            <input
              style={inputStyle}
              name="deadline"
              type="date"
              value={newTask.deadline}
              onChange={handleInputChange}
              required
            />
            <button type="submit" style={buttonStyle}>
              {editingId ? "Update Task" : "Add Task"}
            </button>
          </form>
        </section>

        {/* Task List */}
        <section>
          <h3 style={{ marginBottom: "15px" }}>Pending Tasks</h3>
          {tasks.map((task) => (
            <div key={task.id} style={{ ...cardStyle, marginBottom: "15px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>{task.title}</div>
                <div style={{ fontSize: "0.85rem", color: "#bbb" }}>Due: {task.deadline}</div>
                <div style={{ marginTop: "10px" }}>
                  <button onClick={() => startEdit(task)} style={actionButtonStyle("#007bff")}>Edit</button>
                  <button onClick={() => deleteTask(task.id)} style={actionButtonStyle("#ff4d4d")}>Delete</button>
                </div>
              </div>
            </div>
          ))}
          {tasks.length === 0 && <p style={{ color: "#555" }}>No pending tasks. Relax!</p>}
        </section>
      </main>
    </div>
  );
}

export default Dashboard;