import React, { Component} from 'react';
// import './TodoEditor.scss';

class TodoEditor extends Component {
state = {
    message: '',
}
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
onChage={this.handleChage}
></textarea>
<button type='submit'> Safe </button>

         </form>
     )
 }




}
export default TodoEditor;