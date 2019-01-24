import React, {Component} from 'react'

class TodoList extends Component{

    removeHandler = (e) => {
        console.log('removeHandler')
        const target = e.target.getAttribute("data-idx")
        console.log(target)
        this.props.remove(target)
    }

    render() {
        const todoLi = this.props.arr.map((item,index) =>
            <li key={index}>{item}<button data-idx={index} onClick={this.removeHandler}>X</button></li>)

        return (
            <div>
                {todoLi}
            </div>
        )
    }
}

export default TodoList