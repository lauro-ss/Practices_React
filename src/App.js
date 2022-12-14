import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React from 'react';

//<img src={logo} className="App-logo" alt="logo" />

function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

function Quadrado(props) {
  return (
    <button
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

class Tabuleiro extends React.Component {
  getQuadrado(i) {
    return (
      <Quadrado
        value={this.props.quadrados[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {


    return (
      <div>
        <div className="board-row">
          {this.getQuadrado(0)}
          {this.getQuadrado(1)}
          {this.getQuadrado(2)}
        </div>
        <div className="board-row">
          {this.getQuadrado(3)}
          {this.getQuadrado(4)}
          {this.getQuadrado(5)}
        </div>
        <div className="board-row">
          {this.getQuadrado(6)}
          {this.getQuadrado(7)}
          {this.getQuadrado(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        { quadrados: Array(9).fill(null) },
      ],
      stepNumber: 0,
      isX: true,
    };
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const quadrados = current.quadrados.slice();
    if (calculateWinner(quadrados) || quadrados[i]) {
      return;
    }
    quadrados[i] = this.state.isX ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        quadrados: quadrados,
      }]),
      stepNumber: history.length,
      isX: !this.state.isX,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    const moves = history.map((step, move) => {
      const desc = move ? "Ir para a jogada " + move : "Reiniciar o jogo";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)} >{desc}</button>
        </li>
      );
    });

    let status = "Próximo jogador: " + (this.state.isX ? 'X' : 'O');
    if (calculateWinner(current.quadrados)) {
      status = "Vencedor " + (!this.state.isX ? 'X' : 'O');
    }

    return (
      <div className='game'>
        <div className='game-board'>
          <Tabuleiro
            quadrados={current.quadrados}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className='game-info'>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  };
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

//<Ola nome="Lauro" />
class Ola extends React.Component {
  render() {
    return (
      <h2>Olá {this.props.nome}</h2>
    );
  }
}

export default App;
