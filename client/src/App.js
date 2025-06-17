import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App" style={{ padding: 20, maxWidth: 400, margin: 'auto' }}>
      <h1>Task Manager 📝</h1>

      <div style={{ display: 'flex', gap: 10 }}>
        <input
          type="text"
          value={newTask}
          placeholder="Enter a new task"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <button
        onClick={clearAllTasks}
        style={{
          marginTop: 10,
          backgroundColor: '#ff4d4d',
          color: 'white',
          padding: '8px 12px',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer'
        }}
      >
        Clear All
      </button>
      
      <ul style={{ listStyle: 'none', padding: 0, marginTop: 20 }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 8,
              textDecoration: task.completed ? 'line-through' : 'none',
            }}
          >
            <span onClick={() => toggleComplete(index)} style={{ cursor: 'pointer' }}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(index)} style={{ marginLeft: 10 }}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;



// import React, { useState } from 'react';

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');

//   const addTask = () => {
//     if (newTask.trim() !== '') {
//       setTasks([...tasks, newTask]);
//       setNewTask('');
//     }
//   };

//   return (
//     <div className="App" style={{ padding: 20 }}>
//       <h1>Task Manager</h1>
//       <input
//         type="text"
//         value={newTask}
//         placeholder="Enter a task"
//         onChange={(e) => setNewTask(e.target.value)}
//       />
//       <button onClick={addTask}>Add</button>

//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>{task}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <h1>Task Manager</h1>
//     </div>
//   );
// }

// export default App;
