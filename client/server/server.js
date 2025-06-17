const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/taskdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Task model
const TaskSchema = new mongoose.Schema({ text: String });
const Task = mongoose.model("Task", TaskSchema);

// Routes
app.get("/api/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post("/api/tasks", async (req, res) => {
  const task = await Task.create({ text: req.body.text });
  res.json(task);
});

// Start server
app.listen(5000, () => console.log("✅ Backend running on http://localhost:5000"));
