import React, { Component} from 'react';
import './TodoEditor.scss';

class TodoEditor extends Component {
state = {
    message: '',
}
handleChage = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.message);
    this.serState({ message: ''})
}
 render() {
     return (
         <form className="TodoEditor" onSubmit={this.handleSubmit}>
<textarea 
className='TodoEditor__textarea'
value={this.state.message}
onChage={this.handleChage}
></textarea>
<button type='submit' className='TodoEditor__button'> Safe </button>

         </form>
     )
 }




}
export default TodoEditor;