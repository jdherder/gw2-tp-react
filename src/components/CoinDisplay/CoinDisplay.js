import React, { Component } from 'react';
import './CoinDisplay.css';

class CoinDisplay extends Component {
  render() {
    let total = Math.abs(this.props.coins);

    let gold = Math.floor(total / 10000);
    total -= (gold * 10000);

    let silver = Math.floor(total / 100);
    total -= (silver * 100);

    let copper = total;

    let sign = this.props.coins >= 0 ? '' : '-';

    return (
      <div className={"CoinDisplay " + (this.props.coins >= 0 ? 'positive' : 'negative')}>
        <div className="coin-container">
          {sign}
          <div className="coin gold"></div><div className="value">{gold}</div>
          <div className="coin silver"></div><div className="value">{silver}</div>
          <div className="coin copper"></div><div className="value">{copper}</div>
        </div>
        <div className="label">{this.props.label}</div>
      </div>
    );
  }
}

export default CoinDisplay;
