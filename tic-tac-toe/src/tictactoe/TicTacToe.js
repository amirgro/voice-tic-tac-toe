import React, { Component } from 'react';
import Board from './Board.js';
import StatusBox from './StatusBox.js';
import './tictactoe.css';

const initialState = {
  board:['','','','','','','','',''],
  currentPlayer:'X',
  roundNumber:0
};

class TicRacToe extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    const gameStatus = this._analyzeBoardStatus(this.state.board,this.state.roundNumber);
    return (
      <div className="tic-tac-toe">
        <Board data={this.state.board} onCellClick={this.onCellClick.bind(this)} gameOver={gameStatus}/>
        <StatusBox status={gameStatus} onRestart={()=>this.setState(initialState)}/>
      </div>
    );
  }

  onCellClick(cellId) {
    const newBoard = this._updateBoard(Object.assign({},this.state.board),cellId,this.state.currentPlayer);
    const nextPlayer = this._getNextPlayer(this.state.currentPlayer);
    this.setState({board:newBoard,currentPlayer:nextPlayer,roundNumber:this.state.roundNumber+1});
  }

  _updateBoard(board,cellId,player){
    board[cellId] = board[cellId] || player; //Do not update board if the cell is already occupied
    return board;
  }

  _getNextPlayer(currentPlayer) {
    return currentPlayer==='X' ? 'O' : 'X';
  }

  _analyzeBoardStatus(board,roundNumber) {
    const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    const winFound = wins.find((win) => {return win.every((i)=>board[win[0]]===board[i])});
    if(winFound){
      const theWinner = board[winFound[0]];
      return theWinner;
    } else {
      return roundNumber===9 ? 'TIE' : '';
    }
  }
}

export default TicRacToe;