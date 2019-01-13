import React, { Component } from 'react';
import AppService from '../lib/service';

const componentGenerator = (getNextThing, resetNextThing, title) => (
    class extends Component {
        constructor(props) {
            super(props);

            this.state = {
                value: '',
                errOccured: false
            }
        }

        getNext() {
            AppService[getNextThing]().then(data => {
                this.setState({ value: data.data.gen })
            }).catch(err => {
                if (err.response.data) {
                    this.setState({ errOccured: true })
                }
            })
        }

        reset() {
            AppService[resetNextThing]().then(data => {
                this.setState({ value: data.data.reset, errOccured: false })
            })
        }

        render() {
            const errOccured = this.state.errOccured;
            return (
                <div className={'functionsWrapper'}>
                    <h2> {title} </h2>
                    <p> Click to get the next value in the sequence </p>
                    <button onClick={() => this.getNext()}> Get Next</button>
                    <button onClick={() => this.reset()}> Reset </button>

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
)

export default componentGenerator;
