import React, { Component } from 'react';
import '../styles/App.css';
import axios from 'axios';
import Starships from './Starships';
import People from './People';
import gif from '../img/giphy-downsized.gif';

class App extends Component {
  // PROPS AND STATE
  constructor(props) {
    super(props)
    this.state = {
      vehicles: []
    }
  }

  // LIFECYCLE:

  componentWillMount() {
    let url = "https://swapi.co/api/vehicles/";
    axios.get(url)
      .then((response) => {
        let vehicles = response.data.results;
        console.log('vehicles: ', vehicles);
        this.setState({ vehicles });
      });
  }

  // RENDER
  render() {
    let { vehicles } = this.state;
    return (
      <div className="App">
        <section className="jumbotron">
          <h1>Star Wars<hr /></h1>
          <h6>The Vehicles of Star Wars</h6>
          <img src={gif} alt="star wars gif" />
        </section>
        <People />
        <Starships starships={vehicles} />
      </div>
    );
  }
}

export default App;
