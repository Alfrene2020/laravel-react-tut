import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Todos extends Component {
    
    constructor()
    {
        super();
        this.state = 
        {
            todos: []
        }
    }

    componentWillMount()
    {
        axios.get('/api/todolist').then(response => {
            this.setState({
                todos: response.data
            });
        }).catch(errors => {
            console.log(errors);
        })
    }

    markComplete(e) 
  {
        console.log(e.target.value);
        e.preventDefault();

        axios.post(`/api/edit/${e.target.value}`).then(response => {
            alert("Updated Successfully");
        }).then(error => {
            console.log(error);
        });
  };
    
    render() {
        return (
           <div className = "text-center">
               {this.state.todos.map((todo, index) => <p key={index}>
                   <input type="checkbox" value={todo.TL_id} onChange = {this.markComplete}/>
                   {todo.Todos}
                   </p>)}
           </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Todos />, document.getElementById('example'));
}
