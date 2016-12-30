import React, { Component } from 'react';

class CoinEntryForm extends Component {
  render() {
    return (
      <div className="SellingPriceForm">
        <div>
          Gold <input type="text" value={this.props.coins.gold} onChange={this.props.updateCoins.bind(null, 'gold', this.props.formType)} />
        </div>
        <div>
          Silver <input type="text" value={this.props.coins.silver} onChange={this.props.updateCoins.bind(null, 'silver', this.props.formType)} />
        </div>
        <div>
          Copper <input type="text" value={this.props.coins.copper} onChange={this.props.updateCoins.bind(null, 'copper', this.props.formType)} />
        </div>

        <p>(total {this.props.formType}): {this.props.coins.total}</p>
      </div>
    );
  }
}

export default CoinEntryForm;
