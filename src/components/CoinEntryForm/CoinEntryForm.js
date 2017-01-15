import React, { Component } from 'react';
import './CoinEntryForm.css';

class CoinEntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gold: 0,
      silver: 0,
      copper: 0,
    }
  }
  updateGold = (event) => {
    this.setState({gold: event.target.value.replace(/[^0-9.]+/g, '')}, this.sendUpdate);
  };
  updateSilver = (event) => {
    this.setState({silver: event.target.value.replace(/[^0-9.]+/g, '')}, this.sendUpdate);
  };
  updateCopper = (event) => {
    this.setState({copper: event.target.value.replace(/[^0-9.]+/g, '')}, this.sendUpdate);
  };
  sendUpdate = () => {
    const total = parseInt(this.state.gold * 10000, 10) + parseInt(this.state.silver * 100, 10) + parseInt(this.state.copper, 10);
    const value = total || 0;
    this.props.updateCoins(value);
  };
  render() {
    return (
      <div className="CoinEntryForm">
        <div className="inputs">
          <input ref="gold"
                 className="gold"
                 type="text"
                 value={this.state.gold}
                 onChange={this.updateGold}
                 onFocus={()=>{this.refs.gold.select()}}
                 maxLength="4" />
          <input ref="silver"
                 className="silver"
                 type="text"
                 value={this.state.silver}
                 onChange={this.updateSilver}
                 onFocus={()=>{this.refs.silver.select()}}
                 maxLength="2" />
          <input ref="copper"
                 className="copper"
                 type="text"
                 value={this.state.copper}
                 onChange={this.updateCopper}
                 onFocus={()=>{this.refs.copper.select()}}
                 maxLength="2" />
        </div>
        <div className="label">{this.props.label}</div>
      </div>
    );
  }
}

export default CoinEntryForm;
