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



  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is submitted, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:


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
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render() {
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */
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
    return (
      <div className="App">
        {/*
        The App component needs the following:
         jumbotron section, form section, vehicle cards section.
         Your form will also need a header in which you will pass the state of the form upon submit.
         */}
        <section className="jumbotron">
          <h1>Star Wars<hr /></h1>
          <h6>The Vehicles of Star Wars</h6>
        </section>
        <section id="form" className="jumbotron">
          <h2>What is your name, pilot?</h2>
          <form>
            <div className="form-group">
              <input className="form-control" type="text" placeholder="Enter your name" />
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
          <header><h2>Person</h2></header>
        </section>
        <section className="vehicle-cards container-fluidd">
          {vehicles}
        </section>
      </div>
    );
  }
}

export default App;
