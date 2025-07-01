---
title: "Developing a Fullstack To-Do App with MERN"
date: "2025-01-05"
tags: ["MERN", "MongoDB", "Express", "React", "Node.js", "Fullstack"]
description: "A step-by-step guide on creating a MERN to-do list application with authentication."
---

## Project Goal

Create a full-featured to-do list app with login/logout, persistent tasks, and a clean UI.

## Technologies Used

- **MongoDB** for the database
- **Express** for the backend
- **React** for the frontend
- **Node.js** as the server environment
- **JWT** for user authentication

## Backend Route Example

```js
app.post("/api/tasks", authMiddleware, async (req, res) => {
  const task = new Task({ ...req.body, userId: req.user.id });
  await task.save();
  res.status(201).json(task);
});