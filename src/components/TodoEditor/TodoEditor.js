import React, { Component} from 'react';
// import './TodoEditor.scss';

class TodoEditor extends Component {
state = {
    message: '',
}
// toggleCompleted = todoId =>
// {
//     this.setState(({ todos }) => ({
//         todos: todos.map(todo =>
//             todo.id === todoId ? {...todo, completed: !todo.completed} : todo,
//             )
//     })

//     )
// }
handleChage = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.message);
    this.setState({ message: ''})
}
 render() {
     return (
         <form  onSubmit={this.handleSubmit}>
<textarea 
// className='TodoEditor__textarea'
value={this.state.message}
onChange={this.handleChage}
></textarea>
<button type='submit'> Safe </button>

         </form>
     )
 }




}
export default TodoEditor;