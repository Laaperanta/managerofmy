<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Todo List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 500px;
      margin: 0 auto;
      padding: 20px;
    }
    h1 {
      text-align: center;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      margin-bottom: 10px;
    }
    button {
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>Todo List</h1>
  <input type="text" id="newTodo" placeholder="Enter your task">
  <button onclick="addTodo()">Add Task</button>
  <ul id="todoList"></ul>

  <script src="script.js"></script>
</body>
</html>
