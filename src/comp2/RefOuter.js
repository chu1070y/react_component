import React, {Component} from 'react'
import Refinner from './Refinner'

class RefOuter extends Component{

    changeHandler = (e) => {
        console.log("outer change click...")

        this.inner.setState({
            title:"Outer call inner component"
        })
    }

    render() {
        return (
            <div>
                <h2>바깥쪽 부모 컴포넌트</h2>
                <button onClick={this.changeHandler}>Change</button>
                <Refinner ref={(ref) => this.inner = ref}></Refinner>
            </div>
        )
    }
}

export default RefOuter