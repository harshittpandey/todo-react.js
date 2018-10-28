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
            <div>
            	
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
            <form onSubmit={this.create.bind(this)}>
                <label>New TODO:</label> <input type="text" ref="newTodoText"/> <button type="submit">+</button>
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
                <li>
                    <del>{todo.text}</del> <a href="" onClick={this.done.bind(this)}>✓</a> <a href="" onClick={this.delete.bind(this)}>x</a>

                </li>
                
            );
        } else {
            return (
                <li>
                    {todo.text} <a href="" onClick={this.done.bind(this)}>✓</a> <a href="" onClick={this.delete.bind(this)}>x</a>
                </li>

            );
        }
    }
}

