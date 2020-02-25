class HelloComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.destinatary}!</h1>
      </div>
    );
  }
}

ReactDOM.render(<HelloComponent destinatary="World"/>, document.getElementById('root'));