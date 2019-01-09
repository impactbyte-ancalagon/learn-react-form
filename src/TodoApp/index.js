import React, { Component } from "react"

class TodoApp extends Component {
  constructor() {
    super()

    this.state = {
      input: "",
      todos: [
        {
          id: 0,
          text: "Sample todo"
        }
      ]
    }
  }

  handleTodoInput = event => {
    this.setState({ input: event.target.value })
  }

  handleTodoSubmit = event => {
    event.preventDefault()

    const newTodo = {
      id: this.state.todos.length,
      text: this.state.input
    }
    const newTodos = this.state.todos.concat(newTodo)

    this.setState({
      input: "",
      todos: newTodos
    })
  }

  removeTodo = indexToRemove => {
    const newTodos = this.state.todos.filter((todo, index) => {
      return index !== indexToRemove
    })

    this.setState({
      todos: newTodos
    })
  }

  render() {
    const todoList = this.state.todos.map((todo, index) => {
      return (
        <li key={index}>
          {todo.id}: {todo.text}{" "}
          <input
            type="button"
            value="Remove"
            onClick={() => this.removeTodo(index)}
          />
        </li>
      )
    })

    return (
      <div>
        <h1>{this.props.title}</h1>
        <form onSubmit={this.handleTodoSubmit}>
          <input
            type="text"
            placeholder="What do you want to do?"
            onChange={this.handleTodoInput}
            value={this.state.input}
          />
          <input type="submit" value="Add Todo" />
        </form>
        <ul>{todoList}</ul>
      </div>
    )
  }
}

export default TodoApp
