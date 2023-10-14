
import './App.css';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      board: Array(9).fill(null),
      player: 'X',
      winner: null,
    };
  }

  handleClick(index) {
    if (this.state.board[index] === null && !this.state.winner) {
      const newBoard = [...this.state.board];
      newBoard[index] = this.state.player;
      const newPlayer = this.state.player === 'X' ? 'O' : 'X';
      this.setState({
        board: newBoard,
        player: newPlayer,
        winner: this.calculateWinner(newBoard),
      });
    }
  }

  calculateWinner(board) {
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
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  renderSquare(index) {
    return (
      <button className="square" onClick={() => this.handleClick(index)}>
        {this.state.board[index]}
      </button>
    );
  }

  render() {
    const status = this.state.winner
      ? `Winner: ${this.state.winner}`
      : `Next player: ${this.state.player}`;

    return (
      <div className="App">
        <div className="status">{status}</div>
        <div className="board">
          {this.state.board.map((square, index) => this.renderSquare(index))}
        </div>
      </div>
    );
  }
}

export default App;
