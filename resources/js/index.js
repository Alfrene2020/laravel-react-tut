import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Todos from "./components/Todos"
import Example from "./components/Example"
import Newtodo from "./components/Newtodo"

export default class Index extends Component {
    render() {
        return (
            <div className="container content-start">
                <Router>
                    <div className="text-center pt-5 pb-4 -m-px font-serif font-bold text-xl">
                        <Link className="pr-16 hover:text-blue-800" to="/">Home</Link>
                        <Link className="pr-16 hover:text-blue-800" to="/Todos">Todos</Link>
                        <Link className="pr-16 hover:text-blue-800" to="/NewTodos">Add</Link> 
                        <hr/>
                    </div>
                    <div>
                        <Route path="/Todos" exact component = {Todos}/>
                        <Route path="/NewTodos" exact component = {Newtodo}/>
                        <Route path="/"  exact component = {Example}/>
                    </div>
                </Router>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
