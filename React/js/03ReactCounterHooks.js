function HooksCounter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Click counter<br />with React Hooks</h1>
      <p>Your current click count is {count}</p>
      <button className="btn--clicked__plus" onClick={() => setCount(count + 1)}>+</button>
      <button className="btn--clicked__minus" onClick={() => setCount(count - 1)}>-</button>
      <button className="btn--reset" onClick={() => setCount(0)}>RESET</button>
    </div>
  );
};

ReactDOM.render(<HooksCounter />, document.getElementById("root"));