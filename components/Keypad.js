const React = require('react');

class Keypad extends React.Component {
  onKeyUp() {
    console.log('Entering password...');
  }

  render() {
    return (
      <input type="password" onKeyUp={this.onKeyUp} />
    )
  }
}

module.exports = Keypad;
