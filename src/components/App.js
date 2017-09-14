import React, { Component } from 'react';
import '../styles/App.css';
import axios from 'axios';

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:
  constructor(props) {
    super(props)
    this.state = {
      vehicles: [],
      value: "",
      pilot: ""
    }
  }



  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:

  handleNameChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }


  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is submitted, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:

  handleFormSubmit = (event) => {
    event.preventDefault();
    let pilot = this.state.value;
    console.log(pilot);

    this.setState({
      value: "",
      pilot: pilot
    })
  }

  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:

  componentDidMount() {
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
    let vehicles;
    vehicles = this.state.vehicles.map((vehicle, index) => {
      return (
        <div className="col-sm-4" key={vehicle.name}>
          <div className="card">
            <div className="card-block">
              <h4 className="card-title">Vehicle: {vehicle.name}</h4>
              <h6 className="card-subtitle mb-2 text-muted">Model: {vehicle.model}</h6>
              <div className="list-group list-group-item">
                <h6 className="card-subtitle text-muted">Specs<hr /></h6>

                <span className="card-text">&nbsp;&nbsp;Manufacturer: {vehicle.manufacturer}<hr /></span>
                <span className="card-text">&nbsp;&nbsp;Class: {vehicle.vehicle_class}<hr /></span>
                <span className="card-text">&nbsp;&nbsp;Passengers: {vehicle.passengers}<hr /></span>
                <span className="card-text">&nbsp;&nbsp;Crew: {vehicle.crew}<hr /></span>
                <span className="card-text">&nbsp;&nbsp;Length: {vehicle.length}<hr /></span>
                <span className="card-text">&nbsp;&nbsp;Max Speed: {vehicle.max_atmosphering_speed}<hr /></span>
                <span className="card-text">&nbsp;&nbsp;Cargo Capacity: {vehicle.cargo_capacity}</span>
              </div>
            </div>
          </div>
        </div>
      );
    });
    let value = this.state.value;
    return (
      <div className="App">
        <section className="jumbotron">
          <h1>Star Wars<hr /></h1>
          <h6>The Vehicles of Star Wars</h6>
        </section>
        <section id="form" className="jumbotron">
          <h2>What is your name, pilot?</h2>
          <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <input onChange={this.handleNameChange} className="form-control" type="text" name="value" value={value} placeholder="Enter your name" autoComplete="off" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <h2>{this.state.pilot}</h2>
        </section>
        <section className="vehicle-cards container-fluidd">
          {vehicles}
        </section>
      </div>
    );
  }
}

export default App;
