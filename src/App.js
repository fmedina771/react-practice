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

  switchNameHandler = (newName) => {
      // console.log("was clicked");
      //DONT DO THIS TO SWTICH STATE: this.state.persons[0].name = "Vanessa Batista";
      this.setState({persons: [
        {name: newName, age: 24},
        {name: "Fernando Medina", age: 25},
        {name: "Kelvin Batista", age: 21}
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
      {name: 'Monkey', age:12},
      {name: event.target.value, age:13},
      {name: 'Dog', age:10}
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1> Hi, This is my React app </h1>
        <button onClick={() => this.switchNameHandler('Ana Medina!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age ={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age= {this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Sasha')}
          changed={this.nameChangedHandler}>My Hobbies: Coding</Person>
        <Person 
          name={this.state.persons[2].name} 
          age= {this.state.persons[2].age}/>
      </div>
    );
  };
};

export default App;
