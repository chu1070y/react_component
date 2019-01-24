import React, {Component} from 'react'


class Refinner extends Component{

    state = {
        title:'AAAAAAAAAAAAAAA'
    }

    render() {
        return (
            <div>
                <h3>안쪽 컴포넌드</h3>
                <div>{this.state.title}</div>
            </div>
        )
    }
}

export default Refinner