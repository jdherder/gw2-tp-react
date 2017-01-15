import React, { Component } from 'react';
import './CoinDisplay.css';

class CoinEntryForm extends Component {
  render() {
    let total = this.props.coins;

    let gold = Math.floor(total / 10000);
    total -= (gold * 10000);

    let silver = Math.floor(total / 100);
    total -= (silver * 100);

    let copper = total;

    return (
      <div className="CoinDisplay">
        <div className="coin-container">
          <div className="coin gold"></div><div className="value">{gold}</div>
          <div className="coin silver"></div><div className="value">{silver}</div>
          <div className="coin copper"></div><div className="value">{copper}</div>
        </div>
        <div className="label">{this.props.label}</div>
      </div>
    );
  }
}

export default CoinEntryForm;
