import React from 'react'
import './counter.css'

class Counter extends React.Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }

    Increment(){
        this.setState({
            count:this.state.count+1
        })
    }
    Decrement(){
        this.setState({
            count:this.state.count-1
        })
    }


  render() {
    return (
      <>
      <center>
        <h1>Counter Value: {this.state.count}</h1>
        <button onClick={this.Increment.bind(this)} class="Increase">Increment</button>
        <br/>
        <button onClick={this.Decrement.bind(this)} class="Decrease">Decrement</button>
        </center>
      </>
    )
  }
}

export default Counter;