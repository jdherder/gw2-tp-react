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

    //conditional classes
    let signClass = this.props.coins >= 0 ? 'positive' : 'negative';
    let showGold = gold ? 'show' : 'hide';
    let showSilver = !silver && !gold ? 'hide' : 'show';

    return (
      <div className={`CoinDisplay ${signClass}`}>
        <div className="coin-container">
          {sign}
          <div className={`coin-group ${showGold}`}>
            <div className="coin gold"></div>
            <div className="value">{gold}</div>
          </div>
          <div className={`coin-group ${showSilver}`}>
            <div className="coin silver"></div>
            <div className="value">{silver}</div>
          </div>
          <div className="coin-group">
            <div className="coin copper"></div>
            <div className="value">{copper}</div>
          </div>
        </div>
        <div className="label">{this.props.label}</div>
      </div>
    );
  }
}

export default CoinDisplay;
