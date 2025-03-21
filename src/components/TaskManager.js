// components/TaskManager.js
import { useState } from "react";

export default function TaskManager() {
  const [task, setTask] = useState("");
  const [response, setResponse] = useState(null);
  const [useAi, setUseAi] = useState(false);  // Flag to choose between manual or AI allocation

  // Predefined tasks to choose from
  const tasks = [
    { name: "Anchor", description: "Host the event" },
    { name: "Technical Person", description: "Handle technical issues" },
    { name: "Video Editing", description: "Edit event videos" },
    { name: "Event Operations", description: "Manage event logistics" },
  ];

  // Hardcoded task allocation based on expertise
  const allocateTaskManually = (taskDescription) => {
    let assignedTo = "";
    let reason = "";

    switch (taskDescription) {
      case "Host the event":
        assignedTo = "Frank";
        reason = "Frank has experience in Anchoring and Event Management.";
        break;
      case "Handle technical issues":
        assignedTo = "Bob";
        reason = "Bob is a Backend Developer and handles technical operations.";
        break;
      case "Edit event videos":
        assignedTo = "Eve";
        reason = "Eve specializes in Video Editing and Content Creation.";
        break;
      case "Manage event logistics":
        assignedTo = "Dave";
        reason = "Dave has expertise in Project Management and Event Operations.";
        break;
      default:
        assignedTo = "Alice";
        reason = "Alice can manage UI and Frontend tasks.";
        break;
    }

    return { assignedTo, reason };
  };

  // Handle task allocation logic
  const handleAllocateTask = async () => {
    if (!task) return alert("Please select or enter a task!");

    if (useAi) {
      // Faking the Hugging Face API logic with a POST request
      const res = await fetch("/api/allocate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task }),
      });
      const data = await res.json();
      setResponse(data);
    } else {
      // Hardcoded allocation logic
      const taskDescription = tasks.find((t) => t.name === task)?.description;
      const allocation = allocateTaskManually(taskDescription);
      setResponse(allocation);
    }
  };

  return (
    <div className="w-[300px] bg-black border-2 border-gray-500 rounded-lg p-4 shadow-lg">
      <h1 className="text-2xl font-bold mb-4"> Ai Task Manager</h1>

      {/* Task List */}
      <div className="text-black text-lg font-semibold mb-4">
        <h2 className="text-gray-300 text-lg font-semibold mb-4">Available Tasks</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.name} className="mb-2">
              <button
                onClick={() => {
                  setTask(task.name);
                  setUseAi(false); // Use manual allocation
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Allocate {task.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Input for AI allocation */}
      <div className="mb-4">
        <label htmlFor="taskInput" className="block mb-2">
          Or enter a custom task description:
        </label>
        <input
          id="taskInput"
          type="text"
          placeholder="Enter task description"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border p-2 w-80 mb-4"
        />
      </div>

      {/* Toggle between Manual and AI allocation */}
      <div className="mb-4">
        <label htmlFor="aiToggle" className="mr-2">Use AI for Task Allocation</label>
        <input
          id="aiToggle"
          type="checkbox"
          checked={useAi}
          onChange={() => setUseAi(!useAi)}
        />
      </div>

      {/* Allocate Task Button */}
      <button
        onClick={handleAllocateTask}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Allocate Task
      </button>

      {/* Display Allocation Result */}
      {response && (
        <div className="mt-4 p-4 border rounded bg-white shadow">
          <p><strong>Assigned To:</strong> {response.assignedTo}</p>
          <p><strong>Reason:</strong> {response.reason}</p>
        </div>
      )}
    </div>
  );
}
