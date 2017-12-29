import React, { Component } from 'react';

class Board extends Component {

  render() {
    const createBtn = (index) => {
      const cls = index % 3 === 0 ? "cell first" : "cell";
      const value = this.props.data[index];
      return <button 
                 disabled={value || this.props.gameOver}
                 className={cls} 
                 onClick={()=>this.props.onCellClick(index)} 
                 key={index}>{value}
             </button>;
    };
    return (
      <div className="board">
        {[...Array(9).keys()].map((i)=>createBtn(i))}
      </div>
    );
  }
}

export default Board;