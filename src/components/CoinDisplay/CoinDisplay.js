import React, { Component } from 'react';
import Constants from '../../constants';
import './CoinDisplay.css';

class CoinDisplay extends Component {
  render() {
    let total = Math.abs(this.props.coins);

    let gold = Math.floor(total / Constants.goldMultiplier);
    total -= (gold * Constants.goldMultiplier);

    let silver = Math.floor(total / Constants.silverMultiplier);
    total -= (silver * Constants.silverMultiplier);

    let copper = Math.floor(total / Constants.copperMultiplier);

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
