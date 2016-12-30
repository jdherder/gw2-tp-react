import React, { Component } from 'react';
import './CoinEntryForm.css';
// import copper from './images/copper.png';
// import silver from './images/silver.png';
// import gold from './images/gold.png';

class CoinEntryForm extends Component {
  render() {
    return (
      <div className="CoinEntryForm">
        <p>{this.props.formType.toUpperCase()} Price</p>
        <div>
          <input ref="gold"
                 className="gold"
                 type="text"
                 value={this.props.coins.gold}
                 onChange={this.props.updateCoins.bind(null, 'gold', this.props.formType)}
                 onFocus={()=>{this.refs.gold.select()}} />
        </div>
        <div>
          <input ref="silver"
                 className="silver"
                 type="text"
                 value={this.props.coins.silver}
                 onChange={this.props.updateCoins.bind(null, 'silver', this.props.formType)}
                 onFocus={()=>{this.refs.silver.select()}} />
        </div>
        <div>
          <input ref="copper"
                 className="copper"
                 type="text"
                 value={this.props.coins.copper}
                 onChange={this.props.updateCoins.bind(null, 'copper', this.props.formType)}
                 onFocus={()=>{this.refs.copper.select()}} />
        </div>

        <p className="debug">(total {this.props.formType}): {this.props.coins.total}</p>
      </div>
    );
  }
}

export default CoinEntryForm;
