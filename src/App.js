import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: "Vanessa", age: 24},
      {name: "Fernando", age: 25},
      {name: "Kelvin", age: 21}
    ]
  }

  switchNameHandler = () => {
      // console.log("was clicked");
      //DONT DO THIS TO SWTICH STATE: this.state.persons[0].name = "Vanessa Batista";
      this.setState({persons: [
        {name: "Vanessa Batista", age: 24},
        {name: "Fernando Medina", age: 25},
        {name: "Kelvin Batista", age: 21}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1> Hi, This is my React app </h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age ={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age= {this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age= {this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
