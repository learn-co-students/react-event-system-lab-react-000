const React = require('react')

class EyesOnMe extends React.Component{
  constructor(){
    super();

    this.good = this.good.bind(this);
    this.payAttention = this.payAttention.bind(this);
  }

  good(){
    console.log('Good')
  }
  payAttention(){
    console.log('Hey! Eyes on me!')
  }

  render(){
    return (
      <div>
        <button onFocus={this.good} onBlur={this.payAttention} >Press Me</button>
      </div>
    )
  }
}

module.extends = EyesOnMe
