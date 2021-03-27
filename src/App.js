import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import TodoEditor from './components/TodoEditor';
import initialTodos from './todos.json';



class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
     // contacts: [],
    // name: ''
  }
  addTodo = text => {
    const todo = {
      id: shortid.generate(), 
      text, 
      completed: false, 
    };
    this.setState(({todos}) => ({
      todos: [todo, ...todos], 
    })

    )
  };
  calculatedCompletedTodos= () => {
    const {todos} = this.state;
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  }
  render() {
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculatedCompletedTodos();

    return (
     <Container>
<div>
  <p>Total amount ofitems: {totalTodoCount}</p>
  <p>Total amount ofitems: {completedTodoCount}</p>
</div>
<TodoEditor onSubmit={this.addTodo} />


     </Container>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
