import React, { Component } from 'react';
import AppService from '../lib/service';

class PartialSum extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            errOccured: false
        }
    }

    getNext() {
        AppService.getNextPartial().then(data => {
            this.setState({ value: data.data.gen })
        }).catch(err => {
            if (err.response.data) {
                this.setState({ errOccured: true })
            }
        })
    }

    resetPartial() {
        AppService.resetNextPartial().then(data => {
            this.setState({ value: data.data.reset, errOccured: false })
        })
    }


    render() {
        const errOccured = this.state.errOccured;
        return (
            <div className={'functionsWrapper'}>
                <h2> Partial Sum Sequence Generator </h2>
                <p> Click to get the next value in the sequence for a sequence with (1, 3, 7, 2, 0)</p>
                <button onClick={() => this.getNext()}> Get Next</button>
                <button onClick={() => this.resetPartial()}> Reset </button>

                <div>
                    <input type="text" id="body" defaultValue={this.state.value} name="body" className="form-input" />
                </div>

                {errOccured && (
                    <div className="alert-info">
                        Sequence is currently out of value. Kindly reset
                    </div>
                )}

            </div>
        )
    }
}

export default PartialSum;