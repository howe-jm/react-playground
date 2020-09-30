import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    if (this.state.seconds < 8) {
      this.setState((state) => ({
        seconds: state.seconds + 1,
      }));
    } else {
      clearInterval(this);
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <p>{this.state.seconds === 8 ? 'BOOM!' : this.state.seconds % 2 === 0 ? 'Tick' : 'Tock'}</p>
      </div>
    );
  }
}
