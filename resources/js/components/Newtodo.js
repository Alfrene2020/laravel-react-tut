import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Newtodo extends Component {

    constructor()
    {
        super();
        this.state = 
        {
            todo: ''
        }
    }
    
      handleChange(event){
        this.setState({ todo: event.target.value });
      }
    
      handleSubmit(event){
        event.preventDefault();

        axios.post('/api/todolist', this.state).then(response => {
            alert("Inserted Successfully");
        }).then(error => {
            console.log(error);
        });
        
        console.log(this.state);
      }

    render() {
        return (
            <div className="container">
               <form className="text-center" onSubmit ={this.handleSubmit.bind(this)}>
                   <div className="container">
                       <input
                            className = "bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                            type="text"
                            name="todo"
                            placeholder="Enter your new task/todo"
                            onChange={this.handleChange.bind(this)}
                            value={this.state.name}
                        />
                   </div>
                   <div className="w-1/12 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-5">
                       <button className="btn btn-blue" type="submit">Save</button>
                   </div>
               </form>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Newtodo />, document.getElementById('example'));
}
