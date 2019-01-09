import React, { Component } from "react"

class TodoApp extends Component {
  constructor() {
    super()

    this.state = {
      input: "",
      todos: [
        {
          id: 0,
          text: "Eat lunch"
        },
        {
          id: 1,
          text: "Coding for fun"
        }
      ]
    }
  }

  handleTodoInput = event => {
    this.setState({ input: event.target.value })
  }

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <form>
          <input
            type="text"
            placeholder="What do you want to do?"
            onChange={this.handleTodoInput}
          />
          <input type="submit" value="Add Todo" />
        </form>
        <ul>
          {this.state.todos.map(todo => {
            return <li key={todo.id}>{todo.text}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default TodoApp
