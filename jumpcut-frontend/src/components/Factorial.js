import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppService from '../lib/service';

class Factorial extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
        }
    }

    getNext() {
        AppService.getNextFactorial().then(data => {
            this.setState({ value: data.data.gen })
        })
    }

    resetFactorial() {
        AppService.resetNextFactorial().then(data => {
            this.setState({ value: data.data.reset })
        })
    }

    render() {
        return (
            <div className={'functionsWrapper'}>
                <h2> Factorial Sequence Generator </h2>
                <p> Click to get the next value in the sequence </p>
                <button onClick={() => this.getNext()}> Get Next</button>
                <button onClick={() => this.resetFactorial()}> Reset </button>

                <div>
                    <input type="text" id="body" defaultValue={this.state.value} name="body" className="form-input" />
                </div>
            </div>
        )
    }
}

export default withRouter(Factorial);