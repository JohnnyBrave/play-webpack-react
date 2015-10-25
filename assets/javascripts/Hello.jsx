import React from 'react';

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { key: 'value 12' };
  }
  render() {
    return (
      <div>
        <h1>Hello {this.props.name} - {this.state.key}</h1>
        <hr />
        <p>ddd 123</p>
        <hr />
        <p>somewhat</p>
      </div>
    );
  }
}
