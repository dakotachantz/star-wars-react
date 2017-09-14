import React, { Component } from 'react'

export default class People extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: "",
            pilot: ""
        }
    }


    // FORM: HANDLE INPUT CHANGES

    handleNameChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    //  FORM: SUBMIT METHOD

    handleFormSubmit = (event) => {
        event.preventDefault();
        let pilot = this.state.value;
        console.log(pilot);
        this.setState({
            value: "",
            pilot: pilot
        })
    }

    render() {
        let value = this.state.value;
        return (
            <section id="form" className="jumbotron">
                <h2>What is your name, pilot?</h2>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <input onChange={this.handleNameChange} className="form-control" type="text" name="value" value={value} placeholder="Enter your name" autoComplete="off" />
                    </div>
                    <button type="submit" className="btn btn-danger">Submit</button>
                </form>
                <h2>{this.state.pilot}</h2>
            </section>
        )
    }
}
