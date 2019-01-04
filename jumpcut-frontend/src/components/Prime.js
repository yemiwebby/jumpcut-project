import React, { Component } from 'react';
import AppService from '../lib/service';

class Prime extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
        }
    }

    getNext() {
        AppService.getNextPrime().then(data => {
            this.setState({ value: data.data.gen })
        })
    }

    resetPrimeSequence() {
        AppService.resetNextPrime().then(data => {
            this.setState({ value: data.data.reset })
        })
    }

    render() {
        return (
            <div className={'functionsWrapper'}>
                <h2> Prime Sequence Generator </h2>
                <p> Click to get the next value in the sequence </p>
                <button onClick={() => this.getNext()}> Get Next</button>
                <button onClick={() => this.resetPrimeSequence()}> Reset </button>

                <div>
                    <input type="text" id="body" defaultValue={this.state.value} name="body" className="form-input" />
                </div>

            </div>
        )
    }
}

export default Prime;