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

    deleteTask(e)
    {
        console.log(e.target.value);
        e.preventDefault();

        axios.post(`/api/delete/${e.target.value}`).then(response => {
            alert("Deleted Successfully");
        }).then(error => {
            console.log(error);
        });
    };
    
    render() {
        return (
            <div className="container">
                <table className="container table-auto">
                    <thead>
                        <tr>
                        <th className="px-4 py-2"></th>
                        <th className="px-4 py-2">Todo's</th>
                        <th className="px-4 py-2">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {this.state.todos.map((todo, index) =>
                        <tr key={index}>
                            <td className="border px-4 py-2"><input type="checkbox" value={todo.TL_id} onChange = {this.markComplete}/></td>
                            <td className="border px-4 py-2" style= {{ textDecoration: todo.Completed == 1 ? "line-through" : "none" }}>
                                {todo.Todos}
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
        //    <div className = "text-center">
        //        {this.state.todos.map((todo, index) => <p key={index}>
        //            <input type="checkbox" value={todo.TL_id} onChange = {this.markComplete}/>
        //            {todo.Todos}
        //            </p>)}
        //    </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Todos />, document.getElementById('example'));
}
