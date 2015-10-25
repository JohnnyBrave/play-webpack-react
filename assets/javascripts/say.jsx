import React from 'react';
import ReactDOM from 'react-dom';

class SayHello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { who: '' };
  }
  handleChange = (e) => {
    this.setState({ who: "who is " + e.target.value.trim() });
  }
  render() {
    return (
      <div>
        <input type="text" ref="who" onChange={this.handleChange} />
        <p>Hello {this.props.who} 2342</p>
        <p>{this.state.who}</p>
      </div>
    );
  }
}

ReactDOM.render(<SayHello who='World! !!!' />, document.getElementById('hello'));
