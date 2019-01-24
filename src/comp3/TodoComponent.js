import React, {Component} from 'react'
import TodoList from './TodoList'
import TodoInput from './TodoInput'

class TodoComponent extends Component{

    state ={
        todos:['AAA','BBB','CCC']
    }

    addTodo = (newTodo) => {
        console.log("add To do ...." + newTodo)
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    removeTodo = (idx) =>{
        console.log("TodoComponent removeTodo: " + idx)

        this.state.todos.splice(idx,1)
        console.log(this.state.todos)

        this.setState({
            todos: this.state.todos
        })
    }

    render() {
        return (
            <div>
                <TodoInput add={this.addTodo}/>
                <TodoList arr={this.state.todos} remove={this.removeTodo}/>
            </div>
        )
    }
}

export default TodoComponent