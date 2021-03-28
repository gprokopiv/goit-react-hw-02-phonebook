import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    tag: '',
  }
  handleChange = event => {

    const { name, value } = event.currentTarget;
    this.setState({      [name]: value
  
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  }
  reset = () => {
    this.setState( {
      name: '',
    tag: '',
    })
  }
  
  render() {
  
  
    return(
      
  <form onSubmit={this.handleSubmit}>
    <label>
      name <input type='text' name='name' value={this.state.name} onChange={this.handleChange}></input>
    </label>
    <label>
      surname <input type='text' name='tag' value={this.state.tag} onChange={this.handleChange}></input>
    </label>
    <button type='submit' >
      Send
    </button>
  </form>
  
  
  
  
    )
  }
  

}

export default Form;
// import shortid from 'shortid';

// class Form extends Component {
//   state = {
//     name: '',
//     tag: '',
//     experience: 'junior',
//     licence: false,
//   };

//   nameInputId = shortid.generate();
//   tagInputId = shortid.generate();

//   handleChange = e => {
//     const { name, value } = e.currentTarget;

//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state);

//     this.reset();
//   };

//   handleLicenceChange = e => {
//     console.log(e.currentTarget.checked);

//     this.setState({ licence: e.currentTarget.checked });
//   };

//   reset = () => {
//     this.setState({ name: '', tag: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label htmlFor={this.nameInputId}>
//           Имя
//           <input
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleChange}
//             id={this.nameInputId}
//           />
//         </label>
//         <br />
//         <label htmlFor={this.tagInputId}>
//           Прозвище
//           <input
//             type="text"
//             name="tag"
//             value={this.state.tag}
//             onChange={this.handleChange}
//             id={this.tagInputId}
//           />
//         </label>

//         <p>Ваш уровень:</p>
//         <label>
//           <input
//             type="radio"
//             name="experience"
//             value="junior"
//             onChange={this.handleChange}
//             checked={this.state.experience === 'junior'}
//           />
//           Junior
//         </label>

//         <label>
//           <input
//             type="radio"
//             name="experience"
//             value="middle"
//             onChange={this.handleChange}
//             checked={this.state.experience === 'middle'}
//           />
//           Middle
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="experience"
//             value="senior"
//             onChange={this.handleChange}
//             checked={this.state.experience === 'senior'}
//           />
//           Senior
//         </label>

//         <br />

//         <label>
//           <input
//             type="checkbox"
//             name="licence"
//             checked={this.state.licence}
//             onChange={this.handleLicenceChange}
//           />
//           Согласен с условием
//         </label>

//         <button type="submit" disabled={!this.state.licence}>
//           Отправить
//         </button>
//       </form>
//     );
//   }
// }

// export default Form;