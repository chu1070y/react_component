import React, { Component } from 'react';
// import Counter from './comp1/Counter'
// import SampleList from './comp1/SampleList'
// import RefOuter from './comp2/RefOuter'

import TodoComponent from './comp3/TodoComponent'

class App extends Component {
  render() {
    return (

        <div className="App">
            <TodoComponent/>
        </div>

/*      <div className="App">
          <RefOuter />

          <SampleList></SampleList>
          <Counter amount={1}></Counter>
          <Counter amount={10}></Counter>
          <Counter amount={100}></Counter>
          <Counter amount={1000}></Counter>
      </div>*/
    );
  }
}

export default App;
