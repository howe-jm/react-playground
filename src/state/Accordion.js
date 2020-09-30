import React from 'react';

export default class Accordion extends React.Component {
  static defaultProps = {
    sections: [],
  };

  state = { activeState: null };

  setActiveState = (i) => {
    if (this.state.activeState !== i) {
      this.setState({ activeState: i });
    } else {
      this.setState({ activeState: null });
    }
  };

  renderLiItems(section, i, activeState) {
    return (
      <li key={i}>
        <button type='button' onClick={() => this.setActiveState(i)}>
          {section.title}
        </button>
        {activeState === i && <p> {section.content} </p>}
      </li>
    );
  }

  render() {
    const { activeState } = this.state;
    const { sections } = this.props;
    return <ul>{sections.map((section, i) => this.renderLiItems(section, i, activeState))}</ul>;
  }
}
