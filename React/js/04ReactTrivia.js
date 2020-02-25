function Trivia() {
  const [category, setCategory] = React.useState('');
  const [question, setQuestion] = React.useState('');
  const [correctAns, setCorrectAns] = React.useState('');
  const [isReady, setReady] = React.useState(false);
  
  React.useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    fetch('https://opentdb.com/api.php?amount=1')
    .then(response => response.json()) 
    .then(responseData => {
      const data =  responseData.results[0];
      console.log(data);
      setCategory(data.category);
      setQuestion(data.question);
      setCorrectAns(data.correct_answer);
      setReady(true);
    })
    .catch(err => console.error(err));
  }

  if (!isReady) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>Trivias!</h1>
      
      <div className="container">
        <div className="cards">
          <section className="card__question">
            <h2>{question}</h2>
            <p>{category}</p>
          </section>

          <section className="card__answer">
            <h2>{correctAns}</h2>
          </section>
        </div>

        <div className="instructions">
          <h3>Hover on the <mark>dark</mark> area<br/>and reveal the answer</h3>
          <button onClick={() => fetchData()}>New Question</button>
        </div>
      </div>
      
    </div>
  );
};

ReactDOM.render(<Trivia />, document.getElementById("root"));