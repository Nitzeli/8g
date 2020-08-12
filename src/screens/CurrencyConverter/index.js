import React, { Component } from "react";

class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantityMXN: 0,
      quantityDLS: 0,
    };
  }

  handleCurrencyInput({ target: { name, value } }) {
    console.log(name, value);
    let mxn, dls;
    if (name === "quantityMXN") {
      mxn = value;
      dls = mxn * 22.42;
    } else {
      dls = value;
      mxn = dls / 22.42;
    }
    this.setState {
      quantityMXN: mxn,
      quantityDLS: dls
    }
  }

  render() {
    const { quantityMXN, quantityDLS } = this.state;
    return (
      <div>
        <form>
          <input
            type="number"
            name="quantityMXN"
            value={quantityMXN}
            onChange={this.handleCurrencyInput}
            placeholder= "MXN"
          />
          <input
            type="number"
            name="quantityDLS"
            value={quantityDLS}
            onChange={this.handleCurrencyInput}
            placeholder= "DLS"
          />
        </form>
      </div>
    );
  }
}

export default CurrencyConverter;
