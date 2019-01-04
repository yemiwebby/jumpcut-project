import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className={'homeWrapper'}>
                <p> Click any of the link below to activate a sequencer function </p>


                <div className={'homeContainer'}>
                    <div>
                        <Link to={'/factorial'}> Activate Factorial Sequence </Link>
                    </div>

                    <div>
                        <Link to={'/fibonacci'}> Activate Fibonacci Sequence </Link>
                    </div>

                    <div>
                        <Link to={'/partial-sum'}> Activate Partial Sum Sequence </Link>
                    </div>

                    <div>
                        <Link to={'/prime-sequence'}> Activate Prime Sequence </Link>
                    </div>

                    <div>
                        <Link to={'/range-sequence'}> Activate Range Sequence </Link>
                    </div>
                </div>


            </div>
        )
    }
}

export default Home;