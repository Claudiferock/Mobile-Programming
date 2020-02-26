class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      temperature: '', 
      weather: '', 
      image: '',
      query: '',
    };
  }
  componentDidMount() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&APPID=5ff1f1e9eb2d0a2bd5de99a805904392`)
    .then((response) => response.json()) 
    .then((response) => { 
       console.log(response);
        this.setState({ 
          name: response.name.toUpperCase(),
          temperature: response.main.temp.toFixed(0),
          weather: response.weather[0].main,
          image:"http://openweathermap.org/img/w/" + response.weather[0].icon + ".png",
        })
    });
  }

  setQuery = async (event) => {
    await this.setState({ query: event.target.value});
    await console.log(this.state.query);
  }
  
  render() { 
    return (
      <div>
        <div className="search">
          <input className="search__input" type="text" onChange={this.setQuery} placeholder='Search another city...' value={this.state.query}/>
        </div>
        <section className="content__card">
          <h1>{this.state.name}</h1>
          <div className="weather__desciprion">
            <img src={this.state.image} />
            <p> {this.state.weather}</p>
          </div>
          <h2 className="temperature">{this.state.temperature}°C</h2>
        </section>
      </div>
    );
  }
}

ReactDOM.render(<Weather />, document.getElementById('root'));