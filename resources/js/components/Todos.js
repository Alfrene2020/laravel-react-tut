import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Todos extends Component {
    
    constructor()
    {
        super();
        this.state = {
            todos: []
        }
        this.deleteTask = this.deleteTask.bind(this);
        this.markComplete = this.markComplete.bind(this);
    }
    componentDidMount()
    {
        this._isMounted = true;
        this.fetchData()
        
    }
    componentWillUnmount()
    {
        this._isMounted = false;
    }

    markComplete(e) 
    {
        console.log(e.target.value);

        var checkBox = document.getElementById(`${e.target.value}`);
        if(checkBox.checked == true)
        {
            axios.post(`/api/done/${e.target.value}`).then(function(response){
                console.log(response)
             }).then(() => {
                 this.fetchData()
             })
        } else{
            axios.post(`/api/notdone/${e.target.value}`).then(function(response){
                console.log(response)
             }).then(() => {
                 this.fetchData()
             })
        }
    }

    deleteTask(e)
    {
        console.log(e.target.value)
        e.preventDefault()
        axios.post(`/api/delete/${e.target.value}`).then(response => {
            // alert("deleted Successfully")
        }).then(error => {
            console.log(error);
        })
        
        this.fetchData()
    }

    fetchData()
    {
        axios.get('/api/todolist').then(response => {
            if(this._isMounted){
                const todos = response.data; 
                this.setState({
                    todos
                });
            }
        }).catch(errors => {
            console.log(errors);
        })
    }
    
    render() {
        return (
            <div className="container">
                <table className="mt-10 w-10/12 container table-auto">
                    <thead>
                        <tr>
                        <th className="font-medium text-2xl px-4 py-2">Checklist</th>
                        <th className="font-medium text-2xl px-4 py-2">Task's</th>
                        <th className="font-medium text-2xl px-4 py-2">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {this.state.todos.map((todo, index) =>
                        <tr key={index}>
                            <td className="border px-4 py-2"><input type="checkbox" id={todo.TL_id} value={todo.TL_id} onChange = {this.markComplete}/></td>
                            <td className="border px-4 py-2" style= {{ textDecoration: todo.completed == 1 ? "line-through" : "none" }}>
                                {todo.todos}
                            </td>
                            <td className="border px-4 py-2">
                                    <button value={todo.TL_id} onClick={this.deleteTask} type="submit" className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full">
                                        Delete
                                    </button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Todos />, document.getElementById('example'));
}
