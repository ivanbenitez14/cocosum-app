import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
     super(props)
     this.state = {
        newTask: "",
     }
  }

  handleTaskChange = (event) => {
    this.setState({
       newTask: event.target.value,
    })
 }

  render() {
      return (
        <div className="container">
          <h1 className="title">
              Escribi el texto que se muestra abajo y mira cuanto tiempo te tomo hacerlo.
              <br></br>
              Al terminar de escribir presiona enter para comparar los textos y ver los posibles errores de tipeo.
          </h1>
          <input onChange={this.handleTaskChange} type="text" className="new-task"/>
          <h2 className="test-label">{this.state.newTask}</h2>
          <h3 className="texto">
          Lorem ipsum dolor sit amet consectetur adipiscing elit magnis volutpat, aptent fames tincidunt taciti convallis viverra pharetra senectus, venenatis tempor felis cum rutrum euismod luctus molestie.
          <br></br> 
          Gravida ridiculus aenean praesent elementum sociis morbi phasellus, blandit hendrerit sollicitudin varius quis convallis etiam, torquent natoque eleifend cras turpis placerat. 
          <br></br>
          Nam in interdum luctus cras posuere fusce bibendum sem, magnis et est rutrum metus leo faucibus, ac scelerisque facilisis etiam ante aenean potenti.
          </h3>
        </div>
    );
  }
}



export default App;
