import React, { Component } from 'react';
import CoinEntryForm from '../CoinEntryForm/CoinEntryForm';
import CoinDisplay from '../CoinDisplay/CoinDisplay';
import Footer from '../Footer/Footer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      coinBuyPrice: 0,
      coinListPrice: 0,
      coinFeeListing: 0,
      coinFeeExchange: 0,
      coinNet: 0,
      coinProfit: 0
    };
  }
  render() {
    return (
      <div className="App">
        <CoinEntryForm label="Buy Price" updateCoins={this.updateBuyPrice} />
        <CoinEntryForm label="List Price" updateCoins={this.updateListPrice} />

        <CoinDisplay label="Listing Fee" coins={this.state.coinFeeListing} />
        <CoinDisplay label="Exchange Fee" coins={this.state.coinFeeExchange} />
        <CoinDisplay label="Profit" coins={this.state.coinProfit} />

        <Footer />
      </div>
    );
  }

  updateBuyPrice = (coins) => {
    this.setState({coinBuyPrice: coins}, this.updateValues);
  };

  updateListPrice = (coins) => {
    this.setState({coinListPrice: coins}, this.updateValues);
  };

  updateValues = () => {
    let coinFeeListing = Math.round(this.state.coinListPrice * 0.05) || 1;
    let coinFeeExchange = Math.round(this.state.coinListPrice * 0.10) || 1;
    let coinNet = this.state.coinListPrice - coinFeeListing - coinFeeExchange;
    let coinProfit = coinNet - this.state.coinBuyPrice;

    if (this.state.coinListPrice <= 0) {
      coinFeeListing = 0;
      coinFeeExchange = 0;
      coinNet = 0;
      coinProfit = 0;
    }

    this.setState({
      coinFeeListing: coinFeeListing,
      coinFeeExchange: coinFeeExchange,
      coinNet: coinNet,
      coinProfit: coinProfit
    });
  };
}

export default App;
