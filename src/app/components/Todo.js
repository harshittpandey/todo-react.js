import React from "react";
import _ from "lodash";

export class Todo extends React.Component {
    constructor() {
        super();
        
        this.state = {
            todos: [
                
            ]
        };
    }
    
    createTask(text) {
        this.state.todos.push({
            text,
            done: false
        });
        
        this.setState({todos: this.state.todos});
    }
    
    toggleTask(todo) {
        let task = _.find(this.state.todos, todo);
        task.done = !task.done;
        this.setState({todos: this.state.todos});
    }

    removeTask(todo) {
        var arr= this.state.todos;
        var index= this.state.todos.indexOf(todo);
        this.state.todos.splice(index, 1);
        this.setState({todos: this.state.todos});
    }
    
    render() {
        return (
            <div className="w3-card-2 w3-padding-large w3-round-large todobox ">
            	
                <NewTodo createTask={this.createTask.bind(this)} />
                <TodoList todos={this.state.todos} toggle={this.toggleTask.bind(this)} remove={this.removeTask.bind(this)}  />
            
            </div>
        );
    }
}

class NewTodo extends React.Component {
    create(event) {
        event.preventDefault();
        let text = this.refs.newTodoText.value;
        if (text) {
            this.props.createTask(text);
            this.refs.newTodoText.value = '';
        }
    }
    
    render() {
        return (
            <form className="inputbox w3-center" onSubmit={this.create.bind(this)} >
                <input type="text" className="addtodo" placeholder="Add New Point" ref="newTodoText"/> <button type="submit" className="addbtn" >+</button>
            </form>

        );
    }
}

class TodoList extends React.Component {
    render() {
        let items = [];
        let todos = _.sortBy(this.props.todos, 'done');
        
        for (let index in todos) {
            items.push(
               <TodoApp todo={todos[index]} key={index} toggle={this.props.toggle} remove={this.props.remove}/>

            );
        }
        return (
            <ul>
                {items}
            </ul>
            
        );
    }
}

class TodoApp extends React.Component {
    done(event) {
        event.preventDefault();

        this.props.toggle(this.props.todo);
    }

    delete(event) {
        event.preventDefault();
        this.props.remove(this.props.todo);
    }

    render() {
        let todo = this.props.todo;
        if (todo.done) {
            return (
                <li className="w3-green w3-padding w3-round-large todo w3-large">
                    <del>{todo.text}</del> <a href="" className="greenbtn w3-text-white w3-xlarge" onClick={this.done.bind(this)}>✓</a> <a href="" className="w3-text-red w3-xlarge" onClick={this.delete.bind(this)}>x</a>

                </li>
                
            );
        } else {
            return (
                <li className="w3-white w3-padding w3-round-large todo w3-large">
                    {todo.text} <a href="" className="greenbtn w3-text-green w3-xlarge" onClick={this.done.bind(this)}>✓</a> <a href="" className="w3-text-red w3-xlarge" onClick={this.delete.bind(this)}>x</a>
                </li>

            );
        }
    }
}

