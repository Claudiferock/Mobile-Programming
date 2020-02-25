class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
  }
  buttonIncrement = () => {
    this.setState((prevState) => {
      return {counter: prevState.counter + 1}
    });
  }
  buttonDecrement = () => {
    if (this.state.counter <= 0) {
      buttonReset();
    }
  else {
      this.setState((prevState) => {
      return {counter: prevState.counter - 1}
    });  
}
  
  }
  buttonReset = () => {
  this.setState({counter: 0 }
  )};
  
  render() { 
    return (
      <div>
        <h1>Click counter<br /> with React</h1>
        <div>Your current click count is {this.state.counter}</div>
        <button className="btn--clicked__plus" onClick={this.buttonIncrement}>+</button>
        <button className="btn--clicked__minus" onClick={this.buttonDecrement}>-</button>
        <button className="btn--reset" onClick={this.buttonReset}>RESET</button>

      </div>
    );
  }
}

ReactDOM.render(<div><Counter /></div>, document.getElementById('root'));