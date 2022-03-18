import './App.css'
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      message: ""
    }
  }

  componentDidMount = () => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => this.setState(data))
  }

  render() {
    return (
      <div>{this.state.message}</div>
    )
  }
}

export default App