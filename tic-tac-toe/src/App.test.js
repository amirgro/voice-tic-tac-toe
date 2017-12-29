import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import TicTacToe from './tictactoe/TicTacToe';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TicTacToe />, div);
});

it('Displays the player symbol (X/O) on the cell clicked, according to turn', () => {
  const wrapper = mount(<TicTacToe />);
  const boardCells = wrapper.find('.tic-tac-toe').find('.board').find('button');
  boardCells.at(2).simulate('click');
  boardCells.at(4).simulate('click');
  expect(boardCells.at(2).text()).toEqual('X');
  expect(boardCells.at(4).text()).toEqual('O');
});

it('Does not override the cell value, after clicking on it more then once', () => {
  const wrapper = mount(<TicTacToe />);
  const boardCells = wrapper.find('.tic-tac-toe').find('.board').find('button');
  boardCells.at(2).simulate('click');
  boardCells.at(2).simulate('click');
  expect(boardCells.at(2).text()).toEqual('X');
  expect(boardCells.at(2).text()).toEqual('X');
});

it('Indicates a tic-tac-toe win, when discovered', () => {
  const wrapper = mount(<TicTacToe />);
  const boardCells = wrapper.find('.tic-tac-toe').find('.board').find('button');
  boardCells.at(0).simulate('click');
  boardCells.at(3).simulate('click');
  boardCells.at(1).simulate('click');
  boardCells.at(4).simulate('click');
  boardCells.at(2).simulate('click');
  const statusBox = wrapper.find('.tic-tac-toe').find('.status-box');
  expect(statusBox.text()).toContain('winner');
  expect(statusBox.text()).toContain('X');
});

it('Indicates a tic-tac-toe tie, if discovered on game over', () => {
  const wrapper = mount(<TicTacToe />);
  const boardCells = wrapper.find('.tic-tac-toe').find('.board').find('button');
  boardCells.at(0).simulate('click');
  boardCells.at(2).simulate('click');
  boardCells.at(6).simulate('click');
  boardCells.at(4).simulate('click');
  boardCells.at(8).simulate('click');
  boardCells.at(7).simulate('click');
  boardCells.at(5).simulate('click');
  boardCells.at(3).simulate('click');
  boardCells.at(1).simulate('click');
  const statusBox = wrapper.find('.tic-tac-toe').find('.status-box');
  expect(statusBox.text()).toContain('tie');
});