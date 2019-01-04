import React, { Component } from 'react';
import AppService from '../lib/service';

class RangeSequence extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
        }
    }

    getNext() {
        AppService.getNextRange().then(data => {
            this.setState({ value: data.data.gen })
        })
    }

    resetRange() {
        AppService.resetNextRange().then(data => {
            this.setState({ value: data.data.reset })
        })
    }


    render() {
        return (
            <div className={'functionsWrapper'}>
                <h2> Range Sequence Generator </h2>
                <p> Click to get the next value in the sequence for a sequence with ( start = 1 & step = 2 )</p>
                <button onClick={() => this.getNext()}> Get Next</button>
                <button onClick={() => this.resetRange()}> Reset </button>

                <div>
                    <input type="text" id="value" defaultValue={this.state.value} name="body" className="form-input" />
                </div>
            </div>
        )
    }
}

export default RangeSequence;