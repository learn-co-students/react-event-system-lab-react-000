const React = require('react')

class Keypad extends React.Component {
  constructor(){
    super();

    this.enteringPassword = this.enteringPassword.bind(this);
  }

  enteringPassword(){
    console.log('Entering password...');
  }

  render(){
    return (
      <div>
        <input onKeyUp={this.enteringPassword} type='password' />
      </div>
    )
  }
}

module.exports = Keypad;
