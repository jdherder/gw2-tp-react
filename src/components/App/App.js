import React, { Component } from 'react';
import CoinEntryForm from '../CoinEntryForm/CoinEntryForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      coinBuyPrice: {
        gold: 0,
        silver: 0,
        copper: 0,
        total: 0
      },
      coinListPrice: {
        gold: 0,
        silver: 0,
        copper: 0,
        total: 0
      },
      coinFeeListing: 0,
      coinFeeExchange: 0,
      coinNet: 0,
      coinProfit: 0
    };
  }
  render() {
    return (
      <div className="App">
        <CoinEntryForm formType='buy' coins={this.state.coinBuyPrice} updateCoins={this.updateValues} />
        <CoinEntryForm formType='list' coins={this.state.coinListPrice} updateCoins={this.updateValues} />

        <hr />

        <p>coinFeeListing: {this.state.coinFeeListing}</p>
        <p>coinFeeExchange: {this.state.coinFeeExchange}</p>
        <p>coinNet: {this.state.coinNet}</p>
        <p>coinProfit: {this.state.coinProfit}</p>
      </div>
    );
  }
  updateValues = (coinType, formType, event) => {
    const value = parseInt(event.target.value, 10) || 0;
    const dataProp = formType === 'buy' ? 'coinBuyPrice' : 'coinListPrice';

    const totalFromGold = coinType === 'gold' ? value * 10000 : this.state[dataProp].gold * 10000;
    const totalFromSilver = coinType === 'silver' ? value * 100 : this.state[dataProp].silver * 100;
    const totalFromCopper = coinType === 'copper' ? value: this.state[dataProp].copper;
    const total = parseInt(totalFromGold + totalFromSilver + totalFromCopper, 10);

    const buyTotal = formType === 'buy' ? total : this.state.coinBuyPrice.total;
    const listTotal = formType === 'list' ? total : this.state.coinListPrice.total;

    let coinFeeListing = Math.round(listTotal * 0.05) || 1;
    let coinFeeExchange = Math.round(listTotal * 0.10) || 1;
    let coinNet = listTotal - coinFeeListing - coinFeeExchange;
    let coinProfit = coinNet - buyTotal;

    if (listTotal <= 0) {
      coinFeeListing = 0;
      coinFeeExchange = 0;
      coinNet = 0;
      coinProfit = 0;
    }

    this.setState({
      [dataProp]: { ...this.state[dataProp], [coinType]: value, total: total },
      coinFeeListing: coinFeeListing,
      coinFeeExchange: coinFeeExchange,
      coinNet: coinNet,
      coinProfit: coinProfit
    });
  };
}

export default App;
