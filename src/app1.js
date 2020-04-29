import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import navbar from './Layout/navbar';

class App extends Component {

state={
  persons:[
    {name:'A',age:'10'},
    {name:'B',age:'20'},
    {name:'C',age:'30'}
  ]
}

switchNameHandler =()=> {
  //console.log('Button is Clicked!')
  //this.state.persons[0].name='React with Kunal!'
  this.setState({
    persons:[
      {name:'React with Kunal',age:'50'},
      {name:'React with Raj',age:'20'},
      {name:'React with John Cena',age:'43'}
    ]
  })
}

  render() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <button onClick={this.switchNameHandler}>Click Here!</button>
      <Person name={this.state.persons[0].name}
       age={this.state.persons[0].age} Cena={this.switchNameHandler}/>
      <Person name={this.state.persons[1].name}
       age={this.state.persons[1].age}/>
      <Person name={this.state.persons[2].name}
       age={this.state.persons[2].age}/>
    </div>
    
  );
  //return React.createElement('div',{className:'App'},(React.createElement('h1',null,'Will it work?')));
  
 }
}

export default App;