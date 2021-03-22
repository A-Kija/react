import { Component } from 'react';

import superMain, { letters, digits } from '../shared/ul';

import {normalStyle} from '../shared/styles';

class ClasicForm extends Component {

    constructor(){
      super();
      this.state = {
        color: 'white',
        textInput: '',
        textareaInput: '',
        selectInput: 'batai'
      }
      console.log('CONSTRUCT <--- ClasicBox')
    }
  
    textInputChange = (event) => {
        console.log(event.target.value)
        this.setState({textInput: event.target.value})
    }

    textareaInputChange = (event) => {
        console.log(event.target.value)
        this.setState({textareaInput: event.target.value})
    }

    selectInputChange = (event) => {
        console.log(event.target.value)
        this.setState({selectInput: event.target.value})
    }
  
    submitForm = (event) => {
        event.preventDefault();
        console.log("SUBMIT")
    }
  
  
    render() {
      return(
        <div className="box big" style={{borderColor:this.state.color}}>

                <input type="text" 
                value={this.state.textInput} 
                readOnly/>

                <input type="text" 
                value={this.state.textInput} 
                onChange={this.textInputChange} />

                <textarea 
                value={this.state.textareaInput} 
                onChange={this.textareaInputChange}/>

                <select value={this.state.selectInput} 
                onChange={this.selectInputChange}>
                <option value="5">Penki</option>
                <option value="batai">Batai</option>
                <option value="A">A</option>
                <option value="***">***</option>
                </select>

                <input type="file" />

                <button className="myButton" type="button" onClick={this.submitForm}>DO STUFF</button>
  
        </div>
      )
    }
  }

  export default ClasicForm;