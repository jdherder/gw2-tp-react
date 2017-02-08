import React, { Component } from 'react';
import './QuantityEntryForm.css';

class QuantityEntryForm extends Component {
  sendUpdate = (event) => {
    const quantity = event.target.value.replace(/[^0-9.]+/g, '');
    this.props.updateQuantity(quantity);
  };
  render() {
    return (
      <div className="QuantityEntryForm">
        <div className="inputs">
          <input ref="quantity"
                 className="quantity"
                 type="text"
                 value={this.props.quantity}
                 onChange={this.sendUpdate}
                 onFocus={()=>{this.refs.quantity.select()}}
                 maxLength="3" />
        </div>
        <div className="label">{this.props.label}</div>
      </div>
    );
  }
}

export default QuantityEntryForm;