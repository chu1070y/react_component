import React, {Component} from 'react'


class Counter extends Component{

    constructor(props){
        super(props)
        this.state = {
            count : 0,
            amount: props.amount
        }
    }

    //setState로 amount가 사라져야하지만 state가 홀드해줘서 사라지지 않는다.
    clickHandle = () => {
        console.log("click.........." + this.props.amount)
        this.setState({
            count: this.state.count + this.state.amount
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.count}</h3>
                <button onClick={this.clickHandle}>CLICK</button>
                <hr></hr>
            </div>
        )
    }
}

export default Counter