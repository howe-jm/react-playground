import React from 'react';

export default class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8,
  };

  state = {
    chamber: null,
    spinningTheChamber: false,
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  pullTheTrigger = () => {
    this.setState({
      spinningTheChamber: true,
    });
    this.timeout = setTimeout(() => {
      const genNumber = Math.ceil(Math.random() * 8);

      this.setState({
        chamber: genNumber,
        spinningTheChamber: false,
      });
    }, 2000);
  };

  renderConditional() {
    const { chamber, spinningTheChamber } = this.state;
    const { bulletInChamber } = this.props;
    return spinningTheChamber ? 'spinning the chamber and pulling the trigger! ...' : chamber === bulletInChamber ? 'BANG!!!!!' : "you're safe!";
  }

  render() {
    return (
      <div>
        <p>{this.renderConditional()}</p>
        <button onClick={this.pullTheTrigger}>Pull the trigger!</button>
      </div>
    );
  }
}
