import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      nClicks1: 0,
      nClicks2: 0,
      nClicks3: 0,
    }
    this.firstClick = this.firstClick.bind(this);
    this.secondClick = this.secondClick.bind(this);
    this.thirdClick = this.thirdClick.bind(this);
  };
  firstClick () {
    console.log('olá, sou botão 1')
    this.setState((estadoAnt, _props) => ({
      nClicks1: estadoAnt.nClicks1 + 1
    }));
    if (this.state.nClicks1 % 2 === 0){

    }
    console.log(this.state.nClicks1) // imprime numero de clicks;
  }
  secondClick () {
    console.log('olá, sou botão 2')
    this.setState((estAnt, _props) => ({
      nClicks2: estAnt.nClicks2 + 1
    }));
    console.log(this.state.nClicks2)
  }
  thirdClick () {
    console.log('olá, sou botão 3')
    this.setState((prevState, _props) => ({
      nClicks3: prevState.nClicks3 +1
    }));
    console.log(this.state.nClicks3)
  }

  btnColor (n) {
    if (n === 0){
      return '';
    }
    return n % 2 === 0 ? 'even' : ''
  };

  render() {
    return (
      <>
      <button 
      onClick={this.firstClick}
      className= {this.btnColor(this.state.nClicks1)}>
        Foi clicado {this.state.nClicks1} vezes
      </button>

      <button 
      onClick={this.secondClick}
      className={this.btnColor(this.state.nClicks2)}>
        Foi clicado {this.state.nClicks2} vezes
      </button>

      <button 
      onClick={this.thirdClick}
        className={this.btnColor(this.state.nClicks3)}>
        Foi clicado {this.state.nClicks3} vezes
      </button>
      </>
    );
  }
};

export default App;
