import React, { Component } from 'react'

export default class Starships extends Component {
    render() {
        let starships;
        starships = this.props.starships.map((starship, index) => {
            return (
                <div className="col-sm-4" key={starship.name}>
                    <div className="card">
                        <div className="card-block">
                            <h4 className="card-title">Vehicle: {starship.name}</h4>
                            <h6 className="card-subtitle mb-2 text-muted">Model: {starship.model}</h6>
                            <div className="list-group list-group-item">
                                <h6 className="card-subtitle text-muted">Specs<hr /></h6>

                                <span className="card-text">&nbsp;&nbsp;Manufacturer: {starship.manufacturer}<hr /></span>
                                <span className="card-text">&nbsp;&nbsp;Class: {starship.vehicle_class}<hr /></span>
                                <span className="card-text">&nbsp;&nbsp;Passengers: {starship.passengers}<hr /></span>
                                <span className="card-text">&nbsp;&nbsp;Crew: {starship.crew}<hr /></span>
                                <span className="card-text">&nbsp;&nbsp;Length: {starship.length}<hr /></span>
                                <span className="card-text">&nbsp;&nbsp;Max Speed: {starship.max_atmosphering_speed}<hr /></span>
                                <span className="card-text">&nbsp;&nbsp;Cargo Capacity: {starship.cargo_capacity}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )

        })
        return (
            <section className="starship-cards container-fluidd">
                {starships}
            </section>
        );
    }
};
