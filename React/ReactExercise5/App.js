import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {description: '', date: '', todos: []}
  }

  inputChanged = (event) => {
    this.setState(
      {[event.target.name]: event.target.value}
    );
  }

  addTodo = (event) => {
    event.preventDefault();
    const newTodo = {description: this.state.description, date: this.state.date}
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Simple Todolist</h1>
        </header>
        <div className="container">
          <div className="form">
            <form onSubmit={this.addTodo}>
              Description:
              <input type="text" name="description" onChange={this.inputChanged} value={this.state.description}/>
              Date:
              <input type="text" name="date" onChange={this.inputChanged} value={this.state.date}/>
              <input type="submit" value="Add"/>
            </form>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((item, index) =>
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.description}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
