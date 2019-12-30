import React from 'react';
import './App.css';
import Input from './components/Input';
import Output from './components/Output';
class App extends React.Component {
  state = {
    "val" : ""
  }
  handleChange = (event ) =>{
    const value = event.target.value;
    this.setState({
      "val" : value
    })
  }
  render(){
    return (
      <div className="App" >
        <h2> Markdown App</h2>
        <div className="container" style={{display: "flex"}}>
          <Input handleChange={this.handleChange}></Input>
          <Output className="Output" res={this.state.val}></Output>
        </div>
      </div>
    );
  }
}

export default App;
