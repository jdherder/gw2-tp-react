import React, { Component } from 'react';
import Constants from '../../constants';
import CoinEntryForm from '../CoinEntryForm/CoinEntryForm';
import CoinDisplay from '../CoinDisplay/CoinDisplay';
import QuantityEntryForm from '../QuantityEntryForm/QuantityEntryForm';
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
      coinProfit: 0,
      quantity: 1,
    };
  }
  render() {
    return (
      <div className="App">
        <CoinEntryForm label="Buy Price" updateCoins={this.updateBuyPrice} />
        <CoinEntryForm label="List Price" updateCoins={this.updateListPrice} />
        <QuantityEntryForm label="Quantity" quantity={this.state.quantity} updateQuantity={this.updateQuantity} />

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

  updateQuantity = (quantity) => {
    this.setState({quantity: quantity}, this.updateValues);
  };

  updateValues = () => {
    let quantity = this.state.quantity || 1;
    let totalList = this.state.coinListPrice * quantity;
    let totalBuy = this.state.coinBuyPrice * quantity;
    let coinFeeListing = Math.round(totalList * Constants.listingFeeMultiplier) || 1;
    let coinFeeExchange = Math.round(totalList * Constants.exchangeFeeMultiplier) || 1;
    let coinNet = totalList - coinFeeListing - coinFeeExchange;
    let coinProfit = coinNet - totalBuy;

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
