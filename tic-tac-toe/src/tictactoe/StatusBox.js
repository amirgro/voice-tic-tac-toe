import React, { Component } from 'react';

class StatusBox extends Component {

  render() {
    let text = '';
    let btn;
    if(this.props.status) {
        text = this.props.status==='TIE' ? 'We have a tie!' : 'And the winner is - '+this.props.status;
        btn = <button onClick={this.props.onRestart}>RESTART</button>;
    }
    return (
      <div className="status-box">
        <div className="game-state">{text}</div>
        {btn}
      </div>
    );
  }
}

export default StatusBox;