import React, { Component } from "react"

class TodoApp extends Component {
  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <form>
          <input type="text" placeholder="What do you want to do?" />
          <input type="submit" value="Add Todo" />
        </form>
        <ul>
          <li>Eat lunch</li>
          <li>Coding for fun</li>
        </ul>
      </div>
    )
  }
}

export default TodoApp
